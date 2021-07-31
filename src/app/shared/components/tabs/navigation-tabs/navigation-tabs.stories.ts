import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { NavigationTabsComponent } from '@shared/components/tabs/navigation-tabs/navigation-tabs.component';

export default {
  title: 'app/components/tabs/navigation-tabs',
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<any> = (args: any) => ({
  component: NavigationTabsComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
