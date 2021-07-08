import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineDisputePersonalInformationComponent } from './tradeline-dispute-personal-information.component';

describe('TradelineDisputePersonalInformationComponent', () => {
  let component: TradelineDisputePersonalInformationComponent;
  let fixture: ComponentFixture<TradelineDisputePersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDisputePersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDisputePersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
