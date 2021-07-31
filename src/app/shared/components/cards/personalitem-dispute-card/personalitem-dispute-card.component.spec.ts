import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitemDisputeCardComponent } from './personalitem-dispute-card.component';

describe('PersonalitemDisputeCardComponent', () => {
  let component: PersonalitemDisputeCardComponent;
  let fixture: ComponentFixture<PersonalitemDisputeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitemDisputeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitemDisputeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
