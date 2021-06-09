import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NegativeAccountInitialComponent } from './negative-account-initial.component';

export default {
  title: 'app/views/negative-account/initial',
  component: NegativeAccountInitialComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        SharedComponentsModule,
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<NegativeAccountInitialComponent> = (args: any) => ({
  component: NegativeAccountInitialComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
