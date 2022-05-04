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
import { CustomLineChartService } from '@shared/services/charts/custom-line-chart.service';
import { NavigationService } from '@shared/services/navigation/navigation.service';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { InitService } from '@shared/services/init/init.service';
import { CreditUtilizationService } from './credit-utilization/credit-utilization.service';
import { ModalService } from '@shared/services/modal/modal.service';
import { NeverbounceService } from '@shared/services/neverbounce/neverbounce.service';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { IpaddressService } from '@shared/services/ipaddress/ipaddress.service';
import { CampaignService } from '@shared/services/campaign/campaign.service';
import { MergereportToSubscribersPipe } from '@shared/pipes/mergereport-to-subscribers/mergereport-to-subscribers.pipe';
import { MergereportToPersonalitemsPipe } from '@shared/pipes/mergereport-to-personalitems/mergereport-to-personalitems.pipe';
import { MergereportToPublicitemDetailsPipe } from '@shared/pipes/mergereport-to-publicitems/mergereport-to-publicitems.pipe';
import { MergereportToNegativeTradelinesPipe } from '@shared/pipes/mergereport-to-negative-tradelines/mergereport-to-negative-tradelines.pipe';
import { Auth } from 'aws-amplify';
import { BroadcastService } from '@shared/services/broadcast/broadcast.service';
import { NavigatorService } from '@shared/services/navigator/navigator.service';

const services = [
  InitService,
  AuthService,
  APIService,
  SyncService,
  GuestService,
  IamService,
  KycService,
  DashboardService,
  TransunionService,
  // DisputeService, // already in provided for in root
  CustomLineChartService,
  NavigationService,
  FeatureFlagsService,
  GoogleService,
  CreditUtilizationService,
  ModalService,
  NeverbounceService,
  ReferralsService,
  IpaddressService,
  CampaignService,
  MergereportToNegativeTradelinesPipe,
  MergereportToSubscribersPipe,
  MergereportToPublicitemDetailsPipe,
  MergereportToPersonalitemsPipe,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...services, { provide: Auth, useValue: Auth }],
})
export class SharedServicesModule {}
