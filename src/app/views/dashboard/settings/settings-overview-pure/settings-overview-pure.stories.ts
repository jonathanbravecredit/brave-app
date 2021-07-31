import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SettingsOverviewPureView } from './settings-overview-pure.view';

export default {
  title: 'app/views/dashboard/settings',
  component: SettingsOverviewPureView,
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

const Template: Story<SettingsOverviewPureView> = (args: any) => ({
  component: SettingsOverviewPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
