import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeHeaderPersonalitemComponent } from './dispute-header-personalitem.component';

describe('DisputeHeaderPersonalitemComponent', () => {
  let component: DisputeHeaderPersonalitemComponent;
  let fixture: ComponentFixture<DisputeHeaderPersonalitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeHeaderPersonalitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeHeaderPersonalitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
