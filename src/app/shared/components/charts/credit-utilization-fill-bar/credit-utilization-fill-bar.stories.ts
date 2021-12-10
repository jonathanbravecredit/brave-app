import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { ChartsModule } from "ng2-charts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CreditUtilizationFillBarComponent } from "./credit-utilization-fill-bar.component";

export default {
  title: "app/components/charts/utlization-fill-bar",
  component: CreditUtilizationFillBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ChartsModule, NgxChartsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<CreditUtilizationFillBarComponent> = (args: any) => ({
  component: CreditUtilizationFillBarComponent,
  props: {
    ...args,
  },
});

export const Loan = Template.bind({});
Loan.args = {
  creditType: 'I',
  maxCreditAmount: 0,
  currentBalance: 0,
  highestBalance: 100,
  openClosed: 'c',
  creditLimit: 0
};

export const CreditCard = Template.bind({});
CreditCard.args = {
  creditType: 'r',
  maxCreditAmount: 0,
  currentBalance: 1200,
  highestBalance: 0,
  openClosed: 'c',
  creditLimit: 1000
};

