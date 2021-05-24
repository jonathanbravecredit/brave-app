import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HiddenAsteriskInputComponent } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.component';
import { HiddenAsteriskInputDirective } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.directive';

export default {
  title: 'app/components/inputs/hidden-asterisk-input',
  component: HiddenAsteriskInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [HiddenAsteriskInputDirective],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<HiddenAsteriskInputComponent> = (args: any) => ({
  component: HiddenAsteriskInputComponent,
  props: {
    ...args,
  },
});

export const Small = Template.bind({});
Small.args = {
  size: 'text-sm',
};

export const Default = Template.bind({});
Default.args = {
  size: 'text-base',
};
Default.parameters;

export const Large = Template.bind({});
Large.args = {
  size: 'text-lg',
};
