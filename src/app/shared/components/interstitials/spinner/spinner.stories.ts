import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SpinnerComponent } from '@shared/components/interstitials/spinner/spinner.component';

export default {
  title: 'app/components/interstitials/spinner',
  component: SpinnerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<SpinnerComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `<div style="background-color: blue; width: 95vw; height: 95vh">
              <div class="w-full h-full fixed block top-0 left-0 bg-white/75 z-50">
                  <brave-spinner></brave-spinner>
              </div>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
