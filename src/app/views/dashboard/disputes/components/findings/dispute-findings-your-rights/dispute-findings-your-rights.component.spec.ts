import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkifyPipe } from '@shared/pipes/linkify/linkify.pipe';

import { DisputeFindingsYourRightsComponent } from './dispute-findings-your-rights.component';

describe('DisputeFindingsYourRightsComponent', () => {
  let component: DisputeFindingsYourRightsComponent;
  let fixture: ComponentFixture<DisputeFindingsYourRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsYourRightsComponent, LinkifyPipe ]
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
