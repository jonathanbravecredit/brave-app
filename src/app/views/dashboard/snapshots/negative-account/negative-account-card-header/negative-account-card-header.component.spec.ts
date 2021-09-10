import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeAccountCardHeaderComponent } from './negative-account-card-header.component';

describe('NegativeAccountCardHeaderComponent', () => {
  let component: NegativeAccountCardHeaderComponent;
  let fixture: ComponentFixture<NegativeAccountCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeAccountCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAccountCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
