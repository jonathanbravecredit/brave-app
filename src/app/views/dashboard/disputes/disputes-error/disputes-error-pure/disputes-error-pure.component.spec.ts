import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesErrorPureComponent } from './disputes-error-pure.component';

describe('DisputesErrorPureComponent', () => {
  let component: DisputesErrorPureComponent;
  let fixture: ComponentFixture<DisputesErrorPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesErrorPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesErrorPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
