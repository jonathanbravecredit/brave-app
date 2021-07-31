import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbaquestionsFormComponent } from './kbaquestions-form.component';

describe('KbaquestionsFormComponent', () => {
  let component: KbaquestionsFormComponent;
  let fixture: ComponentFixture<KbaquestionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbaquestionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbaquestionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
