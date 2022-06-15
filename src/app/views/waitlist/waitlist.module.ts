import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WaitlistWelcomeComponent } from "./waitlist-welcome/waitlist-welcome.component";
import { WaitlistThankYouComponent } from "./waitlist-thank-you/waitlist-thank-you.component";
import { WaitlistRoutingModule } from "./waitlist.routing";

@NgModule({
  declarations: [WaitlistWelcomeComponent, WaitlistThankYouComponent],
  imports: [CommonModule, WaitlistRoutingModule],
})
export class WaitlistModule {}
