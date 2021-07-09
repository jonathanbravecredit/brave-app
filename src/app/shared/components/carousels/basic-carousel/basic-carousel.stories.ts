import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { BasicCarouselComponent } from '@shared/components/carousels/basic-carousel/basic-carousel.component';

export default {
  title: 'app/components/carousels/basic-carousel',
  component: BasicCarouselComponent,
  decorators: [
    moduleMetadata({
      declarations: [BasicCarouselComponent],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const pages: any = [0, 0, 0, 0];
const Template: Story<BasicCarouselComponent> = (args: any) => ({
  props: {
    ...args,
    pages,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
