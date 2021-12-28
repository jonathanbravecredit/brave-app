import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPersonalPipe } from '@shared/pipes/filterPersonal/filter-personal.pipe';

import { DisputesReconfirmPureView } from './disputes-reconfirm-pure.view';

describe('DisputesReconfirmPureView', () => {
  let component: DisputesReconfirmPureView;
  let fixture: ComponentFixture<DisputesReconfirmPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesReconfirmPureView, FilterPersonalPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesReconfirmPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
