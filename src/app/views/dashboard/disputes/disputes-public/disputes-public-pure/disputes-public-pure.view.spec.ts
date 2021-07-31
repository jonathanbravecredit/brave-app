import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesPublicPureView } from './disputes-public-pure.view';

describe('DisputesPublicPureView', () => {
  let component: DisputesPublicPureView;
  let fixture: ComponentFixture<DisputesPublicPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesPublicPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPublicPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
