import { TestBed } from "@angular/core/testing";

import { CreditScoreHistoryNgxChartService } from "./credit-score-history-ngx-chart.service";
import {
  MOCK_TRENDING_DATA_ONE_ATTR_MULTI_DATAPOINTS,
  MOCK_TRENDING_DATA_MULTI_ATTR_ONE_DATAPOINTS,
  MOCK_TRENDING_DATA_MULTI_ATTR_MULTI_DATAPOINTS,
} from "../../../../testing/__mocks__/getTrendingData.mocks";
import { IProductTrendingData } from "../../../interfaces/get-trending-data.interface";

describe("CreditScoreHistoryNgxChartService", () => {
  let service: CreditScoreHistoryNgxChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditScoreHistoryNgxChartService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return expected value on transformTrendingData with one attr multi datapoints", () => {
    let res = service.transformTrendingData(
      MOCK_TRENDING_DATA_ONE_ATTR_MULTI_DATAPOINTS
    );

    expect(res).toEqual([
      Object({
        AttributeDate: "2022-03-11T12:19:27",
        AttributeStatus: "Success",
        AttributeValue: 765,
        ServiceProductFulfillmentKey: "70794159-bb8d-41a1-8eb2-d4eb5b656eab",
      }),
      Object({
        AttributeDate: "2022-04-05T11:33:20",
        AttributeStatus: "Success",
        AttributeValue: 777,
        ServiceProductFulfillmentKey: "6f2f449b-668d-4c1a-8da3-5713f39aad94",
      }),
      Object({
        AttributeDate: "2022-05-05T09:32:16",
        AttributeStatus: "Success",
        AttributeValue: 777,
        ServiceProductFulfillmentKey: "b59f0aac-8e2d-4abc-b208-578cef3885bd",
      }),
    ]);
  });

  it("should return expected value on transformTrendingData with multi attr multi datapoints", () => {
    let res = service.transformTrendingData(
      MOCK_TRENDING_DATA_MULTI_ATTR_MULTI_DATAPOINTS
    );

    expect(res).toEqual([
      Object({
        AttributeDate: "2022-03-11T12:19:27",
        AttributeStatus: "Success",
        AttributeValue: 765,
        ServiceProductFulfillmentKey: "70794159-bb8d-41a1-8eb2-d4eb5b656eab",
      }),
      Object({
        AttributeDate: "2022-04-05T11:33:20",
        AttributeStatus: "Success",
        AttributeValue: 777,
        ServiceProductFulfillmentKey: "6f2f449b-668d-4c1a-8da3-5713f39aad94",
      }),
      Object({
        AttributeDate: "2022-05-05T09:32:16",
        AttributeStatus: "Success",
        AttributeValue: 777,
        ServiceProductFulfillmentKey: "b59f0aac-8e2d-4abc-b208-578cef3885bd",
      }),
    ]);
  });

  it("should return expected value on transformTrendingData with multi attr one datapoints", () => {
    let res = service.transformTrendingData(
      MOCK_TRENDING_DATA_MULTI_ATTR_ONE_DATAPOINTS
    );

    expect(res).toEqual({
      AttributeDate: "2022-05-05T09:32:16",
      AttributeStatus: "Success",
      AttributeValue: 777,
      ServiceProductFulfillmentKey: "b59f0aac-8e2d-4abc-b208-578cef3885bd",
    });
  });
});
