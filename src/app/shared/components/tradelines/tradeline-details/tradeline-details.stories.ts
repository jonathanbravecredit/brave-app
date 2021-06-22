import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelineDetailsComponent } from '@shared/components/tradelines/tradeline-details/tradeline-details.component';

export default {
  title: 'app/components/tradelines/tradeline-details',
  component: TradelineDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<TradelineDetailsComponent> = (args: any) => ({
  component: TradelineDetailsComponent,
  props: {
    ...args,
  },
  template: `
    <div class="container mx-auto max-w-xs h-full">
      <brave-tradeline-details
      ></brave-tradeline-details>
    </div>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
