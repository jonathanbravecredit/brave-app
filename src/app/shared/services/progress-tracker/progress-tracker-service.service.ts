import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { environment } from '@environments/environment';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';
import {
  Initiative,
  InitiativePatchBody,
  InitiativeSubTask,
  InitiativeTask,
} from '@shared/interfaces/progress-tracker.interface';
import * as ProgressTrackerActions from '@store/progress-tracker/progress-tracker.actions';
import { Select, Store } from '@ngxs/store';
import { ProgressTrackerState, ProgressTrackerStateModel } from '@store/progress-tracker';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ICircleProgressStep } from '@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar';
import { TransunionInput } from '@shared/services/aws/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProgressTrackerService implements OnDestroy {
  @Select(ProgressTrackerState) initiative$!: Observable<ProgressTrackerStateModel>;
  initiativeSub$: Subscription | undefined;
  initiative: Initiative | null = null;
  initiativeSteps: ICircleProgressStep[] = [];
  initiativeSteps$: BehaviorSubject<ICircleProgressStep[]> = new BehaviorSubject<ICircleProgressStep[]>([]);

  enrolledOn: string | null | undefined;
  enrolledScore: string | null | undefined;
  currentScore: string | null | undefined;
  storeSub$: Subscription | undefined;

  constructor(private http: HttpClient, private auth: AuthService, private store: Store) {
    this.subscribeToProgressTrackerData();
    this.subscribeToStoreValues();
  }

  ngOnDestroy(): void {
    this.initiativeSub$?.unsubscribe();
    this.storeSub$?.unsubscribe();
  }

  subscribeToProgressTrackerData(): void {
    this.initiativeSub$ = this.initiative$.pipe(filter((res) => res !== undefined)).subscribe((res) => {
      if (res.data) {
        this.createInitiativeSteps(res.data);
        this.initiativeSteps$.next(this.initiativeSteps);
      }
      this.initiative = res.data;
    });
  }

  subscribeToStoreValues(): void {
    this.storeSub$ = this.store.subscribe((state) => {
      const tu = state?.appData?.agencies?.transunion as TransunionInput;
      this.enrolledOn = tu?.enrolledOn;
      this.enrolledScore = tu?.enrollVantageScore?.serviceProductValue;
      this.currentScore = tu?.fulfillMergeReport?.serviceProductValue;
    });
  }

  findFutureScore(): number | undefined {
    const tasks = this.initiative?.initiativeTasks || [];
    return tasks.reduce((acc, item: InitiativeTask) => {
      if (!item) return acc;
      const subTasks = item.subTasks;
      if (!subTasks) return acc;
      return (
        subTasks.reduce((a, b) => {
          return b.taskCard.metric ? a + +b.taskCard?.metric : a;
        }, 0) + acc
      );
    }, 0);
  }

  createInitiativeSteps(initiative: Initiative) {
    const initTaskLen = initiative?.initiativeTasks?.length || 0;
    const tasks = initiative?.initiativeTasks || [];
    const subTasks = initiative?.initiativeTasks[0].subTasks || [];
    this.initiativeSteps = initTaskLen > 1 ? tasks.map(mapTask) : subTasks.map(mapTask);
  }

  updateSteps(task: InitiativeSubTask | InitiativeTask): void {
    this.initiativeSteps.forEach((step) => {
      if ((step.stepId = task.taskId)) {
        step.stepComplete = task.taskStatus === 'complete';
      }
    });
  }

  updateProgressTrackerState(progressTrackerData: Initiative) {
    this.store.dispatch(new ProgressTrackerActions.Add({ data: progressTrackerData }));
  }

  async getProgressTrackerData(): Promise<Initiative | null> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    try {
      let res = await this.http.get<Initiative>(environment.api + '/initiatives', { headers }).toPromise();
      this.updateProgressTrackerState(res);
      return res;
    } catch (error) {
      return null;
    }
  }

  async updateProgressTrackerData(patchBody: InitiativePatchBody): Promise<Initiative | null> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    try {
      let res = await this.http.put<Initiative>(environment.api + '/initiatives', patchBody, { headers }).toPromise(); //!change test url
      await this.getProgressTrackerData();
      return res;
    } catch (err) {
      return null;
    }
  }

  async postUserGoal(goalInfo: IGoalInfo) {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    const patchBody = {
      programId: goalInfo.programId,
      reason: goalInfo.reason,
    };

    return await this.http.post<Initiative>(environment.api + '/initiatives', patchBody, { headers }).toPromise();
  }

  async postThenGetUserGoal(goalInfo: IGoalInfo) {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    const patchBody = {
      programId: goalInfo.programId,
      reason: goalInfo.reason,
    };
    await this.http.post<Initiative>(environment.api + '/initiatives', patchBody, { headers }).toPromise();
    let res = await this.http.get<Initiative>(environment.api + '/initiatives', { headers }).toPromise();
    this.updateProgressTrackerState(res);
    return res
  }
}

const mapTask = (task: InitiativeTask | InitiativeSubTask, i: number) => {
  const { taskId, taskStatus, taskLabel } = task;
  return {
    id: i,
    stepId: taskId,
    stepActive: true,
    stepComplete: taskStatus === 'complete',
    stepLabel: taskLabel,
  };
};
