import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IBorrowerAddress, IEmployer } from "@shared/interfaces";
import { IPersonalItemsDetailsConfig } from "@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces";

import { AccountSummaryPersonalitemComponent } from "./account-summary-personalitem.component";

describe("AccountSummaryPersonalitemComponent", () => {
  let component: AccountSummaryPersonalitemComponent;
  let fixture: ComponentFixture<AccountSummaryPersonalitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSummaryPersonalitemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSummaryPersonalitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should set icon to "face" if personalDetailsConfig?.key is name', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "name";

    component.ngOnInit();

    expect(component.icon).toEqual("face");
  });

  it('should set icon to "face" if personalDetailsConfig?.key is aka', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "aka";

    component.ngOnInit();

    expect(component.icon).toEqual("face");
  });

  it('should set icon to "home" if personalDetailsConfig?.key is curraddress', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "curraddress";

    component.personalDetailsConfig.value = {} as IBorrowerAddress;

    component.ngOnInit();

    expect(component.icon).toEqual("home");
  });

  it('should set icon to "home" if personalDetailsConfig?.key is prevaddress', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "prevaddress";

    component.personalDetailsConfig.value = {} as IBorrowerAddress;

    component.ngOnInit();

    expect(component.icon).toEqual("home");
  });

  it('should set icon to "badge" if personalDetailsConfig?.key is employer', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "employer";

    component.personalDetailsConfig.value = {} as IEmployer;

    component.ngOnInit();

    expect(component.icon).toEqual("badge");
  });

  it('should set label to "Name" if personalDetailsConfig?.key is name', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "name";

    component.ngOnInit();

    expect(component.label).toEqual("Name");
  });

  it('should set label to "Name" if personalDetailsConfig?.key is aka', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "aka";

    component.ngOnInit();

    expect(component.label).toEqual("Name");
  });

  it('should set label to "Address" if personalDetailsConfig?.key is curraddress', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "curraddress";

    component.personalDetailsConfig.value = {} as IBorrowerAddress;

    component.ngOnInit();

    expect(component.label).toEqual("Address");
  });

  it('should set label to "Address" if personalDetailsConfig?.key is prevaddress', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "prevaddress";

    component.personalDetailsConfig.value = {} as IBorrowerAddress;

    component.ngOnInit();

    expect(component.label).toEqual("Address");
  });

  it('should set label to "Employer" if personalDetailsConfig?.key is employer', () => {
    component.personalDetailsConfig = {} as IPersonalItemsDetailsConfig;

    component.personalDetailsConfig.key = "employer";

    component.personalDetailsConfig.value = {} as IEmployer;

    component.ngOnInit();

    expect(component.label).toEqual("Employer");
  });
});
