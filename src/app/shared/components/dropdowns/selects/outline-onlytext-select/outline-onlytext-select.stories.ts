import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import {
  OutlineOnlytextSelectComponent,
  IOutlineOnlyTextItem,
} from '@shared/components/dropdowns/selects/outline-onlytext-select/outline-onlytext-select.component';

export default {
  title: 'app/components/dropdowns/selects/outline-onlytext-select',
  component: OutlineOnlytextSelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const items: IOutlineOnlyTextItem[] = [
  { value: 'Item 1' },
  { value: 'Item 2' },
  { value: 'Item 3' },
  { value: 'Item 4' },
  { value: 'Item 5' },
];

const Template: Story<OutlineOnlytextSelectComponent> = (args: any) => ({
  props: {
    ...args,
    items,
  },
  template: `
  <brave-outline-onlytext-select [items]="items"></brave-outline-onlytext-select>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
