import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinesDisputePersonalInformationPureComponent } from '@views/tradelines-dispute-personal/tradelines-dispute-personal-information-pure/tradelines-dispute-personal-information-pure.component';

export default {
  title: 'app/views/tradelines/tradeline-dispute-process/personal-information',
  component: TradelinesDisputePersonalInformationPureComponent,
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

const Template: Story<TradelinesDisputePersonalInformationPureComponent> = (args: any) => ({
  component: TradelinesDisputePersonalInformationPureComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const FormerName = Template.bind({});
FormerName.args = {
  valueDescription: 'Also Known As:',
  previousValue: 'John Doe',
};

export const FormerAddress = Template.bind({});
FormerAddress.args = {
  valueDescription: 'Former Address',
  previousValue: '711-2880 Nulla St. Mankato Mississippi',
  dateReported: '21/05/2021',
};

export const EmployeerInfo = Template.bind({});
EmployeerInfo.args = {
  valueDescription: 'Employer Information',
  previousValue: 'Ms Smith',
  dateUpdated: '21/05/2021',
};
