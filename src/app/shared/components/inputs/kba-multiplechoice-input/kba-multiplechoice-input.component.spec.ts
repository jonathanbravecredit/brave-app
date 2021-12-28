import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { KbaMultiplechoiceInputComponent } from './kba-multiplechoice-input.component';

describe('KbaMultiplechoiceInputComponent', () => {
  let component: KbaMultiplechoiceInputComponent;
  let fixture: ComponentFixture<KbaMultiplechoiceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbaMultiplechoiceInputComponent ],
      providers: [FormBuilder],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbaMultiplechoiceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
