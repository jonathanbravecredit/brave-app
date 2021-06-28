import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDisputePureComponent } from './new-dispute-pure.component';

describe('NewDisputePureComponent', () => {
  let component: NewDisputePureComponent;
  let fixture: ComponentFixture<NewDisputePureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDisputePureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDisputePureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
