import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBreachesComponent } from './data-breaches.component';

describe('DataBreachesComponent', () => {
  let component: DataBreachesComponent;
  let fixture: ComponentFixture<DataBreachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBreachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
