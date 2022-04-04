import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycKbaquestionsComponent } from './kyc-kbaquestions.component';

describe('KycKbaquestionsComponent', () => {
  let component: KycKbaquestionsComponent;
  let fixture: ComponentFixture<KycKbaquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KycKbaquestionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycKbaquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
