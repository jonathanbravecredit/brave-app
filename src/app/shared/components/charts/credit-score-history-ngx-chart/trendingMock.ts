import { IGetTrendingData } from "@shared/interfaces/get-trending-data.interface";

export const TRENDSTESTER: IGetTrendingData = {
  "AccountName": "CC2BraveCredit",
  "ErrorResponse": {
    "nil": true
  },
  "RequestKey": "BC-d4d73ea6-b6de-43e0-a08a-03381a5c3c56",
  "ResponseType": "Success",
  "ClientKey": "9bc652cb-f045-4920-b16f-39cc39707a7d",
  "PartnerAttributes": {
    "nil": true
  },
  "ProductAttributes": {
    "ProductTrendingAttribute": [
      {
        "AttributeName": "TUCVantageScore3V6",
        "Bureau": "TransUnion",
        "ProductAttributeData": {
          "ProductTrendingData": [
            {
              "AttributeDate": "2021-09-12T16:33:52",
              "AttributeStatus": "Failure",
              "AttributeValue": "",
              "ServiceProductFulfillmentKey": "f36e829e-6795-48f7-83aa-fcd872f34793"
            },
            {
              "AttributeDate": "2021-11-18T06:00:28",
              "AttributeStatus": "Failure",
              "AttributeValue": "",
              "ServiceProductFulfillmentKey": "a160aaee-856b-4321-a240-208a5c334d92"
            }
          ]
        }
      },
      {
        "AttributeName": "TUCVantageScore3V7_1",
        "Bureau": "TransUnion",
        "ProductAttributeData": {
          "ProductTrendingData": [
            {
              "AttributeDate": "2021-12-21T16:31:50",
              "AttributeStatus": "Success",
              "AttributeValue": 795,
              "ServiceProductFulfillmentKey": "02e33248-f9d2-4e00-9770-b8376521b823"
            },
            {
              "AttributeDate": "2022-01-19T06:35:23",
              "AttributeStatus": "Success",
              "AttributeValue": 766,
              "ServiceProductFulfillmentKey": "c3dd0d55-5bbd-4b19-9016-fe9eb7f8c172"
            }
          ]
        }
      }
    ]
  },
  "ProductDisplayToken": ""
}
