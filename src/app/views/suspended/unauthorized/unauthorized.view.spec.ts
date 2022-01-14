import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedView } from './unauthorized.view';

describe('UnauthorizedView', () => {
  let component: UnauthorizedView;
  let fixture: ComponentFixture<UnauthorizedView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
