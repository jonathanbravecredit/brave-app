import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineGenericCardComponent } from './tradeline-generic-card.component';

describe('TradelineGenericCardComponent', () => {
  let component: TradelineGenericCardComponent;
  let fixture: ComponentFixture<TradelineGenericCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineGenericCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineGenericCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
