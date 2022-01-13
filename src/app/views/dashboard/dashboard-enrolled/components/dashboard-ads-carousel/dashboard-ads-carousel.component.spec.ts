import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IAdData } from '@shared/interfaces/ads.interface';

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

  it('should create the same amount of pages as ad objects are passed in', () => {
    component.adsData = [{} as IAdData, {} as IAdData, {} as IAdData, {} as IAdData]

    component.ngOnInit()

    expect(component.pages.length).toEqual(4)
  })
});
