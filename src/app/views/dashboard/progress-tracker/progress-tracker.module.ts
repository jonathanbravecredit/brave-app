// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponentsModule } from "@shared/components/shared-components.module";
import { SharedPipesModule } from "@shared/pipes/shared-pipes.module";
import { ProgressTrackerRoutingModule } from "@views/dashboard/progress-tracker/progress-tracker.routing";
import { ProgressTrackerGoalCardComponent } from "@views/dashboard/progress-tracker/components/progress-tracker-goal-card/progress-tracker-goal-card.component";
import { ProgressTrackerDisclaimerComponent } from "@views/dashboard/progress-tracker/components/progress-tracker-disclaimer/progress-tracker-disclaimer.component";
import { ProgressTrackerHeaderComponent } from "@views/dashboard/progress-tracker/components/progress-tracker-header/progress-tracker-header.component";
import { ProgressTrackerPureComponent } from "@views/dashboard/progress-tracker/progress-tracker-pure/progress-tracker-pure.component";
import { FutureScoreCardComponent } from "@views/dashboard/progress-tracker/components/future-score-card/future-score-card.component";
import { ProgressTrackerComponent } from "@views/dashboard/progress-tracker/progress-tracker/progress-tracker.component";
import { ProgressTrackerParentComponent } from "@views/dashboard/progress-tracker/progress-tracker.component";
import { NgxMaskModule } from "ngx-mask";
import { SharedServicesModule } from "@shared/services/shared-services.module";

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  NgxMaskModule,
  ProgressTrackerRoutingModule,
];
const components = [
  ProgressTrackerParentComponent,
  ProgressTrackerComponent,
  ProgressTrackerPureComponent,
  ProgressTrackerHeaderComponent,
  ProgressTrackerDisclaimerComponent,
  ProgressTrackerGoalCardComponent,
  FutureScoreCardComponent,
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class ProgressTrackerModule {}
