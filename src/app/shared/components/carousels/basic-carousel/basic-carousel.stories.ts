import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { BasicCarouselComponent } from '@shared/components/carousels/basic-carousel/basic-carousel.component';
import { DummyComponent } from '@shared/components/carousels/basic-carousel-loader/basic-carousel-loader.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';

export default {
  title: 'app/components/carousels/basic-carousel',
  component: BasicCarouselComponent,
  decorators: [
    moduleMetadata({
      declarations: [DummyComponent],
      imports: [SharedComponentsModule, SharedDirectivesModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const pages: any = [DummyComponent, DummyComponent, DummyComponent, DummyComponent];
const Template: Story<BasicCarouselComponent> = (args: any) => ({
  props: {
    ...args,
    pages,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
