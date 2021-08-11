import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseExceptionView } from './base-exception.view';

describe('BaseExceptionView', () => {
  let component: BaseExceptionView;
  let fixture: ComponentFixture<BaseExceptionView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseExceptionView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseExceptionView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
