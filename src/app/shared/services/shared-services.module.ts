import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@shared/services/auth/auth.service';
import { GuestService } from '@shared/services/auth/guest.service';
import { IamService } from '@shared/services/auth/iam.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { APIService } from '@shared/services/aws/api.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';

const services = [
  AuthService,
  APIService,
  SyncService,
  GuestService,
  IamService,
  KycService,
  DashboardService,
  TransunionService,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...services],
})
export class SharedServicesModule {}
