import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { ForbearancePureView } from '@views/dashboard/snapshots/forbearance/forbearance-pure/forbearance-pure.view';
import {
  INSTALLMENT_PARTITIONS,
  MORTGAGE_PARTITIONS,
} from '@views/dashboard/snapshots/forbearance/forbearance-pure/mock';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

export default {
  title: 'app/views/snapshots/forbearance/view',
  component: ForbearancePureView,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, SharedPipesModule],
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

const installments = INSTALLMENT_PARTITIONS;
const mortgages = MORTGAGE_PARTITIONS;
const accounts = [...installments, ...mortgages] as ITradeLinePartition[];
const Template: Story<ForbearancePureView> = (args: any) => ({
  component: ForbearancePureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  tradelines: accounts,
};
Default.parameters;
