import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesHeaderPersonalitemComponent } from './disputes-header-personalitem.component';

describe('DisputesHeaderPersonalitemComponent', () => {
  let component: DisputesHeaderPersonalitemComponent;
  let fixture: ComponentFixture<DisputesHeaderPersonalitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesHeaderPersonalitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesHeaderPersonalitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
