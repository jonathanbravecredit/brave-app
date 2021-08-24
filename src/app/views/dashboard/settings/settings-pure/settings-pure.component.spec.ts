import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPureComponent } from './settings-pure.component';

describe('SettingsPureComponent', () => {
  let component: SettingsPureComponent;
  let fixture: ComponentFixture<SettingsPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
