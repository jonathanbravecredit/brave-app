import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { OutlinePrevnextPaginationComponent } from '@shared/components/paginations/outline-prevnext-pagination/outline-prevnext-pagination.component';

export default {
  title: 'app/components/paginations/outline-prevnext-pagination',
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<any> = (args: any) => ({
  component: OutlinePrevnextPaginationComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
