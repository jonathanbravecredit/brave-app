import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerHostDirective } from './container-host.directive';
import { BackButtonDirective } from './back-button/back-button.directive';
import { SharedServicesModule } from '@shared/services/shared-services.module';
import { SpinnerButtonDirective } from './spinner-button/spinner-button.directive';
import { AnalyticsDirective } from './analytics/analytics.directive';
import { RenderedDirective } from './rendered/rendered.directive';

const directives = [
  ContainerHostDirective,
  BackButtonDirective,
  SpinnerButtonDirective,
  AnalyticsDirective,
  RenderedDirective,
];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule, SharedServicesModule],
  exports: [...directives],
})
export class SharedDirectivesModule {}
