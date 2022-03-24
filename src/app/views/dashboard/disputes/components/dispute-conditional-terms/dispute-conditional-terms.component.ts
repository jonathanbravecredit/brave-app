import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TERMS_CONDITIONS } from '@views/dashboard/disputes/components/dispute-conditional-terms/content';

@Component({
  selector: 'brave-dispute-conditional-terms',
  templateUrl: './dispute-conditional-terms.component.html',
})
export class DisputeConditionalTermsComponent implements OnInit {
  @Output() accepted: EventEmitter<void> = new EventEmitter();

  @Input() needsComment: boolean = false;
  @Input() hasComment: boolean | null = null;

  confirmed: boolean = false;
  content = TERMS_CONDITIONS;

  constructor() {}

  ngOnInit(): void {}

  setValue(e: any): void {
    this.confirmed = e.target.checked;
  }

  submitAcceptance(): void {
    if (this.needsComment ? this.confirmed || this.hasComment : this.confirmed) {
      this.accepted.emit();
    }
  }
}
