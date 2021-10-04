import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { OutlineSelectInputComponent } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { OutlineSelectInputPipe } from '@shared/components/inputs/outline-select-input/outline-select-input.pipe';
import { AutocompleteAddressFormComponent } from '@shared/components/forms/autocomplete-address-form/autocomplete-address-form.component';
import { PlacesAutocompleteInputComponent } from '@shared/components/inputs/places-autocomplete-input/places-autocomplete-input.component';

export default {
  title: 'app/components/forms/autocomplete-address-form',
  component: AutocompleteAddressFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        PlacesAutocompleteInputComponent,
        OutlineInputComponent,
        FilledOnlytextButtonComponent,
        OutlineInputPipe,
        FilledOnlytextButtonPipe,
        OutlineSelectInputComponent,
        OutlineSelectInputPipe,
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<AutocompleteAddressFormComponent> = (args: any) => ({
  component: AutocompleteAddressFormComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
