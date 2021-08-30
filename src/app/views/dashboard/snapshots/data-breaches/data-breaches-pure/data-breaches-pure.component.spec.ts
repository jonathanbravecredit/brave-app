import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBreachesPureComponent } from './data-breaches-pure.component';

describe('DataBreachesPureComponent', () => {
  let component: DataBreachesPureComponent;
  let fixture: ComponentFixture<DataBreachesPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBreachesPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachesPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
