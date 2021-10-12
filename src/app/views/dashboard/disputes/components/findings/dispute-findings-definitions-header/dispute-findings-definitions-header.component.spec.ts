import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsDefinitionsHeaderComponent } from './dispute-findings-definitions-header.component';

describe('DisputeFindingsDefinitionsHeaderComponent', () => {
  let component: DisputeFindingsDefinitionsHeaderComponent;
  let fixture: ComponentFixture<DisputeFindingsDefinitionsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsDefinitionsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsDefinitionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
