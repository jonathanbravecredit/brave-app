export interface IGetTrendingData {
  AccountName: string;
  ErrorResponse: {
    nil: boolean;
  };
  RequestKey: string;
  ResponseType: string;
  ClientKey: string;
  PartnerAttributes: {
    nil: boolean;
  };
  ProductAttributes: IProductAttributes;
  ProductDisplayToken: string;
}

export interface IProductAttributes {
  ProductTrendingAttribute: IProductTrendingAttribute[] | IProductTrendingAttribute;
}

export interface IProductTrendingAttribute {
  AttributeName: string;
  Bureau: string;
  ProductAttributeData: IProductAttributeData;
}

export interface IProductAttributeData {
  ProductTrendingData: IProductTrendingData[] | IProductTrendingData;
}

export interface IProductTrendingData {
  AttributeDate: string;
  AttributeStatus: string;
  AttributeValue: string | number;
  ServiceProductFulfillmentKey: string;
}
