import { TestBed } from '@angular/core/testing';
import { NavigationService } from '@shared/services/navigation/navigation.service';
import { BackButtonDirective } from './back-button.directive';

describe('BackButtonDirective', () => {
  let navServiceMock: any;

  beforeEach(async () => {
    navServiceMock = jasmine.createSpyObj('NavigationService', ['back']);
    navServiceMock.back.and.returnValue(null);

    await TestBed.configureTestingModule({
      providers: [{ provide: NavigationService, useValue: navServiceMock }],
    });
  });
  it('should create an instance', () => {
    const directive = new BackButtonDirective(navServiceMock);
    expect(directive).toBeTruthy();
  });
});
