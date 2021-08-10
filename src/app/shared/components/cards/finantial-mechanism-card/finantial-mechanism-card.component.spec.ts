import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardCardComponent } from './creditcard-card.component';

describe('CreditcardCardComponent', () => {
  let component: CreditcardCardComponent;
  let fixture: ComponentFixture<CreditcardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
