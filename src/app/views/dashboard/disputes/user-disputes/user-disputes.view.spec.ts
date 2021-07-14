import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisputesView } from './user-disputes.view';

describe('UserDisputesView', () => {
  let component: UserDisputesView;
  let fixture: ComponentFixture<UserDisputesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisputesView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisputesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
