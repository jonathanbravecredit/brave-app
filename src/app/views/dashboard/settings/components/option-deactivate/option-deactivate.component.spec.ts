import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDeactivateComponent } from './option-deactivate.component';

describe('OptionDeactivateComponent', () => {
  let component: OptionDeactivateComponent;
  let fixture: ComponentFixture<OptionDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showWarning to false on onWarningCloseClick', () => {
    component.showWarning = true
    component.onWarningCloseClick()
    expect(component.showWarning).toBeFalse()
  })
});
