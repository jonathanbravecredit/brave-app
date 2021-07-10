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
export class BasicCarouselLoaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() component: any;
  componentRef?: ComponentRef<any>;
  @ViewChild('containerHost', { read: ViewContainerRef }) containerRef!: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.loadComponent();
  }

  ngOnDestroy() {
    if (this.componentRef) this.componentRef.destroy();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const viewContainerRef = this.containerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
}

@Component({
  selector: 'brave-dummy',
  template: '<p>I work</p>',
})
export class DummyComponent {
  constructor() {}
}
