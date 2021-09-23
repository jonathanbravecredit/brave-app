import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendedDefaultView } from './suspended-default.view';

describe('SuspendedDefaultView', () => {
  let component: SuspendedDefaultView;
  let fixture: ComponentFixture<SuspendedDefaultView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspendedDefaultView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendedDefaultView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
