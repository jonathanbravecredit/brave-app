import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  showSuccess(message: string): void {
    // add alert when applicable
  }

  showError(message: string): void {
    // add alert when applicable
  }
}
