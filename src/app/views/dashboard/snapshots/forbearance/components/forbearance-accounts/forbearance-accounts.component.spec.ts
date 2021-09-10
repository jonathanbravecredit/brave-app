import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbearanceAccountsComponent } from './forbearance-accounts.component';

describe('ForbearanceAccountsComponent', () => {
  let component: ForbearanceAccountsComponent;
  let fixture: ComponentFixture<ForbearanceAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbearanceAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
