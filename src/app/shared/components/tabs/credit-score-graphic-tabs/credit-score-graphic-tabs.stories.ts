import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CreditScoreGraphicTabsComponent } from '@shared/components/tabs/credit-score-graphic-tabs/credit-score-graphic-tabs.component';

export default {
  title: 'app/components/tabs/credit-score-graphic-tabs',
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<any> = (args: any) => ({
  component: CreditScoreGraphicTabsComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
