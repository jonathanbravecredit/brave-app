import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

declare let fbq: (arg1: string, arg2: string, arg3?: any) => void;

@Injectable({
  providedIn: 'root',
})
export class FacebookService {
  constructor() {}

  fireCompleteRegistration(amount: number, currency: string): void {
    if (!environment.production) {
      return; // don't fire on dev
    }
    console.log('pixie dust sprinkles');
    fbq('track', 'CompleteRegistration', {
      value: amount.toString(),
      currency,
    });
  }

  fireInitiateCheckout(): void {
    if (!environment.production) {
      return;
    }
    fbq('track', 'InitiateCheckout');
  }

  fireStartTrial(): void {
    if (!environment.production) {
      return;
    }
    fbq('track', 'StartTrial', { value: '0.00', currency: 'USD', predicted_ltv: '0.00' });
  }

  firePurchase(): void {
    if (!environment.production) {
      return;
    }
    fbq('track', 'Purchase', { value: 0.0, currency: 'USD' });
  }

  fireViewContent(category: string = 'view', content: string = 'generic_content', type: string = 'content'): void {
    if (!environment.production) {
      return;
    }
    fbq('track', 'ViewContent', { content_category: category, content_name: content, content_type: type });
  }

  fireSubmitApplication(): void {
    if (!environment.production) {
      return;
    }
    fbq('track', 'SubmitApplication');
  }

  // add other FB pixel events below
}
