import { environment } from "@environments/environment";
import { Injectable, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription, BehaviorSubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { NeverbounceService, NeverBounceResponse } from "@shared/services/neverbounce/neverbounce.service";
import { AuthService } from "@shared/services/auth/auth.service";
import { IamService } from "../../shared/services/auth/iam.service";
import { WaitlistFormModel } from "../../shared/interfaces/waitlist.interface";
import { Waitlist } from "@bravecredit/brave-sdk/dist/models";
import { InterstitialService } from "../../shared/services/interstitial/interstitial.service";
@Injectable({
  providedIn: "root",
})
export class WaitlistService implements OnDestroy {
  referralCode: string | null | undefined;
  routeSub$: Subscription | undefined;
  emailError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  alreadyOnWaitlist: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  addedToWaitlist: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  waitlistForm: WaitlistFormModel = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referredByCode: "",
  };

  constructor(
    private route: ActivatedRoute,
    private neverBounce: NeverbounceService,
    private iam: IamService,
    private Auth: AuthService,
    private InterstitialService: InterstitialService,
  ) {
    this.subscribeToRouteDate();
  }

  async waitlistFormSubmit(parentForm: FormGroup) {
    let { firstName, lastName, email, phoneNumber } = parentForm.value;
    this.waitlistForm.email = email.input;
    this.waitlistForm.firstName = firstName.input;
    this.waitlistForm.lastName = lastName.input;
    this.waitlistForm.phone = phoneNumber.input;

    let isValid = await this.checkIfEmailIsValid(email.input);

    if (!isValid) {
      this.emailError.next(true);
      this.InterstitialService.fetching$.next(false);
      return;
    }

    let isUser: boolean = await this.checkIfUser(email.input);

    if (!isUser) {
      await this.Auth.signUp({
        username: email.input,
        password: "Brave123$",
      });
    }

    let waitlistCheckResponse = await this.checkIfUserOnWaitlist(email.input);

    if (waitlistCheckResponse) {
      this.alreadyOnWaitlist.next(true);
      this.InterstitialService.fetching$.next(false);
    } else {
      this.alreadyOnWaitlist.next(false);
      let addToWaitlistResult = await this.addRecordToWaitlist();
      this.addedToWaitlist.next(addToWaitlistResult);
      this.InterstitialService.fetching$.next(false);
    }
  }

  async checkIfEmailIsValid(email: string): Promise<boolean> {
    if (!email) return false;
    const resp: Response | null = await this.neverBounce.validateEmail(email);
    if (!resp) return false;
    const body: NeverBounceResponse = await resp.json();
    return body.result.toLowerCase() === "valid" ? true : false;
  }

  async checkIfUser(email: string): Promise<boolean> {
    if (!email) return false;
    const url = `${environment.api}/validation/account/${email}`;
    let signedReq = await this.iam.signRequest(url, "GET", {});
    let resp = await fetch(signedReq);
    const body: string = await resp.json();
    return body.toLowerCase() === "account_exists" ? true : false;
  }

  async checkIfUserOnWaitlist(email: string): Promise<null | Waitlist> {
    if (!email) return null;
    const url = `${environment.api}/waitlist/account/${email}`;
    let signedReq = await this.iam.signRequest(url, "GET", {});
    let resp = await fetch(signedReq);
    const body: null | Waitlist = await resp.json();
    return body;
  }

  async addRecordToWaitlist(): Promise<boolean> {
    const url = `${environment.api}/waitlist/account`;
    let signedReq = await this.iam.signRequest(url, "POST", {}, JSON.stringify(this.waitlistForm));
    let resp = await fetch(signedReq);
    return resp.status === 200 ? true : false;
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
  }

  subscribeToRouteDate(): void {
    this.routeSub$ = this.route.queryParams.subscribe((resp: any) => {
      this.waitlistForm.referredByCode = resp.referralCode;
    });
  }
}
