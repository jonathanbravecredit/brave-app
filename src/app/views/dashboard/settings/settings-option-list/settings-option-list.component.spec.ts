import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOptionListComponent } from './settings-option-list.component';

describe('SettingsOptionListComponent', () => {
  let component: SettingsOptionListComponent;
  let fixture: ComponentFixture<SettingsOptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsOptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
