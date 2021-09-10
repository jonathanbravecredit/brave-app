import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineSsnLastfourFormComponent } from './outline-ssn-lastfour-form.component';

describe('OutlineSsnLastfourFormComponent', () => {
  let component: OutlineSsnLastfourFormComponent;
  let fixture: ComponentFixture<OutlineSsnLastfourFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlineSsnLastfourFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineSsnLastfourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
