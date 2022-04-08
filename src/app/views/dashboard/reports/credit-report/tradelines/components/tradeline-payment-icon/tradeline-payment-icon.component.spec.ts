import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradelineIcons } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-icon/constants';
import { TradelinePaymentIconComponent } from './tradeline-payment-icon.component';

describe('TradelinePaymentIconComponent', () => {
  let component: TradelinePaymentIconComponent;
  let fixture: ComponentFixture<TradelinePaymentIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradelinePaymentIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinePaymentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Current icon when code "C" is passed in', () => {
    let test = component.parseCode('C');

    expect(test).toEqual(TradelineIcons.Current);
  });

  it('should return Unknown icon when code "U" is passed in', () => {
    let test = component.parseCode('U');

    expect(test).toEqual(TradelineIcons.Unknown);
  });

  it('should return Late30 icon when code "1" is passed in', () => {
    let test = component.parseCode('1');

    expect(test).toEqual(TradelineIcons.Late30);
  });

  it('should return Late60 icon when code "2" is passed in', () => {
    let test = component.parseCode('2');

    expect(test).toEqual(TradelineIcons.Late60);
  });

  it('should return Late90 icon when code "3" is passed in', () => {
    let test = component.parseCode('3');

    expect(test).toEqual(TradelineIcons.Late90);
  });

  it('should return Late120 icon when code "4" is passed in', () => {
    let test = component.parseCode('4');

    expect(test).toEqual(TradelineIcons.Late120);
  });

  it('should return Collection icon when code "9" is passed in', () => {
    let test = component.parseCode('9');

    expect(test).toEqual(TradelineIcons.Collection);
  });

  it('should return WageEarner icon when code "7" is passed in', () => {
    let test = component.parseCode('7');

    expect(test).toEqual(TradelineIcons.WageEarner);
  });

  it('should return Repossession icon when code "8R" is passed in', () => {
    let test = component.parseCode('8R');

    expect(test).toEqual(TradelineIcons.Repossession);
  });
});
