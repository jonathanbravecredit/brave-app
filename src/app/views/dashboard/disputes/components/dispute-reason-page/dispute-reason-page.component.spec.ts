import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeReasonPageComponent } from './dispute-reason-page.component';

describe('DisputeReasonPageComponent', () => {
  let component: DisputeReasonPageComponent;
  let fixture: ComponentFixture<DisputeReasonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeReasonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeReasonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
