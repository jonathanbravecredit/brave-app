import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  compRef: ComponentRef<unknown> | undefined;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {}

  appendModalToBody(component: any, componentProps?: object): ComponentRef<unknown> {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component)?.create(this.injector);
    if (componentProps && typeof componentRef?.instance === 'object') {
      Object.assign(componentRef?.instance as object, componentProps);
    }
    this.appRef.attachView(componentRef?.hostView);
    const domElem = (componentRef?.hostView as EmbeddedViewRef<any>)?.rootNodes[0] as HTMLElement;
    if(domElem) document.body.appendChild(domElem);  
    this.compRef = componentRef;
    return componentRef;
  }

  removeModalFromBody(componentRef?: ComponentRef<unknown>): void {
    if (componentRef) {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    } else {
      if (this.compRef) {
        this.appRef.detachView(this.compRef.hostView);
        this.compRef.destroy();
      }
    }
  }
}
