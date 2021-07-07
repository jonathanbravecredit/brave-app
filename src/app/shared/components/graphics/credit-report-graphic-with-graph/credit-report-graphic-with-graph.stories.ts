import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { CreditReportGraphicWithGraphComponent } from '@shared/components/graphics/credit-report-graphic-with-graph/credit-report-graphic-with-graph.component';

export default {
  title: 'app/components/graphics/credit-report-graphic-with-graph',
  component: CreditReportGraphicWithGraphComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<CreditReportGraphicWithGraphComponent> = (args: any) => ({
  component: CreditReportGraphicWithGraphComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const NegativePtsChange = Template.bind({});
NegativePtsChange.args = {
  ptsChange: -5,
};
