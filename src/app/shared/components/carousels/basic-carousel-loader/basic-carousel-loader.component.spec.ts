import { Component, ComponentFactory } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOMHelper } from '@testing/dom-helper';
import { Helper } from '@testing/test-helper';

import { BasicCarouselLoaderComponent } from './basic-carousel-loader.component';

describe('BasicCarouselLoaderComponent', () => {
  let component: BasicCarouselLoaderComponent;
  let fixture: ComponentFixture<BasicCarouselLoaderComponent>;
  let dh: DOMHelper<BasicCarouselLoaderComponent>;
  let h: Helper<BasicCarouselLoaderComponent>;
  let componentFactoryMock: any;

  beforeEach(async () => {
    componentFactoryMock = jasmine.createSpyObj('ComponentFactoryResolver', ['resolveComponentFactory', 'destroy']);
    componentFactoryMock.destroy.and.returnValue(null);
    componentFactoryMock.resolveComponentFactory.and.returnValue({} as ComponentFactory<unknown>);

    await TestBed.configureTestingModule({
      declarations: [BasicCarouselLoaderComponent],
      providers: [{ provide: ComponentFactory, useValue: componentFactoryMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCarouselLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.component = DummyComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'brave-dummy',
  template: `<p>I exist</p>`,
})
class DummyComponent {
  constructor() {}
}
