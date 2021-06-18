import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NegativeAccountInitialPureComponent } from '@views/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';

export default {
  title: 'app/views/negative-account/initial',
  component: NegativeAccountInitialPureComponent,
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

const Template: Story<NegativeAccountInitialPureComponent> = (args: any) => ({
  component: NegativeAccountInitialPureComponent,
  props: {
    ...args,
    creditorName: 'Hj National Collections',
    lastReported: '29/09/2020',
    accountTypeDescription: 'Collections Account',
    accountTypeDescriptionValue: 'Open',
    originalCreditor: 'Original Creditor',
    originalCreditorValue: 'Wells Fargo Bank, N.A.',
    disputeFlag: 'Previously Disputed?',
    disputeFlagValue: 'No',
    accountNumber: '066611222',
    typeOfCollection: 'Collections',
    amountPastDue: '700',
    dateOpened: '04/12/2018',
    dateLastPayment: '04/21/2018',
  },
});

export const Default = Template.bind({});
Default.args = {};
