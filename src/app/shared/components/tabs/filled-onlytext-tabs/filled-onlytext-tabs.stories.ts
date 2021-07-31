import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FilledOnlytextTabsComponent } from '@shared/components/tabs/filled-onlytext-tabs/filled-onlytext-tabs.component';

export default {
  title: 'app/components/tabs/filled-onlytext-tabs',
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<any> = (args: any) => ({
  component: FilledOnlytextTabsComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
