import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injector, ViewRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReferralBannerComponent } from '@views/dashboard/referral-dashboard/components/referral-banner/referral-banner.component';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  let componentFactoryResolverMock: any
  let appRefMock: any
  let injectorMock: any

  class CompRef {
    instance: string = 'object'
    hostView: ViewRef = {rootNodes: [{} as Node]} as EmbeddedViewRef<any>

    destroy() {}
  }
  class CompFact {
    create () {
      return new CompRef()
    }
  }

  beforeEach(() => {
    componentFactoryResolverMock = jasmine.createSpyObj('ComponentFactoryResolver', ['resolveComponentFactory'])
    appRefMock = jasmine.createSpyObj('ApplicationRef', ['attachView', 'detachView'])
    injectorMock = jasmine.createSpyObj('Injector', [''])
    TestBed.configureTestingModule({
      providers: [
        {provide: ComponentFactoryResolver, useValue: componentFactoryResolverMock},
        {provide: ApplicationRef, useValue: appRefMock},
        {provide: Injector, useValue: injectorMock}
      ]
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run appRed.attachView on appendModalToBody', () => {
    service.appendModalToBody('', {})
    expect(appRefMock.attachView).toHaveBeenCalled()
  })

  it('should run appRed.attachView on appendModalToBody', () => {
    componentFactoryResolverMock.resolveComponentFactory.and.returnValue(new CompFact())
    let spy = spyOn(document.body, 'appendChild')
    spy.and.returnValue({} as HTMLElement)
    service.appendModalToBody({}, {})
    expect(appRefMock.attachView).toHaveBeenCalled()
  })

  it('should run appRed.detachView on removeModalFromBody', () => {
    service.removeModalFromBody(new CompRef() as ComponentRef<unknown>)
    expect(appRefMock.detachView).toHaveBeenCalled()
  })

  it('should run componentRef.destroy on removeModalFromBody', () => {
    let comp = new CompRef() as ComponentRef<unknown>
    spyOn(comp, 'destroy')
    service.removeModalFromBody(comp)
    expect(comp.destroy).toHaveBeenCalled()
  })

  it('should run appRef.detachView on removeModalFromBody if !componentRef and this.compRef', () => {
    service.compRef = new CompRef() as ComponentRef<unknown>
    service.removeModalFromBody()
    expect(appRefMock.detachView).toHaveBeenCalled()
  })

  it('should run compRef.destroy on removeModalFromBody if !componentRef and this.compRef', () => {
    let comp = new CompRef() as ComponentRef<unknown>
    service.compRef = comp
    spyOn(comp, 'destroy')
    service.removeModalFromBody()
    expect(comp.destroy).toHaveBeenCalled()
  })
});
