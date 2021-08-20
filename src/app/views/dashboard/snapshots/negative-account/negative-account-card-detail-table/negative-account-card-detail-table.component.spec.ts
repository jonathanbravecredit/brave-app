import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeAccountCardDetailTableComponent } from './negative-account-card-detail-table.component';

describe('NegativeAccountCardDetailTableComponent', () => {
  let component: NegativeAccountCardDetailTableComponent;
  let fixture: ComponentFixture<NegativeAccountCardDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeAccountCardDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAccountCardDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
