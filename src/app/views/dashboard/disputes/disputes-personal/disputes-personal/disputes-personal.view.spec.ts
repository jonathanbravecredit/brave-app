import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesPersonalView } from './disputes-personal.view';

describe('DisputesPersonalView', () => {
  let component: DisputesPersonalView;
  let fixture: ComponentFixture<DisputesPersonalView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesPersonalView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPersonalView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
