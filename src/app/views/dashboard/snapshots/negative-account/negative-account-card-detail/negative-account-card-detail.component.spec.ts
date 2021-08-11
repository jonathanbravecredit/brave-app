import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeAccountCardDetailComponent } from './negative-account-card-detail.component';

describe('NegativeAccountCardDetailComponent', () => {
  let component: NegativeAccountCardDetailComponent;
  let fixture: ComponentFixture<NegativeAccountCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeAccountCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAccountCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
