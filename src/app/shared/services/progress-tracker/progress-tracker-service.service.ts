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

@Injectable({
  providedIn: 'root',
})
export class ProgressTrackerService implements OnDestroy {
  @Select(ProgressTrackerState) initiative$!: Observable<ProgressTrackerStateModel>;
  private initiativeSub$: Subscription | undefined;
  initiative: Initiative | null = null;
  initiativeSteps: ICircleProgressStep[] = [];
  initiativeSteps$: BehaviorSubject<ICircleProgressStep[]> = new BehaviorSubject<ICircleProgressStep[]>([]);

  constructor(private http: HttpClient, private auth: AuthService, private store: Store) {
    this.subscribeToProgressTrackerData();
  }

  findFutureScore(): number | undefined {
    return this.initiative?.initiativeTasks?.reduce((total: number, initiativeTasks: InitiativeTask) => {
      const subTasks = initiativeTasks.subTasks;
      if (!subTasks) return total + 0;
      return (
        total +
        subTasks.reduce((a, b) => {
          return b.taskCard.metric ? a + +b.taskCard?.metric : a;
        }, 0)
      );
    }, 0);
  }

  subscribeToProgressTrackerData(): void {
    this.initiativeSub$ = this.initiative$
      .pipe(
        filter((res) => {
          return res !== undefined;
        }),
      )
      .subscribe((res) => {
        if (res.data) {
          this.createInitiativeSteps(res.data);
          this.initiativeSteps$.next(this.initiativeSteps);
        }
        this.initiative = res.data;
      });
  }

  createInitiativeSteps(initInitiative: Initiative) {
    if (initInitiative?.initiativeTasks && initInitiative?.initiativeTasks.length > 1) {
      this.initiativeSteps = initInitiative?.initiativeTasks?.map((primaryTask: InitiativeTask, i: number) => {
        return {
          id: i,
          stepId: primaryTask.taskId,
          stepActive: true,
          stepComplete: primaryTask.taskStatus === 'complete',
          stepLabel: primaryTask.taskLabel,
        };
      });
    } else {
      this.initiativeSteps =
        initInitiative?.initiativeTasks[0].subTasks?.map((subTask: InitiativeSubTask, i: number) => {
          return {
            id: i,
            stepId: subTask.taskId,
            stepActive: true,
            stepComplete: subTask.taskStatus === 'complete',
            stepLabel: subTask.taskLabel,
          };
        }) || [];
    }
  }

  updateSteps(task: InitiativeSubTask | InitiativeTask): void {
    this.initiativeSteps.forEach((step) => {
      if ((step.stepId = task.taskId)) {
        step.stepComplete = task.taskStatus === 'complete';
      }
    });
  }

  ngOnDestroy(): void {
    this.initiativeSub$?.unsubscribe();
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
}
