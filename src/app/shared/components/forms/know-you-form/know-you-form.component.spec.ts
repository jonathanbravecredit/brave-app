import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYouFormComponent } from './know-you-form.component';

describe('KnowYouFormComponent', () => {
  let component: KnowYouFormComponent;
  let fixture: ComponentFixture<KnowYouFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYouFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYouFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
