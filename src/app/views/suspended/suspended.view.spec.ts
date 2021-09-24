import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedView } from './suspended.view';

describe('SuspendedView', () => {
  let component: SuspendedView;
  let fixture: ComponentFixture<SuspendedView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspendedView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendedView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
