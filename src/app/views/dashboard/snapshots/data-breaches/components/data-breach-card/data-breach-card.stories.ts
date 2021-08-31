import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DataBreachCardComponent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/data-breach-card.component';
import { DataBreaches, DateBreachCard } from '@shared/utils/constants';

export default {
  title: 'app/views/snapshots/databreach/breach-card',
  component: DataBreachCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
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

const mock = DateBreachCard[DataBreaches.Condition5];

const Template: Story<DataBreachCardComponent> = (args: any) => ({
  component: DataBreachCardComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  subscriber: mock.subscriber,
  paragraphs: mock.paragraphs,
  reason: mock.reason,
};
Default.parameters;
