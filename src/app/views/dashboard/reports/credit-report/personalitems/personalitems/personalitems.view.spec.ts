import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitemsView } from './personalitems.view';

describe('PersonalitemsView', () => {
  let component: PersonalitemsView;
  let fixture: ComponentFixture<PersonalitemsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitemsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitemsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
