import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitemsPureView } from './publicitems-pure.view';

describe('PublicitemsPureView', () => {
  let component: PublicitemsPureView;
  let fixture: ComponentFixture<PublicitemsPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicitemsPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitemsPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
