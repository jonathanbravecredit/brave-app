import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCreditscoreBarComponent } from './horizontal-creditscore-bar.component';

describe('HorizontalCreditscoreBarComponent', () => {
  let component: HorizontalCreditscoreBarComponent;
  let fixture: ComponentFixture<HorizontalCreditscoreBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalCreditscoreBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCreditscoreBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
