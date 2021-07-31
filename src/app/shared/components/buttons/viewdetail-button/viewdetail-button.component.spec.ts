import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailButtonComponent } from './viewdetail-button.component';

describe('ViewdetailButtonComponent', () => {
  let component: ViewdetailButtonComponent;
  let fixture: ComponentFixture<ViewdetailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdetailButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
