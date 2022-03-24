import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeAccountInitialPureComponent } from './negative-account-initial-pure.component';

describe('NegativeAccountInitialPureComponent', () => {
  let component: NegativeAccountInitialPureComponent;
  let fixture: ComponentFixture<NegativeAccountInitialPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeAccountInitialPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAccountInitialPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
