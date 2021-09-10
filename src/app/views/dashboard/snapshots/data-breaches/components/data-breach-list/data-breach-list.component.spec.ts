import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBreachListComponent } from './data-breach-list.component';

describe('DataBreachListComponent', () => {
  let component: DataBreachListComponent;
  let fixture: ComponentFixture<DataBreachListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBreachListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
