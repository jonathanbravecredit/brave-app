import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { OnboardingDisputeComponent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledChecktextProgressbarComponent } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';

export default {
  title: 'app/components/modals/onboarding-dispute',
  component: OnboardingDisputeComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FilledOnlytextButtonComponent,
        FilledChecktextProgressbarComponent,
        LinksOnlytextButtonPipe
      ],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OnboardingDisputeComponent> = (args: any) => ({
  props: {
    ...args
  },
  template: `<brave-onboarding-dispute></brave-onboarding-dispute>`,
});

export const Default = Template.bind({});
Default.args = {};
