import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdsCarouselComponent } from './dashboard-ads-carousel.component';

describe('DashboardAdsCarouselComponent', () => {
  let component: DashboardAdsCarouselComponent;
  let fixture: ComponentFixture<DashboardAdsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
