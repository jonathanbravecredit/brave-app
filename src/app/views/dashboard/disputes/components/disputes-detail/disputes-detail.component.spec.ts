import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesDetailComponent } from './disputes-detail.component';

describe('DisputesDetailComponent', () => {
  let component: DisputesDetailComponent;
  let fixture: ComponentFixture<DisputesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
