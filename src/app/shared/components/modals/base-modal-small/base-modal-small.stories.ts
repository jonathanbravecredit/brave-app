import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonComponent } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.component';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';
import {
  BaseModalSmallComponent,
  IBaseModalSmallConfig,
} from '@shared/components/modals/base-modal-small/base-modal-small.component';

export default {
  title: 'app/components/modals/base-modal-small',
  component: BaseModalSmallComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FilledOnlytextButtonComponent,
        LinksOnlytextButtonComponent,
        FilledOnlytextButtonPipe,
        LinksOnlytextButtonPipe,
      ],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const config: IBaseModalSmallConfig = {
  title: 'Message Title',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices est in dolor feugiat, et consequat urna imperdiet. Nam a purus elit. In eu dui fermentum, tincidunt nisi a, pulvinar nulla. Morbi justo lectus, pellentesque ut dignissim at, varius at erat. Nullam porta libero justo, non facilisis urna elementum quis. Sed cursus lacinia faucibus. Nulla at elit erat. Ut at pharetra est. In dictum fringilla odio sed fringilla.',
  actionButtonOneText: 'Cancel',
  actionButtonTwoText: 'Continue',
};

const Template: Story<BaseModalSmallComponent> = (args: any) => ({
  props: {
    ...args,
    config,
  },
  template: `
  <brave-filled-onlytext-button (click)="toggleModal()">
    Open
  </brave-filled-onlytext-button>
  <brave-base-modal-small [config]="config">
  </brave-base-modal-small>`,
});

export const Default = Template.bind({});
Default.args = { config };
Default.parameters;
