import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SignupThankyouComponent } from '@views/signup-thankyou/signup-thankyou.component';

export default {
  title: 'app/views/onboarding/signup-thankyou',
  component: SignupThankyouComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<SignupThankyouComponent> = (args: any) => ({
  component: SignupThankyouComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
