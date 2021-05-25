import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { NotificationDropdownComponent } from '@shared/components/dropdowns/popdowns/notification-dropdown/notification-dropdown.component';

export default {
  title: 'app/components/dropdowns/popdowns/notification',
  component: NotificationDropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<NotificationDropdownComponent> = (args: any) => ({
  component: NotificationDropdownComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
