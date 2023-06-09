import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkifyPipe } from '@shared/pipes/linkify/linkify.pipe';

import { DisputeFindingsContactInfoComponent } from './dispute-findings-contact-info.component';

describe('DisputeFindingsContactInfoComponent', () => {
  let component: DisputeFindingsContactInfoComponent;
  let fixture: ComponentFixture<DisputeFindingsContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsContactInfoComponent, LinkifyPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
