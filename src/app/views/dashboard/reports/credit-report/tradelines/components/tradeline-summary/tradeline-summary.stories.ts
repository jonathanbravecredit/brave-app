import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelineSummaryComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-summary/tradeline-summary.component';

export default {
  title: 'app/components/tradelines/tradeline-summary',
  component: TradelineSummaryComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<TradelineSummaryComponent> = (args: any) => ({
  component: TradelineSummaryComponent,
  props: {
    ...args,
  },
  template: `
    <div class="container mx-auto max-w-xs h-full">
      <brave-tradeline-summary
        [status]="'Open'"
      ></brave-tradeline-summary>
    </div>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
