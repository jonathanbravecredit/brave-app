// import { APP_BASE_HREF } from '@angular/common';
// import { Story, Meta } from '@storybook/angular/types-6-0';
// import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
// import { SharedComponentsModule } from '@shared/components/shared-components.module';
// import { DisputeFindingsPureView } from './dispute-findings-pure.view';
// import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
// import {
//   MOCK_FINDINGS_PERSONAL_INFO as mockPersonalInfo,
//   MOCK_FINDINGS_PUBLIC_RECORDS as mockPublicRecords,
// } from './constants';

// export default {
//   title: 'app/views/dashboard/disputes/findings',
//   component: DisputeFindingsPureView,
//   decorators: [
//     moduleMetadata({
//       declarations: [],
//       imports: [SharedComponentsModule],
//       providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
//     }),
//     componentWrapperDecorator((story) => {
//       return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
//     }),
//   ],
// } as Meta;

// const Template: Story<DisputeFindingsPureView> = (args: any) => ({
//   component: DisputeFindingsPureView,
//   props: {
//     ...args,
//   },
// });

// const tradelineMock: ITradelineDetailsConfig = {
//   originalCreditor: 'ABC Financing',
//   creditType: 'Collection',
//   creditLimit: '300',
//   accountNumber: '0661387642',
//   dateOpened: '2018-01-01',
//   disputeFlag: 'No',
// } as ITradelineDetailsConfig;

// export const Default = Template.bind({});
// Default.args = {
//   resultCode: 'deleted',
//   tradelineAccountConfig: tradelineMock,
// };

// export const DisputeInfoUpdated = Template.bind({});
// DisputeInfoUpdated.args = {
//   resultCode: 'dispute_info_updated',
//   tradelineAccountConfig: tradelineMock,
//   updatedValues: ['Balance'],
// };

// export const InfoUpdated = Template.bind({});
// InfoUpdated.args = {
//   resultCode: 'info_updated',
//   tradelineAccountConfig: tradelineMock,
// };

// export const DisputeInfoAndOtherUpdated = Template.bind({});
// DisputeInfoAndOtherUpdated.args = {
//   resultCode: 'dispute_info_other_updated',
//   reportCreatedAt: '20/05/2021',
//   fileIdentificationNumber: '0516',
//   tradelineAccountConfig: tradelineMock,
// };

// export const Reinserted = Template.bind({});
// Reinserted.args = {
//   resultCode: 'reinserted',
//   tradelineAccountConfig: tradelineMock,
// };

// export const VerifiedUpdated = Template.bind({});
// VerifiedUpdated.args = {
//   resultCode: 'verified_updated',
//   tradelineAccountConfig: tradelineMock,
// };

// export const VerifiedAccurate = Template.bind({});
// VerifiedAccurate.args = {
//   resultCode: 'verified_accurate',
//   tradelineAccountConfig: tradelineMock,
// };

// export const VerifiedAccurateAndUpdated = Template.bind({});
// VerifiedAccurateAndUpdated.args = {
//   resultCode: 'verified_accurate_updated',
//   tradelineAccountConfig: tradelineMock,
// };

// export const PersonalInformationFindings = Template.bind({});
// PersonalInformationFindings.args = {
//   type: 'personal-info',
//   personalInfoConfig: mockPersonalInfo,
//   resultCode: 'verified_accurate_updated',
//   tradelineAccountConfig: tradelineMock,
// };

// export const PublicRecordsFindings = Template.bind({});
// PublicRecordsFindings.args = {
//   type: 'public-record',
//   publicRecordConfig: mockPublicRecords,
//   resultCode: 'verified_accurate_updated',
//   tradelineAccountConfig: tradelineMock,
// };
