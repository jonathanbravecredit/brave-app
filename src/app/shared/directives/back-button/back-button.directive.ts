import { Directive, HostListener } from '@angular/core';
import { NavigationService } from '@shared/services/navigation/navigation.service';

@Directive({
  selector: 'button[backButton]',
})
export class BackButtonDirective {
  constructor(private navigation: NavigationService) {}

  @HostListener('click')
  onClick(): void {
    console.log('back button clicked');
    this.navigation.back();
  }
}
