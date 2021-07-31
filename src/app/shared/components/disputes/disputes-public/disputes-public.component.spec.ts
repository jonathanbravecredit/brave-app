import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesPublicComponent } from './disputes-public.component';

describe('DisputesPublicComponent', () => {
  let component: DisputesPublicComponent;
  let fixture: ComponentFixture<DisputesPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
