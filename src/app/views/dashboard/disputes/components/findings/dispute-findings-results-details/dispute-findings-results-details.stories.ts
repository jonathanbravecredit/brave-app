import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputeFindingsResultsDetailsComponent } from '@views/dashboard/disputes/components/findings/dispute-findings-results-details/dispute-findings-results-details.component';

export default {
  title: 'app/views/dashboard/disputes/findings/components/dispute-findings-results-details',
  component: DisputeFindingsResultsDetailsComponent,
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

const Template: Story<DisputeFindingsResultsDetailsComponent> = (args: any) => ({
  component: DisputeFindingsResultsDetailsComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Coded = Template.bind({});
Coded.args = {
  resultCode: 'deleted',
  updatedValues: [],
};
