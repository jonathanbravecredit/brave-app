
import { APP_BASE_HREF, CurrencyPipe } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CreditMixPureView } from "./credit-mix-pure.view";
import { CreditMixHeaderComponent } from "../components/credit-mix-header/credit-mix-header.component";
import { CreditMixRatingComponent } from "../components/credit-mix-rating/credit-mix-rating.component";
import { CreditMixBadgesComponent } from "../components/credit-mix-badges/credit-mix-badges.component";
import { PercentageBadgeComponent } from "@shared/components/badges/percentage-badge/percentage-badge.component";


export default {
  title: "app/views/snapshots/credit-mix",
  component: CreditMixPureView,
  decorators: [
    moduleMetadata({
      declarations: [
        CreditMixHeaderComponent,
        CreditMixRatingComponent,
        CreditMixBadgesComponent,
        PercentageBadgeComponent
      ],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
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

// const cards = [
// ];

const Template: Story<CreditMixPureView> = (args: any) => ({
  component: CreditMixPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
