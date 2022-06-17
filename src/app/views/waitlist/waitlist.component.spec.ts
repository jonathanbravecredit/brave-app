import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistComponent } from './waitlist.component';
import { Router } from '@angular/router';

describe('WaitlistComponent', () => {
  let component: WaitlistComponent;
  let fixture: ComponentFixture<WaitlistComponent>;
  let routeMock: any;

  beforeEach(async () => {
    routeMock = jasmine.createSpyObj('Router', ['navigate'])
    await TestBed.configureTestingModule({
      declarations: [ WaitlistComponent ],
      providers: [{provide: Router, useValue: routeMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
