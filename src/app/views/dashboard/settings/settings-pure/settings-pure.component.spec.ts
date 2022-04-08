import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilledClosingAlertComponent } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';

import { SettingsPureComponent } from './settings-pure.component';

describe('SettingsPureComponent', () => {
  let component: SettingsPureComponent;
  let fixture: ComponentFixture<SettingsPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsPureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showAlert to try if alert when showAlert is called', () => {
    component.alert = { showAlert: false } as FilledClosingAlertComponent;
    component.showAlert();
    expect(component.alert.showAlert).toBeTrue();
  });
});
