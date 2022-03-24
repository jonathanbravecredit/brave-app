import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FilledChecktextProgressbarComponent } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { ProgressTrackerComponent } from '@views/dashboard/progress-tracker/progress-tracker/progress-tracker.component';
import { FutureScoreCardComponent } from '@views/dashboard/progress-tracker/components/future-score-card/future-score-card.component';
import { ProgressTrackerPureComponent } from '@views/dashboard/progress-tracker/progress-tracker-pure/progress-tracker-pure.component';
import { ProgressTrackerHeaderComponent } from '@views/dashboard/progress-tracker/components/progress-tracker-header/progress-tracker-header.component';
import { ProgressTrackerDisclaimerComponent } from '@views/dashboard/progress-tracker/components/progress-tracker-disclaimer/progress-tracker-disclaimer.component';
import { ProgressTrackerGoalCardComponent } from '@views/dashboard/progress-tracker/components/progress-tracker-goal-card/progress-tracker-goal-card.component';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'app/views/snapshots/progress-tracker',
  component: ProgressTrackerComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FilledChecktextProgressbarComponent,
        FutureScoreCardComponent,
        ProgressTrackerPureComponent,
        ProgressTrackerHeaderComponent,
        ProgressTrackerDisclaimerComponent,
        ProgressTrackerGoalCardComponent,
        FilledOnlytextButtonComponent,
        FilledOnlytextButtonPipe,
      ],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true }), BrowserAnimationsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `
      <main>
        <section class="relative flex flex-col justify-start items-center w-full h-full min-h-screen min-w-screen">
          <div class="container max-w-xs sm:max-w-sm md:max-w-md min-w-320-px">
            <div class="p-2">
              <div class="my-2">
              ${story}
              </div>
            </div>
          </div>
        </section>
      </main>`;
    }),
  ],
} as Meta;

// const cards = [
// ];

const Template: Story<ProgressTrackerComponent> = (args: any) => ({
  component: ProgressTrackerComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
