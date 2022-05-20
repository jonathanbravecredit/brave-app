import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BasicCarouselComponent } from "./basic-carousel.component";
import { Renderer2 } from "@angular/core";
import { BasePaginationComponent } from "@shared/components/paginations/base-pagination/base-pagination.component";
import { Subscription } from 'rxjs';

describe("BasicCarouselComponent", () => {
  let component: BasicCarouselComponent;
  let fixture: ComponentFixture<BasicCarouselComponent>;
  let rendererMock: any;

  beforeEach(async () => {
    rendererMock = jasmine.createSpyObj("Renderer2", ["setStyle"]);
    await TestBed.configureTestingModule({
      declarations: [BasicCarouselComponent],
      providers: [
        {
          provide: Renderer2,
          useValue: rendererMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call setSliderWindowWidth on ngAfterViewInit", () => {
    spyOn(component, "setSliderWindowWidth");
    component.ngAfterViewInit();
    expect(component.setSliderWindowWidth).toHaveBeenCalled();
  });

  it("should call setSliderWidth on ngAfterViewInit", () => {
    spyOn(component, "setSliderWidth");
    component.ngAfterViewInit();
    expect(component.setSliderWidth).toHaveBeenCalled();
  });

  it("should call currentActivePage$.subscribe on ngAfterViewInit if pagination", () => {
    component.pagination = new BasePaginationComponent();
    spyOn(component.pagination.currentActivePage$, "subscribe");
    component.ngAfterViewInit();
    expect(
      component.pagination.currentActivePage$.subscribe
    ).toHaveBeenCalled();
  });

  it("should call handlePageChange on ngAfterViewInit if pagination", () => {
    component.pagination = new BasePaginationComponent();
    spyOn(component, "handlePageChange");
    component.ngAfterViewInit();
    expect(component.handlePageChange).toHaveBeenCalled();
  });

  it("should call paginationSub$.unsubscribe on ngOnDestroy", () => {
    component.paginationSub$ = new Subscription();
    spyOn(component.paginationSub$, "unsubscribe");
    component.ngOnDestroy();
    expect(component.paginationSub$.unsubscribe).toHaveBeenCalled();
  });

  // it("should call rendererMock.setStyle on setSliderWindowWidth", () => {
  //   component.setSliderWindowWidth(1);
  //   expect(rendererMock.setStyle).toHaveBeenCalled();
  // });

  // it("should call rendererMock.setStyle on setSliderWidth", () => {
  //   component.setSliderWidth(1);
  //   expect(rendererMock.setStyle).toHaveBeenCalled();
  // });

  it("should call scroll on goBack", () => {
    spyOn(component, "scroll");
    component.goBack();
    expect(component.scroll).toHaveBeenCalled();
  });

  it("should call scroll on goToNext", () => {
    spyOn(component, "scroll");
    component.goToNext();
    expect(component.scroll).toHaveBeenCalled();
  });

  it("should call navigate on onSwipe", () => {
    component.pagination = new BasePaginationComponent();
    spyOn(component.pagination, "navigate");
    component.onSwipe({type: 'swipe'});
    expect(component.pagination.navigate).toHaveBeenCalled();
  });
});
