import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeBaseComponent } from './dispute-base.component';

describe('DisputeBaseComponent', () => {
  let component: DisputeBaseComponent;
  let fixture: ComponentFixture<DisputeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
