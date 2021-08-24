import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbearanceView } from './forbearance.view';

describe('ForbearanceView', () => {
  let component: ForbearanceView;
  let fixture: ComponentFixture<ForbearanceView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbearanceView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
