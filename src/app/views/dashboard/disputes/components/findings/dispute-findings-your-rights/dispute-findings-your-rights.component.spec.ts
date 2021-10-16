import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsYourRightsComponent } from './dispute-findings-your-rights.component';

describe('DisputeFindingsYourRightsComponent', () => {
  let component: DisputeFindingsYourRightsComponent;
  let fixture: ComponentFixture<DisputeFindingsYourRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsYourRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsYourRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
