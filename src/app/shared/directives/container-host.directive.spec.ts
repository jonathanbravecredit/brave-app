import { ViewContainerRef } from '@angular/core';
import { ContainerHostDirective } from './container-host.directive';

describe('ContainerHostDirective', () => {
  it('should create an instance', () => {
    const directive = new ContainerHostDirective({} as ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
