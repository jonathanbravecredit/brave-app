import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesEmptyErrorTextComponent } from './disputes-empty-error-text.component';

describe('DisputesEmptyErrorTextComponent', () => {
  let component: DisputesEmptyErrorTextComponent;
  let fixture: ComponentFixture<DisputesEmptyErrorTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesEmptyErrorTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesEmptyErrorTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
