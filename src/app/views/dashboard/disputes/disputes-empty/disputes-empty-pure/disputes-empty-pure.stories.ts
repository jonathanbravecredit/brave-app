import { APP_BASE_HREF, CurrencyPipe } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DisputesEmptyPureComponent } from '@views/dashboard/disputes/disputes-empty/disputes-empty-pure/disputes-empty-pure.component';
import { DisputesEmptyButtonComponent } from '@views/dashboard/disputes/disputes-empty/components/disputes-empty-button/disputes-empty-button.component';
import { DisputesEmptyTitleComponent } from '@views/dashboard/disputes/disputes-empty/components/disputes-empty-title/disputes-empty-title.component';
import { DisputesEmptySubTitleComponent } from '@views/dashboard/disputes/disputes-empty/components/disputes-empty-sub-title/disputes-empty-sub-title.component';
import { DisputesEmptyImageComponent } from '@views/dashboard/disputes/disputes-empty/components/disputes-empty-image/disputes-empty-image.component';
import { DisputesEmptyErrorTextComponent } from '@views/dashboard/disputes/disputes-empty/components/disputes-empty-error-text/disputes-empty-error-text.component';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';

export default {
  title: 'app/views/disputes/empty',
  component: DisputesEmptyPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DisputesEmptyButtonComponent,
        DisputesEmptyTitleComponent,
        DisputesEmptySubTitleComponent,
        DisputesEmptyImageComponent,
        DisputesEmptyErrorTextComponent,
        FilledOnlytextButtonComponent,
        FilledOnlytextButtonPipe,
      ],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `
      <main>
        <section class="relative flex flex-col justify-start items-center w-full h-full min-h-screen min-w-screen">
          <div class="container max-w-xs sm:max-w-sm md:max-w-md min-w-320-px">
            <div class="p-2">
              <div class="my-2">
              ${story}
              </div>
            </div>
          </div>
        </section>
      </main>`;
    }),
  ],
} as Meta;

// const cards = [
// ];

const Template: Story<DisputesEmptyPureComponent> = (args: any) => ({
  component: DisputesEmptyPureComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
