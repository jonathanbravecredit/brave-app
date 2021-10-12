import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsHowToReadComponent } from './dispute-findings-how-to-read.component';

describe('DisputeFindingsHowToReadComponent', () => {
  let component: DisputeFindingsHowToReadComponent;
  let fixture: ComponentFixture<DisputeFindingsHowToReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsHowToReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsHowToReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
