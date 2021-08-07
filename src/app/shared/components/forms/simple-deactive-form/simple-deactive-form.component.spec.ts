import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDeactiveFormComponent } from './simple-deactive-form.component';

describe('SimpleDeactiveFormComponent', () => {
  let component: SimpleDeactiveFormComponent;
  let fixture: ComponentFixture<SimpleDeactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDeactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDeactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
