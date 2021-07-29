import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '@environments/environment';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDataState } from '@store/app-data/app-data.state';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

/* social sign in configuration */
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
);

// for two redirects (local host and production)
const [localRedirectSignIn, productionRedirectSignIn] = awsconfig.oauth.redirectSignIn.split(',');
const [localRedirectSignOut, productionRedirectSignOut] = awsconfig.oauth.redirectSignOut.split(',');

const updatedAwsConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  },
};
/* Configure Amplify resources */
Amplify.configure(updatedAwsConfig);

/* Add HammerJs for gesture support */
import * as Hammer from 'hammerjs';
import { HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

/* shared modules */
import { ChartsModule } from 'ng2-charts';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { SharedServicesModule } from '@shared/services/shared-services.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { ViewsModule } from '@views/views.module';
import { AuthenticationModule } from './layouts/authentication/authentication.module';
import { OnboardingModule } from './layouts/onboarding/onboarding.module';
import { braveState } from '@store/index';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalErrorHandler } from '@shared/services/monitor/global-error-handler.provider';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from '@shared/interceptors/server-error.interceptor';
// import { LayoutsModule } from '@layouts/layouts.module';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  } as any;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(braveState, {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxMaskModule.forRoot(),
    HammerModule,
    AmplifyUIAngularModule,
    NgxChartsModule,
    ChartsModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedServicesModule,
    SharedPipesModule,
    AuthenticationModule,
    OnboardingModule,
    ViewsModule,
    AppRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
