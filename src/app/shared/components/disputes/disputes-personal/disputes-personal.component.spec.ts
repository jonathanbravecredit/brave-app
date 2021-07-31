import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesPersonalComponent } from './disputes-personal.component';

describe('DisputesPersonalComponent', () => {
  let component: DisputesPersonalComponent;
  let fixture: ComponentFixture<DisputesPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
