import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutlineSsnFullFormComponent } from '@shared/components/forms/outline-ssn-full-form/outline-ssn-full-form.component';
import { OutlineInputSsnComponent } from '@shared/components/inputs/outline-input-ssn/outline-input-ssn.component';
import { NgxMaskModule } from 'ngx-mask';

export default {
  title: 'app/components/forms/outline-ssn-full-form',
  component: OutlineSsnFullFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineInputSsnComponent],
      imports: [NgxMaskModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `
      <main>
        <section class="relative flex flex-col justify-start items-center w-full h-full min-h-screen min-w-screen">
          <div class="container max-w-xs sm:max-w-sm md:max-w-md" style="min-width: 320px">
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

const Template: Story<OutlineSsnFullFormComponent> = (args: any) => ({
  component: OutlineSsnFullFormComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
