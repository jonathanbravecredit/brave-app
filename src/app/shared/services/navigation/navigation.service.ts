import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private history: number = 0;

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history++;
      }
    });
  }

  back(): void {
    this.history--;
    if (this.history > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
