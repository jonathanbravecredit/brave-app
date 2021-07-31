import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerHostDirective } from './container-host.directive';
import { BackButtonDirective } from './back-button/back-button.directive';
import { SharedServicesModule } from '@shared/services/shared-services.module';

@NgModule({
  declarations: [ContainerHostDirective, BackButtonDirective],
  imports: [CommonModule, SharedServicesModule],
  exports: [ContainerHostDirective, BackButtonDirective],
})
export class SharedDirectivesModule {}
