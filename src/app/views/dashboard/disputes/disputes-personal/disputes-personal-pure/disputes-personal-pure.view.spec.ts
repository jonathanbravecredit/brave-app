import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesPersonalPureView } from './disputes-personal-pure.view';

describe('DisputesPersonalPureView', () => {
  let component: DisputesPersonalPureView;
  let fixture: ComponentFixture<DisputesPersonalPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesPersonalPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPersonalPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
