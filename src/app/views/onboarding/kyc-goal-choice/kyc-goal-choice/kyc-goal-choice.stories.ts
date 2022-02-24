import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KycGoalChoiceComponent } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';
import { KycGoalChoicePureComponent } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice-pure/kyc-goal-choice-pure.component';
import { KycGoalChoiceCardComponent } from '@views/onboarding/kyc-goal-choice/components/kyc-goal-choice-card/kyc-goal-choice-card.component';
import { KycGoalChoiceHeaderComponent } from '@views/onboarding/kyc-goal-choice/components/kyc-goal-choice-header/kyc-goal-choice-header.component';

export default {
  title: 'app/views/onboarding/kyc-goal-choice',
  component: KycGoalChoiceComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        KycGoalChoicePureComponent,
        KycGoalChoiceCardComponent,
        KycGoalChoiceHeaderComponent
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

const Template: Story<KycGoalChoiceComponent> = (args: any) => ({
  component: KycGoalChoiceComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
