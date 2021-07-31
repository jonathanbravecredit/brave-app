import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBackButtonComponent } from './simple-back-button.component';

describe('SimpleBackButtonComponent', () => {
  let component: SimpleBackButtonComponent;
  let fixture: ComponentFixture<SimpleBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
