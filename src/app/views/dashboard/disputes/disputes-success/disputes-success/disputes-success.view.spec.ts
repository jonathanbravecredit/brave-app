import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesSuccessView } from './disputes-success.view';

describe('DisputesSuccessView', () => {
  let component: DisputesSuccessView;
  let fixture: ComponentFixture<DisputesSuccessView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesSuccessView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesSuccessView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
