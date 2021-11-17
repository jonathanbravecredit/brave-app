import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputePublicCardComponent } from './dispute-public-card.component';

describe('DisputePublicCardComponent', () => {
  let component: DisputePublicCardComponent;
  let fixture: ComponentFixture<DisputePublicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputePublicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputePublicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
