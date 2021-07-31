import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesSuccessComponent } from './disputes-success.component';

describe('DisputesSuccessComponent', () => {
  let component: DisputesSuccessComponent;
  let fixture: ComponentFixture<DisputesSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
