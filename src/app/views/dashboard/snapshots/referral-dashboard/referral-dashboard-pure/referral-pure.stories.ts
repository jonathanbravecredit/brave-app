import { APP_BASE_HREF, CommonModule, CurrencyPipe } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReferralDashboardPureView } from "./referral-pure.view";
import { ReferralBannerComponent } from "../components/referral-banner/referral-banner.component";
import { ReferralHeaderComponent } from "../components/referral-header/referral-header.component";
import { ReferralEarningsComponent } from "../components/referral-earnings/referral-earnings.component";

export default {
  title: "app/views/snapshots/credit-mix",
  component: ReferralDashboardPureView,
  decorators: [
    moduleMetadata({
      declarations: [
        ReferralBannerComponent,
        ReferralHeaderComponent,
        ReferralEarningsComponent,
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
        CommonModule,
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator((story) => {
      return `
      <main>
        <section class="relative flex flex-col justify-start items-center w-full h-full min-h-screen min-w-screen">
          <div class="container max-w-xs sm:max-w-sm md:max-w-md min-w-320-px">
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

const Template: Story<ReferralDashboardPureView> = (args: any) => ({
  component: ReferralDashboardPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
