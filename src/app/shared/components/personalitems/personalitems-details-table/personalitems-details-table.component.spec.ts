import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitemsDetailsTableComponent } from './personalitems-details-table.component';

describe('PersonalitemsDetailsTableComponent', () => {
  let component: PersonalitemsDetailsTableComponent;
  let fixture: ComponentFixture<PersonalitemsDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitemsDetailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitemsDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
