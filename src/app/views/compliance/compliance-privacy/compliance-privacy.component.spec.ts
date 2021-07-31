import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliancePrivacyComponent } from './compliance-privacy.component';

describe('CompliancePrivacyComponent', () => {
  let component: CompliancePrivacyComponent;
  let fixture: ComponentFixture<CompliancePrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompliancePrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliancePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
