import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseExceptionPureView } from './base-exception-pure.view';

describe('BaseExceptionPureView', () => {
  let component: BaseExceptionPureView;
  let fixture: ComponentFixture<BaseExceptionPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseExceptionPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseExceptionPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
