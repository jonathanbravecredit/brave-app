import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBreachShareComponent } from './data-breach-share.component';

describe('DataBreachShareComponent', () => {
  let component: DataBreachShareComponent;
  let fixture: ComponentFixture<DataBreachShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBreachShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
