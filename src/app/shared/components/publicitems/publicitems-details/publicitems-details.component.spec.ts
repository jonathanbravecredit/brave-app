import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitemsDetailsComponent } from './publicitems-details.component';

describe('PublicitemsDetailsComponent', () => {
  let component: PublicitemsDetailsComponent;
  let fixture: ComponentFixture<PublicitemsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicitemsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
