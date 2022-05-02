import { EventKeys } from "@shared/services/broadcast/broadcast.model";
import { Helper } from "@testing/test-helper";
import { BehaviorSubject } from "rxjs";

import { NegativeAccountService } from "./negative-account.service";

const setup = () => {
  const broadcastMock = jasmine.createSpyObj("BroadcastService", ["broadcast"]);
  const creditReportMock = jasmine.createSpyObj(
    "CreditreportService",
    ["getNegativeItems"],
    {
      tuReport$: new BehaviorSubject({} as any),
    }
  );
  const service = new NegativeAccountService(broadcastMock, creditReportMock);
  return { service, broadcastMock };
};
describe("NegativeAccountService", () => {
  const { service, broadcastMock } = setup();
  const h = new Helper<NegativeAccountService>(service);

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("Properties and methods", () => {
    it("should have a property called model", () => {
      expect(h.hasProperty(service, "model")).toEqual(true);
    });
    it("should have a property called model$", () => {
      expect(h.hasProperty(service, "model$")).toEqual(true);
    });
    it('should have a method called "navigate"', () => {
      expect(h.hasMethod(service, "navigate")).toEqual(true);
    });
    it('should have a method called "setModel"', () => {
      expect(h.hasMethod(service, "setModel")).toEqual(true);
    });
  });

  describe("OnDestroy", () => {
    it("should call creditReportServiceSub$.unsubscribe", () => {
      const spy = spyOn(service.creditReportServiceSub$, "unsubscribe");
      service.ngOnDestroy();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("navigate method", () => {
    it("should call broadcastService.broadcast", () => {
      service.navigate("/myroute");
      expect(broadcastMock.broadcast).toHaveBeenCalledWith(
        EventKeys.NAVIGATION,
        "/myroute"
      );
    });
  });
});
