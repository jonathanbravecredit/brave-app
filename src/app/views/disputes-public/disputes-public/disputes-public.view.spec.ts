import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesPublicView } from './disputes-public.view';

describe('DisputesPublicView', () => {
  let component: DisputesPublicView;
  let fixture: ComponentFixture<DisputesPublicView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesPublicView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPublicView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
