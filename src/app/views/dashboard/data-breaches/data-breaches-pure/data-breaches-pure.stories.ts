import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { DataBreaches, DateBreachCard } from '@shared/utils/constants';
import { DataBreachesPureComponent } from '@views/dashboard/data-breaches/data-breaches-pure/data-breaches-pure.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DataBreachCardComponent } from '@views/dashboard/data-breaches/components/data-breach-card/data-breach-card.component';
import { DataBreachHeaderComponent } from '@views/dashboard/data-breaches/components/data-breach-header/data-breach-header.component';
import { DataBreachListComponent } from '@views/dashboard/data-breaches/components/data-breach-list/data-breach-list.component';
import { DataBreachNoneComponent } from '@views/dashboard/data-breaches/components/data-breach-none/data-breach-none.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/views/snapshots/databreach',
  component: DataBreachesPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DataBreachCardComponent,
        DataBreachHeaderComponent,
        DataBreachListComponent,
        DataBreachNoneComponent,
      ],
      imports: [HttpClientModule, SharedComponentsModule, RouterModule.forRoot([], { useHash: true })],
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
  },
});

export const Default = Template.bind({});
Default.args = {
  breachCards: cards,
};
Default.parameters;

export const NoCards = Template.bind({});
NoCards.args = {
  breachCards: [],
};
NoCards.parameters;
