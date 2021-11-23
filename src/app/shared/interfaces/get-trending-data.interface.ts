export interface IGetTrendingData {
  ProductAttributes: IProductAttributes;
}

export interface IProductAttributes {
  ProductTrendingAttribute: IProductTrendingAttribute;
}

export interface IProductTrendingAttribute {
  AttributeName: string;
  Bureau: string;
  ProductAttributeData: IProductAttributeData
}

export interface IProductAttributeData{
  ProductTrendingData: IProductTrendingData[] | IProductTrendingData;
}

export interface IProductTrendingData {
  AttributeDate: string;
  AttributeStatus: string;
  AttributeValue: string;
  ServiceProductFulfillmentKey: string;
}
