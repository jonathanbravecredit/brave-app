import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbearanceHeaderComponent } from './forbearance-header.component';

describe('ForbearanceHeaderComponent', () => {
  let component: ForbearanceHeaderComponent;
  let fixture: ComponentFixture<ForbearanceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbearanceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
