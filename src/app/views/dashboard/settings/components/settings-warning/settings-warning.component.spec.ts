import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsWarningComponent } from './settings-warning.component';

describe('SettingsWarningComponent', () => {
  let component: SettingsWarningComponent;
  let fixture: ComponentFixture<SettingsWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
