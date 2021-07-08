export interface IResolverEvent {
  typeName: string;
  fieldName: string;
  arguments: any;
  identity: any;
  source: any;
  request: any;
  prev: any;
}
