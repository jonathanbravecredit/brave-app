import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { BottomNavbarComponent } from './bottom-navbar.component';

export default {
  title: 'app/views/navbars/bottom-navbar',
  component: BottomNavbarComponent,
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

const Template: Story<BottomNavbarComponent> = (args: any) => ({
  component: BottomNavbarComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
