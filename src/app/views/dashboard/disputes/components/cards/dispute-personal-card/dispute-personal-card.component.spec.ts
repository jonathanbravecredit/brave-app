import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputePersonalCardComponent } from './dispute-personal-card.component';

describe('DisputePersonalCardComponent', () => {
  let component: DisputePersonalCardComponent;
  let fixture: ComponentFixture<DisputePersonalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputePersonalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputePersonalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
