import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisputesPureView } from './user-disputes-pure.view';

describe('UserDisputesPureView', () => {
  let component: UserDisputesPureView;
  let fixture: ComponentFixture<UserDisputesPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisputesPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisputesPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
