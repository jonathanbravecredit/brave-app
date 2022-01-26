import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesEmptyComponent } from './disputes-empty.component';

describe('DisputesEmptyComponent', () => {
  let component: DisputesEmptyComponent;
  let fixture: ComponentFixture<DisputesEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
