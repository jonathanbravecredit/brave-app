import { environment } from "@environments/environment";
import { Injectable, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subscription, BehaviorSubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import {
  NeverbounceService,
  NeverBounceResponse,
} from "@shared/services/neverbounce/neverbounce.service";
import { AuthService } from "@shared/services/auth/auth.service";
import { AuthResolverResults } from "@shared/resolvers/auth/auth.resolver";
import { IamService } from "../../shared/services/auth/iam.service";

interface waitlistFormModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: "root",
})
export class WaitlistService implements OnDestroy {
  hasReferralCode: boolean = false;
  referralCode: string | null | undefined;
  routeSub$: Subscription | undefined;
  emailError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  waitlistFormModel: waitlistFormModel = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  constructor(
    private route: ActivatedRoute,
    private neverBounce: NeverbounceService,
    private iam: IamService
  ) {
    this.subscribeToRouteDate();
    if (this.hasReferralCode && this.referralCode) {
      localStorage.setItem("referralCode", this.referralCode);
    }
  }

  async waitlistFormSubmit(parentForm: FormGroup) {
    let { firstName, lastName, email, phoneNumber } = parentForm.value;

    this.emailError.next(await this.checkIfEmailIsValid(email.input));

    let isUser: boolean = await this.checkIfUser(email.input);

    if (isUser) {
    } else {
    }
  }

  async checkIfEmailIsValid(email: string): Promise<boolean> {
    const resp: Response = await this.neverBounce.validateEmail(email);
    const body: NeverBounceResponse = await resp.json();
    return body.result.toLowerCase() === "valid" ? false : true;
  }

  async checkIfUser(email: string): Promise<boolean> {
    const url = `${environment.api}/validation/account/${email}`; //TODO coming back with 403 forbidden
    let signedReq = await this.iam.signRequest(url, "GET", {});
    let resp = await fetch(signedReq);
    const body: string = await resp.json();
    return body.toLowerCase() === "account_exists" ? true : false;
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
  }

  subscribeToRouteDate(): void {
    this.routeSub$ = this.route.data.subscribe((resp: any) => {
      const { referralCode, hasReferralCode } =
        resp.data as AuthResolverResults;
      this.hasReferralCode = hasReferralCode;
      this.referralCode = referralCode;
    });
  }
}
``;
