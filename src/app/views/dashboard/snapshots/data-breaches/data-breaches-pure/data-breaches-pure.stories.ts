import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DataBreaches, DateBreachCard } from '@shared/utils/constants';
import { DataBreachesPureComponent } from '@views/dashboard/snapshots/data-breaches/data-breaches-pure/data-breaches-pure.component';

export default {
  title: 'app/views/snapshots/databreach',
  component: DataBreachesPureComponent,
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

const cards = [
  DateBreachCard[DataBreaches.Condition1],
  DateBreachCard[DataBreaches.Condition2],
  DateBreachCard[DataBreaches.Condition3],
  DateBreachCard[DataBreaches.Condition4],
  DateBreachCard[DataBreaches.Condition5],
  DateBreachCard[DataBreaches.Condition6],
];
const Template: Story<DataBreachesPureComponent> = (args: any) => ({
  component: DataBreachesPureComponent,
  props: {
    ...args,
    breachCards: cards,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
