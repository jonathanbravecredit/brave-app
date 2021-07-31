import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinesComponent } from './tradelines.component';

describe('TradelinesComponent', () => {
  let component: TradelinesComponent;
  let fixture: ComponentFixture<TradelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
