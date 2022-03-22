import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesHeaderComponent } from './disputes-header.component';

describe('DisputesHeaderComponent', () => {
  let component: DisputesHeaderComponent;
  let fixture: ComponentFixture<DisputesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
