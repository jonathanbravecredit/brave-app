import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { BasicCarouselComponent } from '@shared/components/carousels/basic-carousel/basic-carousel.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { FilledOnlytextBadgeComponent } from '@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.component';

export default {
  title: 'app/components/carousels/basic-carousel',
  component: BasicCarouselComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, SharedDirectivesModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;
const pages: any = [
  FilledOnlytextBadgeComponent,
  FilledOnlytextBadgeComponent,
  FilledOnlytextBadgeComponent,
  FilledOnlytextBadgeComponent,
];
const data: any = [{ test: 'Comp 1' }, { test: 'Comp 2' }, { test: 'Comp 33' }, { test: 'Comp 4' }];
const Template: Story<BasicCarouselComponent> = (args: any) => ({
  props: {
    ...args,
    pages,
    data,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
