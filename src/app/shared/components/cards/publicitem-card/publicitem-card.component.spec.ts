import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitemCardComponent } from './publicitem-card.component';

describe('PublicitemCardComponent', () => {
  let component: PublicitemCardComponent;
  let fixture: ComponentFixture<PublicitemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicitemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
