import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[containerHost]',
})
export class ContainerHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
