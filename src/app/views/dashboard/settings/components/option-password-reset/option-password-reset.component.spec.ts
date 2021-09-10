import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPasswordResetComponent } from './option-password-reset.component';

describe('OptionPasswordResetComponent', () => {
  let component: OptionPasswordResetComponent;
  let fixture: ComponentFixture<OptionPasswordResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionPasswordResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
