import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitemsDetailsTableComponent } from './publicitems-details-table.component';

describe('PublicitemsDetailsTableComponent', () => {
  let component: PublicitemsDetailsTableComponent;
  let fixture: ComponentFixture<PublicitemsDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicitemsDetailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitemsDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
