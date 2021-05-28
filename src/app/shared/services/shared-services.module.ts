import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@shared/services/auth/auth.service';
import { GuestService } from '@shared/services/auth/guest.service';
import { IamService } from '@shared/services/auth/iam.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { APIService } from '@shared/services/aws/api.service';

const services = [
  AuthService,
  APIService,
  GuestService,
  IamService,
  KycService,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...services],
})
export class SharedServicesModule {}
