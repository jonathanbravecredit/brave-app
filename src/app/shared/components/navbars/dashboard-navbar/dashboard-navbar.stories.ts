import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OutlineOnlytextButtonComponent } from '@shared/components/buttons/outline-onlytext-button/outline-onlytext-button.component';
import { OutlineOnlytextButtonPipe } from '@shared/components/buttons/outline-onlytext-button/outline-onlytext-button.pipe';
import { MenuDropdownComponent } from '@shared/components/dropdowns/popdowns/menu-dropdown/menu-dropdown.component';
import { DashboardNavbarComponent } from '@shared/components/navbars/dashboard-navbar/dashboard-navbar.component';

export default {
  title: 'app/components/navbars/dashboard-navbar',
  component: DashboardNavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        MenuDropdownComponent,
        OutlineOnlytextButtonComponent,
        OutlineOnlytextButtonPipe,
      ],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<DashboardNavbarComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `<brave-dashboard-navbar><brave-dashboard-navbar>`,
});

export const Default = Template.bind({});
Default.args = {};

export const BackButton = Template.bind({});
BackButton.args = {
  isBackButton: true
};

