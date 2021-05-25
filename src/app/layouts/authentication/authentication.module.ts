import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { ViewsModule } from '@views/views.module';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication.routing';

const components = [AuthenticationComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ViewsModule,
    AuthenticationRoutingModule,
  ],
  exports: [...components],
})
export class AuthenticationModule {}
