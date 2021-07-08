import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { ViewsModule } from '@views/views.module';
import { DisputeTradelineRoutingModule } from './dispute-tradeline.routing';
import { DisputeTradelineComponent } from './dispute-tradeline.component';

const components = [DisputeTradelineComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedComponentsModule, ViewsModule, DisputeTradelineRoutingModule],
  exports: [...components],
})
export class DisputeTradelineModule {}
