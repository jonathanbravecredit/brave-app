import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbearanceInfoComponent } from './forbearance-info.component';

describe('ForbearanceInfoComponent', () => {
  let component: ForbearanceInfoComponent;
  let fixture: ComponentFixture<ForbearanceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbearanceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
