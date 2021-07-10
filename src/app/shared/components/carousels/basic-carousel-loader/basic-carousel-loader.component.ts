import { ChangeDetectorRef } from '@angular/core';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'brave-basic-carousel-loader',
  templateUrl: './basic-carousel-loader.component.html',
})
export class BasicCarouselLoaderComponent implements AfterViewInit, OnDestroy {
  /**
   * @property Component passed from carousel input
   */
  @Input() component: any;
  /**
   * @property Data to map to the component
   */
  @Input() data: Record<string, any> = {};
  /**
   * @property ViewContainerRef to bind component to
   */
  @ViewChild('containerHost', { read: ViewContainerRef }) containerRef!: ViewContainerRef;
  /**
   * @property ComponentRef to control component lifecyle and data binding
   */
  componentRef?: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.loadComponent().bindData(this.componentRef);
  }

  ngOnDestroy() {
    if (this.componentRef) this.componentRef.destroy();
  }

  /**
   * Uses the component factory to generate the component
   * @return BasicCarouselLoaderComponent
   */
  loadComponent(): BasicCarouselLoaderComponent {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const viewContainerRef = this.containerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    return this;
  }

  /**
   * Takes the data and binds it to the component
   * - blindly maps the data in that is provided
   * @param ref
   * @returns void
   */
  bindData(ref: ComponentRef<any> | undefined): void {
    if (!this.data) return;
    if (!ref) return;
    Object.keys(this.data).forEach((key) => {
      ref.instance[`${key}`] = this.data[key];
    });
  }
}

@Component({
  selector: 'brave-dummy',
  template: '<p>{{test}} works</p>',
})
export class DummyComponent {
  @Input() test: string = '';
  constructor() {}
}
