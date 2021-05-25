import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HiddenCodeFormComponent } from '@shared/components/forms/hidden-code-form/hidden-code-form.component';
import { HiddenAsteriskInputDirective } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.directive';
import { HiddenAsteriskInputComponent } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.component';

export default {
  title: 'app/components/forms/hidden-code-form',
  component: HiddenCodeFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        HiddenAsteriskInputComponent,
        HiddenAsteriskInputDirective,
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const slots: number[] = [1, 2, 3, 4];
const Template: Story<HiddenCodeFormComponent> = (args: any) => ({
  props: {
    ...args,
    slots,
  },
  template: `<brave-hidden-code-form [slots]="slots"></brave-hidden-code-form>`,
});

export const Default = Template.bind({});
Default.args = {
  slots,
};
Default.parameters;
