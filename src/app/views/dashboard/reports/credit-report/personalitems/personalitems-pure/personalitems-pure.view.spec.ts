import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitemsPureView } from './personalitems-pure.view';

describe('PersonalitemsPureView', () => {
  let component: PersonalitemsPureView;
  let fixture: ComponentFixture<PersonalitemsPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitemsPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitemsPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
