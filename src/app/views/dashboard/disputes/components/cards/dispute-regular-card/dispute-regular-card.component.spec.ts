import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeRegularCardComponent } from './dispute-regular-card.component';

describe('DisputeRegularCardComponent', () => {
  let component: DisputeRegularCardComponent;
  let fixture: ComponentFixture<DisputeRegularCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeRegularCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeRegularCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
