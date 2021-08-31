import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBreachNoneComponent } from './data-breach-none.component';

describe('DataBreachNoneComponent', () => {
  let component: DataBreachNoneComponent;
  let fixture: ComponentFixture<DataBreachNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBreachNoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
