import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesSuccessPureView } from './disputes-success-pure.view';

describe('DisputesSuccessPureView', () => {
  let component: DisputesSuccessPureView;
  let fixture: ComponentFixture<DisputesSuccessPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesSuccessPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesSuccessPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
