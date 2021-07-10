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
  @Input() component: any;
  @Input() data: Record<string, any> = {};
  @ViewChild('containerHost', { read: ViewContainerRef }) containerRef!: ViewContainerRef;
  componentRef?: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private changeDetector: ChangeDetectorRef) {}

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
    this.bindData(this.componentRef);
    this.changeDetector.detectChanges();
  }

  bindData(ref: ComponentRef<any> | undefined) {
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
