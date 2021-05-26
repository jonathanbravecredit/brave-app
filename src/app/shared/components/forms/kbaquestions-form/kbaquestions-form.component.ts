import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'brave-kbaquestions-form',
  templateUrl: './kbaquestions-form.component.html',
})
export class KbaquestionsFormComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('sliderWindow') sliderWindow!: ElementRef;

  sliderWidth: number = 1200;
  itemWidth: number = 300;
  carouselXAxis: number = 0;
  tracker: any[] = [0];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setSliderWindowWidth(this.itemWidth);
    this.setSliderWidth(this.sliderWidth);
  }

  /**
   * Sets the slider window width so only a portion is showing
   * @param width
   */
  setSliderWindowWidth(width: number): void {
    // TODO need to set floor to width of containing elements
    this.renderer.setStyle(
      this.sliderWindow.nativeElement,
      'width',
      `${width}px`
    );
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
   */
  scroll(value: number): void {
    if (this.carouselXAxis + value > 0 || this.carouselXAxis + value < -75) {
      return;
    }
    // pop and push tracker to know which question we are on
    if (value < 0) {
      this.tracker = [...this.tracker, 0];
    }
    if (value > 0) {
      this.tracker = [...this.tracker.slice(1)];
    }

    this.carouselXAxis += value;
    this.renderer.setStyle(
      this.slider.nativeElement,
      'transform',
      `translateX(${this.carouselXAxis}%)`
    );
  }
}
