import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { BasePaginationComponent } from './base-pagination.component';
import { BasePaginationPipe } from './base-pagination.pipe';

export default {
  title: 'app/components/paginations/base-pagination',
  component: BasePaginationComponent,
  decorators: [
    moduleMetadata({
      declarations: [BasePaginationPipe],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<BasePaginationComponent> = (args: any) => ({
  component: BasePaginationComponent,
  props: {
    ...args
  },
});

export const Default = Template.bind({});
export const PointStyle = Template.bind({});
export const Primary = Template.bind({});

Default.args = {};
Primary.args = { color: 'primary' };
PointStyle.args = { paginationStyle: 'point' };

