import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface IModalContent {
  stepId: number;
  title: string;
  description: string[];
  termsTitle: string;
  terms: string[];
  buttonText: string;
}

export interface IOnboardingEvent {
  isConfirmed: boolean;
}

@Component({
  selector: 'brave-onboarding-dispute',
  templateUrl: './onboarding-dispute.component.html',
})
export class OnboardingDisputeComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() confirmation: EventEmitter<IOnboardingEvent> = new EventEmitter();
  progressbarConfig = { size: 'base' };
  progressbarSteps = [
    { id: 0, active: true, complete: true, name: 'Report Refresh' },
    { id: 1, active: true, complete: true, name: 'Dispute Information' },
  ];

  currentModalContent: IModalContent;

  modalContents: IModalContent[] = [
    {
      stepId: 0,
      title: 'Refresh your Credit Report',
      description: [
        "For a new dispute it's important to have the latest TransUnion credit report",
        'Review the Refresh Credit Score Statement below and confirm to refresh your credit report.',
      ],
      termsTitle: 'Refresh Credit Score Statement',
      terms: [
        "TransUnion Interactive's contracts require us to obtain 'written instructions' from you to give us permission to obtain your TransUnion credit history",
        'You understand by checking on the "I Agree and Confirm" box, you are providing "written instructions" to [!!!NEED THE REST!!!]',
      ],
      buttonText: 'I Agree & Confirm.',
    },
    {
      stepId: 1,
      title: 'Online Dispute',
      description: [
        "Here's some important about about online online disputes you should know.",
        'Review the Terms and Conditions below to get started.',
      ],
      termsTitle: 'New Dispute Information',
      terms: [
        'As part of the dispute process, TransUnion may contact the data furnisher that reported the information being disputed.',
        'Any disputed information that is verified as accurate will remain on the credit report.',
        'The dispute options provided through this dispute service do not include "all" possible disputes',
      ],
      buttonText: 'I Acknowledge & Agree to the terms.',
    },
  ];

  currentStep = 0;

  constructor() {
    this.currentModalContent = this.modalContents[0];
    this.currentStep = this.currentModalContent.stepId;
  }

  ngOnInit(): void {}

  close() {
    this.confirmation.emit({ isConfirmed: false });
    this.showModal = false;
  }

  confirm() {
    if (this.currentStep === 0) {
      // call fulfill
      this.currentModalContent = this.modalContents[1];
      this.currentStep = this.currentModalContent.stepId;
    } else {
      this.confirmation.emit({ isConfirmed: true });
      this.showModal = false;
    }
  }
}
