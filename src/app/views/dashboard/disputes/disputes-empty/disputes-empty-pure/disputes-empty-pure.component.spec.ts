import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesEmptyPureComponent } from './disputes-empty-pure.component';

describe('DisputesEmptyPureComponent', () => {
  let component: DisputesEmptyPureComponent;
  let fixture: ComponentFixture<DisputesEmptyPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesEmptyPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesEmptyPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
