import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccountStatusToHexPipe } from "@shared/pipes/account-status-to-hex/account-status-to-hex.pipe";
import { TransunionUtil } from "@shared/utils/transunion/transunion";
import { ICreditUtilization } from "@views/dashboard/credit-utilization/components/credit-utilization-card/interfaces";
import { ITradelineDetailsConfig } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces";

import { CreditMixCardComponent } from "./credit-mix-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TradelineToPagesPipe } from "../../../../../shared/pipes/tradeline-to-pages/tradeline-to-pages.pipe";

describe("CreditMixCardComponent", () => {
  let component: CreditMixCardComponent;
  let fixture: ComponentFixture<CreditMixCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CreditMixCardComponent,
        AccountStatusToHexPipe,
        TradelineToPagesPipe,
      ],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set isCreditCard to true if accountTypeSymbol is R, on init", () => {
    component.creditUtilization = {
      config: { accountTypeSymbol: "R" } as ITradelineDetailsConfig,
    };
    component.ngOnInit();
    expect(component.isCreditCard).toBeTrue();
  });

  it("should set open to true if openClosed is o, on init", () => {
    component.creditUtilization = { openClosed: "o" } as ICreditUtilization;
    component.ngOnInit();
    expect(component.open).toBeTrue();
  });

  it("should run calculatePercentageUtilization if creditUtilization is truthy on init", () => {
    spyOn(component, "calculatePercentageUtilization");
    component.creditUtilization = {} as ICreditUtilization;
    component.ngOnInit();
    expect(component.calculatePercentageUtilization).toHaveBeenCalled();
  });

  it("should run calculateCreditStatus on init", () => {
    spyOn(component, "calculateCreditStatus");
    component.ngOnInit();
    expect(component.calculateCreditStatus).toHaveBeenCalled();
  });

  it("should return undefined on calculatePercentageUtilization if both arguments are undefined", () => {
    let res = component.calculatePercentageUtilization(undefined, undefined);
    expect(res).toBeUndefined();
  });

  it("should return TransunionUtil.bcMissing on calculatePercentageUtilization if open is falsy", () => {
    component.open = false;
    let res = component.calculatePercentageUtilization("", "");
    expect(res).toEqual(TransunionUtil.bcMissing);
  });

  it("should return 200 on calculatePercentageUtilization if currentBalence 4 and creditLimit is 2", () => {
    component.open = true;
    let res = component.calculatePercentageUtilization(4, 2);
    expect(res).toEqual(200);
  });

  it('should return "closed" on calculateCreditStatus if open is falsy', () => {
    component.open = false;
    let res = component.calculateCreditStatus("");
    expect(res).toEqual("closed");
  });

  it('should return "closed" on calculateCreditStatus if argument is undefined', () => {
    component.open = true;
    let res = component.calculateCreditStatus(undefined);
    expect(res).toEqual("closed");
  });

  it('should return "excellent" on calculateCreditStatus if argument is 8', () => {
    component.open = true;
    let res = component.calculateCreditStatus(8);
    expect(res).toEqual("excellent");
  });

  it('should return "good" on calculateCreditStatus if argument is 28', () => {
    component.open = true;
    let res = component.calculateCreditStatus(28);
    expect(res).toEqual("good");
  });

  it('should return "fair" on calculateCreditStatus if argument is 48', () => {
    component.open = true;
    let res = component.calculateCreditStatus(48);
    expect(res).toEqual("fair");
  });

  it('should return "poor" on calculateCreditStatus if argument is 73', () => {
    component.open = true;
    let res = component.calculateCreditStatus(73);
    expect(res).toEqual("poor");
  });

  it('should return "verypoor" on calculateCreditStatus if argument is 75', () => {
    component.open = true;
    let res = component.calculateCreditStatus(75);
    expect(res).toEqual("verypoor");
  });
});
