import { environment } from "@environments/environment";
import { Injectable, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription, BehaviorSubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import {
  NeverbounceService,
  NeverBounceResponse,
} from "@shared/services/neverbounce/neverbounce.service";
import { AuthService } from "@shared/services/auth/auth.service";
import { AuthResolverResults } from "@shared/resolvers/auth/auth.resolver";
import { IamService } from "../../shared/services/auth/iam.service";
import { generate } from "generate-password";
import { WaitlistFormModel } from "../../shared/interfaces/waitlist.interface";
import { Waitlist } from "@bravecredit/brave-sdk/dist/models";

@Injectable({
  providedIn: "root",
})
export class WaitlistService implements OnDestroy {
  hasReferralCode: boolean = false;
  referralCode: string | null | undefined;
  routeSub$: Subscription | undefined;
  emailError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  alreadyOnWaitlist: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  addedToWaitlist: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  waitlistForm: WaitlistFormModel = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referralCode: "",
  };

  constructor(
    private route: ActivatedRoute,
    private neverBounce: NeverbounceService,
    private iam: IamService,
    private Auth: AuthService
  ) {
    this.subscribeToRouteDate();
    if (this.hasReferralCode && this.referralCode) {
      this.waitlistForm.referralCode = this.referralCode;
    }
  }

  async waitlistFormSubmit(parentForm: FormGroup) {
    let { firstName, lastName, email, phoneNumber } = parentForm.value;
    console.log("here", parentForm);
    this.waitlistForm.email = email.input;
    this.waitlistForm.firstName = firstName.input;
    this.waitlistForm.lastName = lastName.input;
    this.waitlistForm.phone = phoneNumber.input;

    this.emailError.next(await this.checkIfEmailIsValid(email.input));

    let isUser: boolean = await this.checkIfUser(email.input);

    if (!isUser) {
      const password = generate({
        length: 10,
        numbers: true,
      });
      const signUpResp = await this.Auth.signUp({
        username: email,
        password: password,
      });
    }

    let waitlistCheckResponse = await this.checkIfUserOnWaitlist(email.input);

    if (waitlistCheckResponse) {
      this.alreadyOnWaitlist.next(true);
    } else {
      let addToWaitlistResult = await this.addRecordToWaitlist();
      this.addedToWaitlist.next(addToWaitlistResult);
    }
  }

  async checkIfEmailIsValid(email: string): Promise<boolean> {
    const resp: Response = await this.neverBounce.validateEmail(email);
    const body: NeverBounceResponse = await resp.json();
    return body.result.toLowerCase() === "valid" ? false : true;
  }

  async checkIfUser(email: string): Promise<boolean> {
    const url = `${environment.api}/validation/account/${email}`;
    let signedReq = await this.iam.signRequest(url, "GET", {});
    let resp = await fetch(signedReq);
    const body: string = await resp.json();
    return body.toLowerCase() === "account_exists" ? true : false;
  }

  async checkIfUserOnWaitlist(email: string): Promise<null | Waitlist> {
    const url = `${environment.api}/waitlist/account/${email}`;
    let signedReq = await this.iam.signRequest(url, "GET", {});
    let resp = await fetch(signedReq);
    const body: null | Waitlist = await resp.json();
    return body;
  }

  async addRecordToWaitlist(): Promise<boolean> {
    const url = `${environment.api}/waitlist/account`;
    let signedReq = await this.iam.signRequest(
      url,
      "POST",
      {},
      JSON.stringify(this.waitlistForm)
    );
    let resp = await fetch(signedReq);
    return resp.status === 200 ? true : false;
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
  }

  subscribeToRouteDate(): void {
    this.routeSub$ = this.route.data.subscribe((resp: any) => {
      this.hasReferralCode = resp.data?.hasReferralCode;
      this.referralCode = resp.data?.referralCode;
    });
  }
}
