import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesEmptyButtonComponent } from './disputes-empty-button.component';

describe('DisputesEmptyButtonComponent', () => {
  let component: DisputesEmptyButtonComponent;
  let fixture: ComponentFixture<DisputesEmptyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesEmptyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesEmptyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
