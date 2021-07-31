import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinesPureComponent } from './tradelines-pure.component';

describe('TradelinesPureComponent', () => {
  let component: TradelinesPureComponent;
  let fixture: ComponentFixture<TradelinesPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinesPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
