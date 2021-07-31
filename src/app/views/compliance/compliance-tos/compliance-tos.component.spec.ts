import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceTosComponent } from './compliance-tos.component';

describe('ComplianceTosComponent', () => {
  let component: ComplianceTosComponent;
  let fixture: ComponentFixture<ComplianceTosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceTosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceTosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
