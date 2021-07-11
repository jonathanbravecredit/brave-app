import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCarouselLoaderComponent } from './basic-carousel-loader.component';

describe('BasicCarouselLoaderComponent', () => {
  let component: BasicCarouselLoaderComponent;
  let fixture: ComponentFixture<BasicCarouselLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCarouselLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCarouselLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
