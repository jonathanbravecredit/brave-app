// import { APP_BASE_HREF } from '@angular/common';
// import { Story, Meta } from '@storybook/angular/types-6-0';
// import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
// import { SharedComponentsModule } from '@shared/components/shared-components.module';
// import { ReasonCardComponent } from './reason-card.component';
// import { MOCK_TRADELINE_REASON_CARD as mock } from './constants';

// export default {
//   title: 'app/components/cards/reason',
//   component: ReasonCardComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [],
//       imports: [SharedComponentsModule],
//       providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
//     }),
//     componentWrapperDecorator(
//       (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
//     ),
//   ],
// } as Meta;

// const Template: Story<ReasonCardComponent> = (args: any) => ({
//   component: ReasonCardComponent,
//   props: {
//     ...args
//   },
// });

// export const Default = Template.bind({});
// Default.args = {
//   ...mock.DEFAULT
// };

// export const CustomUserReason = Template.bind({});
// CustomUserReason.args = {
//   ...mock.CUSTOM_USER_REASON
// };
