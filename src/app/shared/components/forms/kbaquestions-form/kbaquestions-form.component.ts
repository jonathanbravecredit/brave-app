import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IKbaMultipleChoiceConfig } from '@shared/components/inputs/kba-multiplechoice-input/kba-multiplechoice-input.component';
import { ITransunionKBAQuestion } from '@shared/interfaces/tu-kba-questions.interface';

@Component({
  selector: 'brave-kbaquestions-form',
  templateUrl: './kbaquestions-form.component.html',
  providers: [{ provide: 'name', useValue: 'kba-form' }],
})
export class KbaquestionsFormComponent extends BaseFormComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('sliderWindow') sliderWindow!: ElementRef;

  @Input() kbas: ITransunionKBAQuestion[] = [];
  @Output()
  clickAnswer: EventEmitter<ITransunionKBAQuestion> = new EventEmitter();

  sliderWidth: number = 1200;
  itemWidth: number = 300;
  carouselXAxis: number = 0;
  tracker: any[] = [0];

  public kbaConfig: IKbaMultipleChoiceConfig = {
    size: 'sm',
    type: 'text',
    label: '',
    placeholder: '',
    autocomplete: 'off',
  };

  constructor(fb: FormBuilder, private renderer: Renderer2) {
    super(fb, 'kba-form');
  }

  ngAfterViewInit(): void {
    this.sliderWidth = this.kbas.length ? this.kbas.length * this.itemWidth : this.sliderWidth;
    this.setSliderWindowWidth(this.itemWidth);
    this.setSliderWidth(this.sliderWidth);
  }

  formatChildName(childName: string, digit: number): string {
    return `${childName}-${digit}`;
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
    // pop and push tracker to know which question we are on
    if (value < 0) {
      this.tracker = [...this.tracker, 0];
    }
    if (value > 0) {
      this.tracker = [...this.tracker.slice(1)];
    }

    this.carouselXAxis += value;
    this.renderer.setStyle(this.slider.nativeElement, 'transform', `translateX(${this.carouselXAxis}%)`);
  }
}
