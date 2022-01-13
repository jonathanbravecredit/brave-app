import { ChangeDetectorRef } from '@angular/core';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  Output,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
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
   * @property Detect when a carousel page is clicked...can be bubble of from smaller items in component
   */
  @Output() pageClicked: EventEmitter<any> = new EventEmitter();
  /**
   * @property ViewContainerRef to bind component to
   */
  @ViewChild('containerHost', { read: ViewContainerRef }) containerRef!: ViewContainerRef;
  /**
   * @property ComponentRef to control component lifecyle and data binding
   */
  componentRef?: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    // added Promise to resolve change after check error
    Promise.resolve(null).then(() => this.loadComponent().bindData(this.componentRef).bindEvents(this.componentRef));
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
  bindData(ref: ComponentRef<any> | undefined): BasicCarouselLoaderComponent {
    if (!this.data) return this;
    if (!ref) return this;
    Object.keys(this.data).forEach((key) => {
      ref.instance[`${key}`] = this.data[key];
    });
    return this;
  }

  /**
   * Binds a basic event to the component
   * -
   * @param ref
   * @returns
   */
  bindEvents(ref: ComponentRef<any> | undefined): void {
    if (!ref) return;
    ref.instance['pageClicked'] = new EventEmitter<any>();
  }
}
