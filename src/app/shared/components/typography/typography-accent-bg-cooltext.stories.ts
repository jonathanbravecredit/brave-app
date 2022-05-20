import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'app/components/typography/typography-accent-bg-cooltext',
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<any> = (args: any) => ({
  props: {
    ...args,
  },
  template: `
  <div class="bg-fuchsia-500 p-4">
    <h1 class='font-headings font-extrabold text-5xl text-sky-100'>H1 Heading</h1>
    <h2 class='font-headings font-extrabold text-4xl text-sky-100'>H2 Heading</h2>
    <h3 class='font-headings font-extrabold text-3xl text-sky-100'>H3 Heading</h3>
    <h4 class='font-headings font-extrabold text-2xl text-sky-100'>H4 Heading</h4>
    <h5 class='font-headings font-extrabold text-xl text-sky-100'>H5 Heading</h5>
    <h6 class='font-headings font-extrabold text-lg text-sky-100'>H6 Heading</h6>
    <div style="margin: 10px 0px"></div>
    <p class='font-sans text-base text-sky-100'>Body 1</p>
    <p class='font-sans font-semibold text-base text-sky-100'>Body 1-semibold</p>
    <p class='font-sans text-sm text-sky-100'>Body 2</p>
    <p class='font-sans font-semibold text-sm text-sky-100'>Body 2-semibold</p>
  </div>
    `,
});

export const Default = Template.bind({});
