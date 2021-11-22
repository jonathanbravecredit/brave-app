import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCreditscoreInvisiblebarComponent } from './horizontal-creditscore-invisiblebar.component';

describe('HorizontalCreditscoreInvisiblebarComponent', () => {
  let component: HorizontalCreditscoreInvisiblebarComponent;
  let fixture: ComponentFixture<HorizontalCreditscoreInvisiblebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalCreditscoreInvisiblebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCreditscoreInvisiblebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
