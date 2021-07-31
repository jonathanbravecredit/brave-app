import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesErrorComponent } from './disputes-error.component';

describe('DisputesErrorComponent', () => {
  let component: DisputesErrorComponent;
  let fixture: ComponentFixture<DisputesErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
