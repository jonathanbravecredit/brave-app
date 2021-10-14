import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeConditionalTermsComponent } from './dispute-conditional-terms.component';

describe('DisputeConditionalTermsComponent', () => {
  let component: DisputeConditionalTermsComponent;
  let fixture: ComponentFixture<DisputeConditionalTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeConditionalTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeConditionalTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
