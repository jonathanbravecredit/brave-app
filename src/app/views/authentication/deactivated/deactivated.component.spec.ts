import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { deactivatedContent } from '@views/authentication/deactivated/content';

import { DeactivatedComponent } from './deactivated.component';

describe('DeactivatedComponent', () => {
  let component: DeactivatedComponent;
  let fixture: ComponentFixture<DeactivatedComponent>;
  let routerMock: any;
  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('', ['']);
    await TestBed.configureTestingModule({
      declarations: [DeactivatedComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the proper content', () => {
    expect(component.content).toEqual(deactivatedContent);
  });
});
