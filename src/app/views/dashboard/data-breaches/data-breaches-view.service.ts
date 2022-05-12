import { Injectable } from "@angular/core";
import { IDataBreachesView } from "./data-breaches.model";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import { IBreachCard } from "../../../shared/interfaces/breach-card.interface";
import * as _ from "lodash";
import { Store } from "@ngxs/store";
import { APIService } from "../../../shared/services/aws/api.service";
import * as DashboardActions from "@store/dashboard/dashboard.actions";
import { AppDataStateModel } from "../../../store/app-data/app-data.model";
import { UpdateAppDataInput } from "../../../../../amplify/backend/function/PatchTransunionCustomResolver/ts/lib/aws/api.types";

@Injectable({
  providedIn: "root",
})
export class DataBreachesViewService {
  model: IDataBreachesView = {} as IDataBreachesView;
  model$: BehaviorSubject<IDataBreachesView> =
    new BehaviorSubject<IDataBreachesView>({} as IDataBreachesView);

  constructor(
    private router: Router,
    private store: Store,
    private api: APIService
  ) {}

  initialModelMerge(breaches: IBreachCard[] | undefined) {
    let modelObject: Partial<IDataBreachesView> = {} as IDataBreachesView;

    modelObject.breachCards = breaches;
    const { reviewed, unreviewed } = this.reviewCards(breaches);
    modelObject.reviewed = reviewed;
    modelObject.unreviewed = unreviewed;
    modelObject.isEmpty = this.getIsEmpty(unreviewed);
    this.mergeModel(modelObject);
  }

  goToReport(): void {
    this.router.navigate([routes.root.dashboard.report.full]);
  }

  reviewCards(cards: IBreachCard[] | undefined): {
    reviewed: IBreachCard[];
    unreviewed: IBreachCard[];
  } {
    let reviewed: IBreachCard[] = [];
    let unreviewed: IBreachCard[] = [];
    cards?.forEach((c) => {
      if (c.reviewed) reviewed.push(c);
      if (!c.reviewed) unreviewed.push(c);
    });
    return { reviewed, unreviewed };
  }

  getIsEmpty(unreviewed: IBreachCard[]): boolean {
    return unreviewed.length === 0;
  }

  updateReviewed(idx: number): void {
    let modelObj: Partial<IDataBreachesView> = {};
    if (this.model.unreviewed.length === 1) {
      modelObj.unreviewed = [];
      modelObj.isEmpty = true;
    } else {
      this.model.unreviewed.splice(idx, 1);
      modelObj.unreviewed = [...this.model.unreviewed];
      modelObj.isEmpty = this.model.unreviewed.length === 0;
    }
    this.mergeModel(modelObj);
  }

  mergeModel(modelObject: Partial<IDataBreachesView>) {
    _.merge(this.model, modelObject);
    this.model$.next(this.model);
  }

  onShareClick(): void {
    window.location.href = `mailto:?body=Hello!%0A%0AI%20just%20learned%20about%20a%20data%20breach%20I%20wanted%20to%20share%20with%20you%2C%20in%20case%20it%20affected%20you...%20I%20found%20it%20with%20a%20free%20new%20app%2C%20Brave%20Credit.%0A%0ATo%20see%20the%20breach%20and%20learn%20what%20steps%20to%20take%20if%20you%20were%20compromised%2C%20just%20register%20by%20going%20to%3A%20%0A%0Ahttps%3A%2F%2Fbrave.credit%0A%0AAfter%20you%20register%2C%20click%20on%20the%20'credit%20breaches'%20section%20on%20your%20dashboard.%0A%0APlease%20review%20it%20so%20that%20if%20you%20were%20affected%20you%20can%20take%20steps%20to%20protect%20your%20credit%20scores%20and%20identity!%20Hopefully%20everything's%20good.`;
  }

  onCardClick(idx: number): void {
    this.store
      .dispatch(new DashboardActions.MarkDatabreachAsReviewed(idx))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          console.log("failed to update state");
          return;
        } else {
          this.api.UpdateAppData(input); //* instead use state service
        }
      });
  }
}
