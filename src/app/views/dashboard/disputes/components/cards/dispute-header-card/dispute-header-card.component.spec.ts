import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeHeaderCardComponent } from './dispute-header-card.component';

describe('DisputeHeaderCardComponent', () => {
  let component: DisputeHeaderCardComponent;
  let fixture: ComponentFixture<DisputeHeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeHeaderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeHeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
