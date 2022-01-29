import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesEmptyImageComponent } from './disputes-empty-image.component';

describe('DisputesEmptyImageComponent', () => {
  let component: DisputesEmptyImageComponent;
  let fixture: ComponentFixture<DisputesEmptyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesEmptyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesEmptyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
