import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisputesListComponent } from './user-disputes-list.component';

describe('UserDisputesListComponent', () => {
  let component: UserDisputesListComponent;
  let fixture: ComponentFixture<UserDisputesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisputesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisputesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
