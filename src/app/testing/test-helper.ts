export class Helper<T> {
  private component: T;

  constructor(component: T) {
    this.component = component;
  }

  hasProperty(component: T, prop: string): boolean {
    return Object.keys(component).filter((key) => key === prop).length > 0;
  }
}
