import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesEmptyTitleComponent } from './disputes-empty-title.component';

describe('DisputesEmptyTitleComponent', () => {
  let component: DisputesEmptyTitleComponent;
  let fixture: ComponentFixture<DisputesEmptyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesEmptyTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesEmptyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
