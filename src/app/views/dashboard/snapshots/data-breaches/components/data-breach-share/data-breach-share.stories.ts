import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DataBreachCardComponent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/data-breach-card.component';
import { DataBreaches, DateBreachCard } from '@shared/utils/constants';
import { DataBreachShareComponent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-share/data-breach-share.component';
import { DashboardModule } from '@views/dashboard/dashboard.module';

export default {
  title: 'app/views/snapshots/databreach/breach-share',
  component: DataBreachShareComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [DashboardModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `
      <main>
        <section class="relative flex flex-col justify-start items-center w-full h-full min-h-screen min-w-screen">
          <div class="container max-w-xs sm:max-w-sm md:max-w-md" style="min-width: 320px">
            <div class="p-2">
              <div class="my-2">
              ${story}
              </div>
            </div>
          </div>
        </section>
      </main>`;
    }),
  ],
} as Meta;

const Template: Story<DataBreachShareComponent> = (args: any) => ({
  component: DataBreachShareComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
