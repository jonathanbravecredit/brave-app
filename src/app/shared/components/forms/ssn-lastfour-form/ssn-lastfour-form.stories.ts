import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SsnLastfourFormComponent } from '@shared/components/forms/ssn-lastfour-form/ssn-lastfour-form.component';
import { HiddenAsteriskInputComponent } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.component';
import { HiddenAsteriskInputDirective } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.directive';

export default {
  title: 'app/components/forms/ssn-lastfour-form',
  component: SsnLastfourFormComponent,
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
const Template: Story<SsnLastfourFormComponent> = (args: any) => ({
  props: {
    ...args,
    slots,
  },
  template: `<brave-ssn-lastfour-form [slots]="slots"></brave-ssn-lastfour-form>`,
});

export const Default = Template.bind({});
Default.args = {
  slots,
};
Default.parameters;
