import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { BaseExceptionComponent } from '@shared/components/exceptions/base-exception/base-exception.component';

export default {
  title: 'app/components/exceptions/base-exception',
  component: BaseExceptionComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`),
  ],
} as Meta;

const Template: Story<BaseExceptionComponent> = (args: any) => ({
  component: BaseExceptionComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  code: '331',
};

export const OpenExists = Template.bind({});
OpenExists.args = {
  code: '321',
};

export const TryLaterTU = Template.bind({});
TryLaterTU.args = {
  code: '197',
};

export const TryLaterS = Template.bind({});
TryLaterS.args = {
  code: '330',
};

export const FileMaintenance = Template.bind({});
FileMaintenance.args = {
  code: '219',
};

export const Ineligible = Template.bind({});
Ineligible.args = {
  code: '323',
};
