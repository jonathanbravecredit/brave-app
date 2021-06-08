import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotDisplayCardComponent } from './snapshot-display-card.component';

describe('SnapshotDisplayCardComponent', () => {
  let component: SnapshotDisplayCardComponent;
  let fixture: ComponentFixture<SnapshotDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapshotDisplayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
