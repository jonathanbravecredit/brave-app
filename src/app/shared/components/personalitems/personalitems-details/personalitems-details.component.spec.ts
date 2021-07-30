import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitemsDetailsComponent } from './personalitems-details.component';

describe('PersonalitemsDetailsComponent', () => {
  let component: PersonalitemsDetailsComponent;
  let fixture: ComponentFixture<PersonalitemsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitemsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
