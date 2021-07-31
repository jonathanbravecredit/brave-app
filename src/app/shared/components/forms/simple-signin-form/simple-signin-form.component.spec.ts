import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSigninFormComponent } from './simple-signin-form.component';

describe('SimpleSigninFormComponent', () => {
  let component: SimpleSigninFormComponent;
  let fixture: ComponentFixture<SimpleSigninFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSigninFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
