import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOptionComponent } from './settings-option.component';

describe('SettingsOptionComponent', () => {
  let component: SettingsOptionComponent;
  let fixture: ComponentFixture<SettingsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
