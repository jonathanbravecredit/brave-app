import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, Injectable, Inject, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '@environments/environment';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

/* Configure Amplify resources */
Amplify.configure(awsconfig);

/* Add HammerJs for gesture support */
import * as Hammer from 'hammerjs';
import { HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import Rollbar from 'rollbar';

/* shared modules */
import { ChartsModule } from 'ng2-charts';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { SharedServicesModule } from '@shared/services/shared-services.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { ViewsModule } from '@views/views.module';
import { AuthenticationModule } from '@views/authentication/authentication.module';
import { OnboardingModule } from '@views/onboarding/onboarding.module';
import { braveState } from '@store/index';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { GlobalErrorHandler } from '@shared/services/monitor/global-error-handler.provider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from '@shared/interceptors/server-error.interceptor';
import { HttpInterceptorService } from '@shared/interceptors/http-interceptor.service';
// import { LayoutsModule } from '@layouts/layouts.module';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  } as any;
}

const rollbarConfig = {
  accessToken: '9e101810b0324ace8ac669db610f528f',
  captureUncaught: true,
  captureUnhandledRejections: true,
};

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(err: any): void {
    if (environment.production) {
      this.rollbar.error(err.originalError || err);
    }
  }
}

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

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
    HttpClientModule,
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
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
