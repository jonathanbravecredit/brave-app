import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsHeaderComponent } from './dispute-findings-header.component';

describe('DisputeFindingsHeaderComponent', () => {
  let component: DisputeFindingsHeaderComponent;
  let fixture: ComponentFixture<DisputeFindingsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
