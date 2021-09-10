import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBreachHeaderComponent } from './data-breach-header.component';

describe('DataBreachHeaderComponent', () => {
  let component: DataBreachHeaderComponent;
  let fixture: ComponentFixture<DataBreachHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBreachHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
