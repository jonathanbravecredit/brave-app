import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WaitlistWelcomeComponent } from "./waitlist-welcome/waitlist-welcome.component";
import { WaitlistRoutingModule } from "./waitlist.routing";
import { SharedPipesModule } from "../../shared/pipes/shared-pipes.module";
import { SharedDirectivesModule } from "../../shared/directives/shared-directives.module";
import { SharedComponentsModule } from "../../shared/components/shared-components.module";
import { WaitlistComponent } from "./waitlist.component";
import { WaitlistFormComponent } from './waitlist-form/waitlist-form.component';

@NgModule({
  declarations: [
    WaitlistComponent,
    WaitlistWelcomeComponent,
    WaitlistFormComponent,
  ],
  imports: [
    CommonModule,
    WaitlistRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule,
  ],
})
export class WaitlistModule {}
