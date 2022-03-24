// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { ForbearanceComponent } from '@views/dashboard/forbearance/forbearance.component';
import { ForbearanceRoutingModule } from '@views/dashboard/forbearance/forbearance.routing';
import { ForbearanceView } from '@views/dashboard/forbearance/forbearance/forbearance.view';
import { ForbearancePureView } from '@views/dashboard/forbearance/forbearance-pure/forbearance-pure.view';
import { ForbearanceInfoComponent } from '@views/dashboard/forbearance/components/forbearance-info/forbearance-info.component';
import { ForbearanceHeaderComponent } from '@views/dashboard/forbearance/components/forbearance-header/forbearance-header.component';
import { ForbearanceTipsComponent } from '@views/dashboard/forbearance/components/forbearance-tips/forbearance-tips.component';
import { ForbearanceBandComponent } from '@views/dashboard/forbearance/components/forbearance-band/forbearance-band.component';
import { ForbearanceAccountsComponent } from '@views/dashboard/forbearance/components/forbearance-accounts/forbearance-accounts.component';
import { BaseExceptionView } from '@views/dashboard/exceptions/base-exception/base-exception/base-exception.view';
import { BaseExceptionPureView } from '@views/dashboard/exceptions/base-exception/base-exception-pure/base-exception-pure.view';

const modules = [CommonModule, SharedComponentsModule, SharedPipesModule, ForbearanceRoutingModule];
const components = [
  ForbearanceComponent,
  ForbearanceView,
  ForbearancePureView,
  ForbearanceInfoComponent,
  ForbearanceHeaderComponent,
  ForbearanceTipsComponent,
  ForbearanceBandComponent,
  ForbearanceAccountsComponent,
  BaseExceptionView,
  BaseExceptionPureView,
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class ForbearanceModule {}
