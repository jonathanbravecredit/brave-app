import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NegativeAccountInitialPureComponent } from '@views/dashboard/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';

export default {
  title: 'app/views/negative-account/initial',
  component: NegativeAccountInitialPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<NegativeAccountInitialPureComponent> = (args: any) => ({
  component: NegativeAccountInitialPureComponent,
  props: {
    ...args,
    // cards,
  },
});

export const Default = Template.bind({});
Default.args = {};
