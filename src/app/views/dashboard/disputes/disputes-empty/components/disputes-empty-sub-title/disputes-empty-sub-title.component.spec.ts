import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesEmptySubTitleComponent } from './disputes-empty-sub-title.component';

describe('DisputesEmptySubTitleComponent', () => {
  let component: DisputesEmptySubTitleComponent;
  let fixture: ComponentFixture<DisputesEmptySubTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesEmptySubTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesEmptySubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
