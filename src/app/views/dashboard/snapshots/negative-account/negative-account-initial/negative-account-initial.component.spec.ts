import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeAccountInitialComponent } from './negative-account-initial.component';

describe('NegativeAccountInitialComponent', () => {
  let component: NegativeAccountInitialComponent;
  let fixture: ComponentFixture<NegativeAccountInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeAccountInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAccountInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
