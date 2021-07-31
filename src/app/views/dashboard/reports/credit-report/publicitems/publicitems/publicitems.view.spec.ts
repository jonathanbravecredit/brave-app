import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitemsView } from './publicitems.view';

describe('PublicitemsView', () => {
  let component: PublicitemsView;
  let fixture: ComponentFixture<PublicitemsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicitemsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitemsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
