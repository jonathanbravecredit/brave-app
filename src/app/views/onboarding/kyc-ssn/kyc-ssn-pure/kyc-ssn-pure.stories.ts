import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { SharedComponentsModule } from "@shared/components/shared-components.module";
import { KycSsnPureComponent } from "@views/onboarding/kyc-ssn/kyc-ssn-pure/kyc-ssn-pure.component";
import { NgxMaskModule } from "ngx-mask";

export default {
  title: "app/views/onboarding/kyc-ssn",
  component: KycSsnPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, NgxMaskModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<KycSsnPureComponent> = (args: any) => ({
  component: KycSsnPureComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const WithError = Template.bind({});
WithError.args = { ssnError: true };
