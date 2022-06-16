import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistFormComponent } from './waitlist-form.component';
import { FormBuilder } from '@angular/forms';
import { WaitlistService } from '../waitlist.service';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject } from 'rxjs';

//fb: FormBuilder, public WaitlistService: WaitlistService

describe('WaitlistFormComponent', () => {
  let component: WaitlistFormComponent;
  let fixture: ComponentFixture<WaitlistFormComponent>;
  let FormBuilderMock: any
  let WaitlistServiceMock: any

  beforeEach(async () => {
    FormBuilderMock = jasmine.createSpyObj('FormBuilder', ['group'])
    WaitlistServiceMock = jasmine.createSpyObj('WaitlistService', [''], {
      emailError: new BehaviorSubject<boolean>(false),
      alreadyOnWaitlist: new BehaviorSubject<boolean>(false),
    })
    await TestBed.configureTestingModule({
      declarations: [ WaitlistFormComponent ],
      providers: [
        {provide: FormBuilder, useValue: FormBuilderMock},
        {provide: WaitlistService, useValue: WaitlistServiceMock},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
