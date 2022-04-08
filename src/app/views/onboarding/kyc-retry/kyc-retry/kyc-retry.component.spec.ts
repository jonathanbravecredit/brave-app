import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@shared/services/state/state.service';

import { KycRetryComponent } from './kyc-retry.component';

describe('KycRetryComponent', () => {
  let component: KycRetryComponent;
  let fixture: ComponentFixture<KycRetryComponent>;
  let stateServiceMock: any;

  beforeEach(async () => {
    stateServiceMock = jasmine.createSpyObj('StateService', ['resetOnboarding']);

    await TestBed.configureTestingModule({
      declarations: [KycRetryComponent],
      providers: [{ provide: StateService, useValue: stateServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycRetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run resetOnboarding on init', () => {
    component.ngOnInit();

    expect(stateServiceMock.resetOnboarding).toBeTruthy();
  });
});
