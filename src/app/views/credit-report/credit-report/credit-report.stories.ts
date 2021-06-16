import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CreditReportComponent } from '@views/credit-report/credit-report/credit-report.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { mockCreditReports as mock} from './constants';

export default {
  title: 'app/views/credit-report/credit-report',
  component: CreditReportComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        SharedComponentsModule,
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<CreditReportComponent> = (args: any) => ({
  component: CreditReportComponent,
  props: {
    ...args,
    creditReports: mock
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
