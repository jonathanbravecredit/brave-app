export class Helper<T> {
  private component: T;

  constructor(component: T) {
    this.component = component;
  }

  hasProperty(component: T, prop: string): boolean {
    return Object.keys(component).filter((key) => key === prop).length > 0;
  }
}

// export const spyPropertyGetter = <T, K extends keyof T>(
//   spyObj: jasmine.SpyObj<T>,
//   propName: K,
// ): jasmine.Spy<() => T[K]> => {
//   return Object.getOwnPropertyDescriptor(spyObj, propName)?.get as jasmine.Spy<() => T[K]>;
// };
