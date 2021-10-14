import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsDefinitionsComponent } from './dispute-findings-definitions.component';

describe('DisputeFindingsDefinitionsComponent', () => {
  let component: DisputeFindingsDefinitionsComponent;
  let fixture: ComponentFixture<DisputeFindingsDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsDefinitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
