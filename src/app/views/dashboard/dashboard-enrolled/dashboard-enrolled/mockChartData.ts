
import { IGetTrendingData } from "@shared/interfaces/get-trending-data.interface";

export const mockGetTrendingData: IGetTrendingData = {
    ProductAttributes: {
        ProductTrendingAttribute: {
            AttributeName: 'AttributeName',
            Bureau: 'Bureau',
            ProductAttributeData: [
                {
                    AttributeDate: '2011-01-05T14:48:00.000Z',
                    AttributeStatus: 'Status',
                    AttributeValue: '420',
                    ServiceProductFulfillmentKey: 'ServiceProductFulfillmentKey'
                },
                {
                    AttributeDate: '2011-02-05T14:48:00.000Z',
                    AttributeStatus: 'Status',
                    AttributeValue: '520',
                    ServiceProductFulfillmentKey: 'ServiceProductFulfillmentKey'
                },
                {
                    AttributeDate: '2011-03-05T14:48:00.000Z',
                    AttributeStatus: 'Status',
                    AttributeValue: '620',
                    ServiceProductFulfillmentKey: 'ServiceProductFulfillmentKey'
                },
                {
                    AttributeDate: '2011-04-05T14:48:00.000Z',
                    AttributeStatus: 'Status',
                    AttributeValue: '720',
                    ServiceProductFulfillmentKey: 'ServiceProductFulfillmentKey'
                },
                {
                    AttributeDate: '2011-05-05T14:48:00.000Z',
                    AttributeStatus: 'Status',
                    AttributeValue: '820',
                    ServiceProductFulfillmentKey: 'ServiceProductFulfillmentKey'
                },
            ]
        }
    }
}
