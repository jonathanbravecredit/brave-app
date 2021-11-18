
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
                    AttributeValue: '720',
                    ServiceProductFulfillmentKey: 'ServiceProductFulfillmentKey'
                }
            ]
        }
    }
}
