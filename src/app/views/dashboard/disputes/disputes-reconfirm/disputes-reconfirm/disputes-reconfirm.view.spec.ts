import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesReconfirmView } from './disputes-reconfirm.view';

describe('DisputesReconfirmView', () => {
  let component: DisputesReconfirmView;
  let fixture: ComponentFixture<DisputesReconfirmView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesReconfirmView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesReconfirmView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
