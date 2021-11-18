export interface IGetTrendingData {
    ProductAttributes: IProductAttributes;
  }

  export interface IProductAttributes {
    ProductTrendingAttribute: IProductTrendingAttribute;
  }

  export interface IProductTrendingAttribute {
    AttributeName: string;
    Bureau: string;
    ProductAttributeData: IProductTrendingData[] | IProductTrendingData;
  }

  export interface IProductTrendingData {
    AttributeDate: string;
    AttributeStatus: string;
    AttributeValue: string;
    ServiceProductFulfillmentKey: string
  }
