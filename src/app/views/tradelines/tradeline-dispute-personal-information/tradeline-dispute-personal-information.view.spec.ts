import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradelineDisputePersonalInformationView } from './tradeline-dispute-personal-information.view';

describe('TradelineDisputePersonalInformationView', () => {
  let component: TradelineDisputePersonalInformationView;
  let fixture: ComponentFixture<TradelineDisputePersonalInformationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDisputePersonalInformationView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDisputePersonalInformationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
