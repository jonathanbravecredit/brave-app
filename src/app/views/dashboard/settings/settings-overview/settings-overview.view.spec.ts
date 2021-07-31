import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOverviewView } from './settings-overview.view';

describe('SettingsOverviewView', () => {
  let component: SettingsOverviewView;
  let fixture: ComponentFixture<SettingsOverviewView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsOverviewView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOverviewView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
