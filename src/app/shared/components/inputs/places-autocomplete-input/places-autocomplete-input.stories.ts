import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlacesAutocompleteInputComponent } from '@shared/components/inputs/places-autocomplete-input/places-autocomplete-input.component';

// DO NOT REMOVE BELOW REFERENCE!!!!
/// <reference types="google.maps" />
declare var google: any;
// DO NOT REMOVE ABOVE REFERENCE!!!!

export default {
  title: 'app/components/inputs/places-autocomplete-input',
  component: PlacesAutocompleteInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<PlacesAutocompleteInputComponent> = (args: any) => ({
  component: PlacesAutocompleteInputComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
