import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsView } from './dispute-findings.view';

describe('DisputeFindingsView', () => {
  let component: DisputeFindingsView;
  let fixture: ComponentFixture<DisputeFindingsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
