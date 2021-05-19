import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '@environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDataState } from '@store/app-data/app-data.state';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

/* Configure Amplify resources */
Amplify.configure(awsconfig);

/* shared modules */
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { SharedServicesModule } from '@shared/services/shared-services.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { LayoutsModule } from '@layouts/layouts.module';
import { ViewsModule } from '@views/views.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AppDataState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    AmplifyUIAngularModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedServicesModule,
    SharedPipesModule,
    LayoutsModule,
    ViewsModule,
    AppRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
