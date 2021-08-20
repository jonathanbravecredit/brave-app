import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeAccountCardComponent } from './negative-account-card.component';

describe('NegativeAccountCardComponent', () => {
  let component: NegativeAccountCardComponent;
  let fixture: ComponentFixture<NegativeAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeAccountCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
