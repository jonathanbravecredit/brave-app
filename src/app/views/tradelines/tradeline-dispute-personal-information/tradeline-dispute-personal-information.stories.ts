import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelineDisputePersonalInformationView } from './tradeline-dispute-personal-information.view';

export default {
  title: 'app/views/tradelines/tradeline-dispute-process/personal-information',
  component: TradelineDisputePersonalInformationView,
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

const Template: Story<TradelineDisputePersonalInformationView> = (args: any) => ({
  component: TradelineDisputePersonalInformationView,
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {};

export const FormerName = Template.bind({});
FormerName.args = {
  valueDescription: 'Also Known As:',
  previousValue: 'John Doe'
};

export const FormerAddress = Template.bind({});
FormerAddress.args = {
  valueDescription: 'Former Address',
  previousValue: '711-2880 Nulla St. Mankato Mississippi',
  dateReported: '21/05/2021'
};

export const EmployeerInfo = Template.bind({});
EmployeerInfo.args = {
  valueDescription: 'Employer Information',
  previousValue: 'Ms Smith',
  dateUpdated: '21/05/2021'
};