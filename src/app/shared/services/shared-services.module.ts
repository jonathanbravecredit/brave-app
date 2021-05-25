import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@shared/services/auth/auth.service';
import { GuestService } from '@shared/services/auth/guest.service';
import { IamService } from '@shared/services/auth/iam.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, GuestService, IamService],
})
export class SharedServicesModule {}
