import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeHeaderPublicitemComponent } from './dispute-header-publicitem.component';

describe('DisputeHeaderPublicitemComponent', () => {
  let component: DisputeHeaderPublicitemComponent;
  let fixture: ComponentFixture<DisputeHeaderPublicitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeHeaderPublicitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeHeaderPublicitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
