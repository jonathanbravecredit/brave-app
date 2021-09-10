import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBreachCardComponent } from './data-breach-card.component';

describe('DataBreachCardComponent', () => {
  let component: DataBreachCardComponent;
  let fixture: ComponentFixture<DataBreachCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBreachCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
