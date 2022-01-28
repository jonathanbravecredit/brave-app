import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DisputesEmptyButtonComponent } from './disputes-empty-button.component';

describe('DisputesEmptyButtonComponent', () => {
  let component: DisputesEmptyButtonComponent;
  let fixture: ComponentFixture<DisputesEmptyButtonComponent>;
  let routerMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [DisputesEmptyButtonComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesEmptyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run router navigate when buttonClick', () => {
    component.buttonClick();

    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
