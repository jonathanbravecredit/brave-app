import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { BasePaginationComponent } from '@shared/components/paginations/base-pagination/base-pagination.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-basic-carousel',
  templateUrl: './basic-carousel.component.html',
})
export class BasicCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('sliderWindow') sliderWindow!: ElementRef;
  @ViewChild('pagination') pagination: BasePaginationComponent = new BasePaginationComponent();
  paginationSub$!: Subscription;

  @Input() pages: any[] = [];
  @Input() data: any[] = [];
  @Output() pageClicked: EventEmitter<any> = new EventEmitter();

  sliderWidth: number = 1200;
  itemWidth: number = 300;
  carouselXAxis: number = 0;
  tracker: any[] = [];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setSliderWindowWidth(this.itemWidth);
    this.setSliderWidth(this.sliderWidth);
    this.paginationSub$ = this.pagination.currentActivePage$.subscribe((pageIndex) => {
      this.handlePageChange(pageIndex);
    });
  }

  ngOnDestroy(): void {
    if (this.paginationSub$) this.paginationSub$.unsubscribe();
  }

  /**
   * Sets the slider window width so only a portion is showing
   * @param width
   */
  setSliderWindowWidth(width: number): void {
    // TODO need to set floor to width of containing elements
    this.renderer.setStyle(this.sliderWindow.nativeElement, 'width', `${width}px`);
  }

  /**
   * Sets the slider width to hold all the items
   * @param width
   */
  setSliderWidth(width: number): void {
    // TODO need to set floor to width of containing elements x 3
    this.renderer.setStyle(this.slider.nativeElement, 'width', `${width}px`);
  }

  /**
   * Method to scroll the carousel by a percentage value
   * @param value percentage to move the carousel over by
   * @param min the floor that the scroll should go to (i.e. 0)
   * @param max the max translation the scrill should go to (e.g. -75...if 4 items)
   */
  scroll(value: number, min: number, max: number): void {
    if (this.carouselXAxis + value > min || this.carouselXAxis + value < max) {
      return;
    }
    // pop and push tracker to know which page we are on
    if (value < 0) {
      this.tracker = [...this.tracker, 0];
    }
    if (value > 0) {
      this.tracker = [...this.tracker.slice(1)];
    }

    this.carouselXAxis += value;
    this.renderer.setStyle(this.slider.nativeElement, 'transform', `translateX(${this.carouselXAxis}%)`);
  }

  /**
   * Moves the carousel to the next page
   * - if user clicks point then it jumps to page
   * @param idx
   * @returns
   */
  handlePageChange(idx: number) {
    const diff = idx - this.tracker.length;
    const pages = Math.abs(diff);
    if (diff === 0) return; // same page
    for (let i = 0; i < pages; i++) {
      if (diff > 0) this.goToNext();
      if (diff < 0) this.goBack();
    }
  }

  /**
   * Moves the carousel back one to the previous page
   */
  goBack(): void {
    const scroll = parseFloat(((1 / this.pages.length) * 100).toFixed(2));
    const max = scroll - 100;
    this.scroll(scroll, 0, max);
  }

  /**
   * Moves the carousel over one to the next page
   */
  goToNext(): void {
    const scroll = parseFloat(((-1 / this.pages.length) * 100).toFixed(2));
    const max = scroll * -1 - 100;
    this.scroll(scroll, 0, max);
  }
}
