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

@Injectable({
  providedIn: "root",
})
export class WaitlistService implements OnDestroy {
  hasReferralCode: boolean = false;
  referralCode: string | null | undefined;
  routeSub$: Subscription | undefined;
  emailError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private route: ActivatedRoute,
    private neverBounce: NeverbounceService
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

  async checkIfUser(email: string): Promise<boolean> {
    const url = `${environment.api}/validation/account/${email}`; //TODO coming back with 403 forbidden
    const idToken = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    return await this.http.get<any>(url, { headers }).toPromise();
  }

  async checkIfEmailIsValid(email: string): Promise<boolean> {
    const resp: Response = await this.neverBounce.validateEmail(email);
    const body: NeverBounceResponse = await resp.json();
    return body.result.toLowerCase() === "valid" ? false : true;
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
