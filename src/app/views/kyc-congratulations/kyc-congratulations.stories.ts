import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinksOnlytextButtonComponent } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.component';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';
import { KycCongratulationsComponent } from '@views/kyc-congratulations/kyc-congratulations.component';

export default {
  title: 'app/views/onboarding/kyc-congratulations',
  component: KycCongratulationsComponent,
  decorators: [
    moduleMetadata({
      declarations: [LinksOnlytextButtonComponent, LinksOnlytextButtonPipe],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<KycCongratulationsComponent> = (args: any) => ({
  component: KycCongratulationsComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
