import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { PercentageBadgeComponent } from '@shared/components/badges/percentage-badge/percentage-badge.component';
import { DashboardAdsCarouselComponent } from '@views/dashboard/dashboard-enrolled/components/dashboard-ads-carousel/dashboard-ads-carousel.component';

export default {
  title: 'app/views/dashboard/ads-carousel',
  component: DashboardAdsCarouselComponent,
  decorators: [
    moduleMetadata({
      declarations: [PercentageBadgeComponent],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`),
  ],
} as Meta;

const Template: Story<DashboardAdsCarouselComponent> = (args: any) => ({
  component: DashboardAdsCarouselComponent,
  props: {
    ...args,
  },
});

export const AdsCarousel = Template.bind({});
AdsCarousel.args = {
  adsData: [
    {
      imageLink: '',
      pageLink: '',
      active: true,
      createdOn: '',
      modifiedOn: '',
    },
    {
      imageLink: '',
      pageLink: '',
      active: true,
      createdOn: '',
      modifiedOn: '',
    },
  ],
};
