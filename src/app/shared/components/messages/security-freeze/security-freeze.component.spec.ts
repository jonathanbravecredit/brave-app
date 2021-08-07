import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFreezeComponent } from './security-freeze.component';

describe('SecurityFreezeComponent', () => {
  let component: SecurityFreezeComponent;
  let fixture: ComponentFixture<SecurityFreezeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityFreezeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityFreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
