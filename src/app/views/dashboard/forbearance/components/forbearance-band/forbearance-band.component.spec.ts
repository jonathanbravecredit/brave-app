import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbearanceBandComponent } from './forbearance-band.component';

describe('ForbearanceBandComponent', () => {
  let component: ForbearanceBandComponent;
  let fixture: ComponentFixture<ForbearanceBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbearanceBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
