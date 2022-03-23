import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesHeaderPublicitemComponent } from './disputes-header-publicitem.component';

describe('DisputesHeaderPublicitemComponent', () => {
  let component: DisputesHeaderPublicitemComponent;
  let fixture: ComponentFixture<DisputesHeaderPublicitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesHeaderPublicitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesHeaderPublicitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
