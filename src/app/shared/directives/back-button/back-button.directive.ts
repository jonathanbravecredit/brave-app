import { Directive, HostListener, Input } from '@angular/core';
import { NavigationService } from '@shared/services/navigation/navigation.service';

@Directive({
  selector: 'button[backButton]',
})
export class BackButtonDirective {
  @Input() disableAutoNavigation: boolean = false;
  constructor(private navigation: NavigationService) {}

  @HostListener('click')
  onClick(): void {
    if (this.disableAutoNavigation) return;
    this.navigation.back();
  }
}
