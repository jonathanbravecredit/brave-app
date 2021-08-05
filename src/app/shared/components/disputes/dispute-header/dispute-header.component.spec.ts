import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeHeaderComponent } from './dispute-header.component';

describe('DisputeHeaderComponent', () => {
  let component: DisputeHeaderComponent;
  let fixture: ComponentFixture<DisputeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
