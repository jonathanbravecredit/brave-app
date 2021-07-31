import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalTermComponent } from './conditional-term.component';

describe('ConditionalTermComponent', () => {
  let component: ConditionalTermComponent;
  let fixture: ComponentFixture<ConditionalTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalTermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
