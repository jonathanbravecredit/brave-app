import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardInitComponent } from '@views/dashboard-init/dashboard-init/dashboard-init.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/views/dashboard/home',
  component: DashboardInitComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<DashboardInitComponent> = (args: any) => ({
  component: DashboardInitComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
