import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseExceptionComponent } from './base-exception.component';

describe('BaseExceptionComponent', () => {
  let component: BaseExceptionComponent;
  let fixture: ComponentFixture<BaseExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseExceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
