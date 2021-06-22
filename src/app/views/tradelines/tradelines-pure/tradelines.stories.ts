import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinesPureComponent } from '@views/tradelines/tradelines-pure/tradelines-pure.component';

export default {
  title: 'app/views/tradelines/tradelines',
  component: TradelinesPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<TradelinesPureComponent> = (args: any) => ({
  component: TradelinesPureComponent,
  props: {
    ...args,
  },
  template: `
    <div class="container mx-auto max-w-xs h-full">
      <brave-tradelines-pure></brave-tradelines-pure>
    </div>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
