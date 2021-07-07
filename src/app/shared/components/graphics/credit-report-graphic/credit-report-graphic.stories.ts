import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { CreditReportGraphicComponent } from '@shared/components/graphics/credit-report-graphic/credit-report-graphic.component';

export default {
  title: 'app/components/graphics/credit-report-graphic',
  component: CreditReportGraphicComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const base = {
  currentValue: 350,
  ptsChange: 0,
};
const safe = {
  currentValue: 750,
  ptsChange: 0,
};
const danger = {
  currentValue: 600,
  ptsChange: 0,
};
const critical = {
  currentValue: 500,
  ptsChange: 0,
};
const ptsIncrease = {
  currentValue: 650,
  ptsChange: 5,
};
const ptsDecrease = {
  currentValue: 650,
  ptsChange: -5,
};
const Template: Story<CreditReportGraphicComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `<brave-credit-report-graphic [currentValue]="750"></brave-credit-report-graphic>`,
});

export const Default = Template.bind({});
Default.args = { ...base };

export const Safe = Template.bind({});
Safe.args = {
  ...safe,
};

export const Danger = Template.bind({});
Danger.args = {
  ...danger,
};
export const Critical = Template.bind({});
Critical.args = {
  ...danger,
};

export const PtsIncrease = Template.bind({});
PtsIncrease.args = {
  currentValue: 650,
  ptsChange: 5,
};

export const PtsDecrease = Template.bind({});
PtsDecrease.args = {
  currentValue: 650,
  ptsChange: -5,
};
