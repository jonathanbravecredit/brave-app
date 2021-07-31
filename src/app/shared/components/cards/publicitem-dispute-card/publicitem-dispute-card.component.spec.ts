import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitemDisputeCardComponent } from './publicitem-dispute-card.component';

describe('PublicitemDisputeCardComponent', () => {
  let component: PublicitemDisputeCardComponent;
  let fixture: ComponentFixture<PublicitemDisputeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicitemDisputeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitemDisputeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
