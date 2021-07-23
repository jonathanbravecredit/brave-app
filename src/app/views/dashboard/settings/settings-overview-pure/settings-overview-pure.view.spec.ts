import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOverviewPureView } from './settings-overview-pure.view';

describe('SettingsOverviewPureView', () => {
  let component: SettingsOverviewPureView;
  let fixture: ComponentFixture<SettingsOverviewPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsOverviewPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOverviewPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
