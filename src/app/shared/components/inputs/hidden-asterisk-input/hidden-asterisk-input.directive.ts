import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[braveHiddenAsteriskInput]',
})
export class HiddenAsteriskInputDirective {
  private _host: HTMLInputElement | undefined;
  private _mask: HTMLDivElement | undefined;

  get host() {
    return this._host;
  }
  set host(value: HTMLInputElement | undefined) {
    this._host = value;
  }

  get mask() {
    return this._mask;
  }
  set mask(value: HTMLDivElement | undefined) {
    this._mask = value;
  }

  constructor(el: ElementRef, private renderer: Renderer2) {
    this.host = el.nativeElement;
  }

  @HostListener('focus') onFocus() {
    if (this.mask && this.host) {
      this.removeMaskElement(this.host);
    }
  }

  @HostListener('click') onClick() {
    if (this.mask && this.host) {
      this.removeMaskElement(this.host);
    }
  }

  @HostListener('blur') onBlur() {
    if (this.host?.value?.length) this.appendMaskElement(this.host);
  }

  ngAfterViewInit() {
    /** create the wrapping div and assign relative */
    const div = this.renderer.createElement('div');
    this.renderer.setStyle(div, 'position', 'relative');
    /** wrap the host in the div */
    const el = this.host;
    const parent = el?.parentNode;
    this.renderer.insertBefore(parent, div, el);
    /** insert the element into the div */
    this.renderer.appendChild(div, el);
  }

  //TODO refactor to iterate over styles and classes to add
  /**
   * Appends the new mask element (asterisk) to the input to hide it
   * @param el
   */
  appendMaskElement(el: HTMLInputElement) {
    /** set the input value color to transparent */
    this.renderer.setStyle(el, 'opacity', '0');
    /** create the elements to attach */
    let div = this.renderer.createElement('div');
    let div2 = this.renderer.createElement('div');
    let p = this.renderer.createElement('p');
    let asterisk = this.renderer.createText('*');
    /** set the style/classes of the elements */
    this.renderer.setStyle(div, 'position', 'absolute');
    this.renderer.setStyle(div, 'top', '0');
    this.renderer.setStyle(div, 'left', '0');
    this.renderer.setStyle(div, 'width', '100%');
    this.renderer.setStyle(div, 'height', '100%');
    this.renderer.setStyle(div, 'z-index', '2');
    this.renderer.addClass(div, 'flex');
    this.renderer.addClass(div, 'justify-center');
    this.renderer.addClass(div, 'items-center');
    /* use tailwind utility classes */
    this.renderer.addClass(div2, 'flex');
    this.renderer.addClass(div2, 'justify-center');
    // this.renderer.addClass(div2, 'bg-coolGray-100');
    this.renderer.addClass(div2, 'text-blueGray-600');
    this.renderer.addClass(div2, 'text-3xl');
    this.renderer.setStyle(div2, 'height', '100%');
    /** attach the new elements to the DOM */
    this.renderer.appendChild(p, asterisk);
    this.renderer.appendChild(div2, p);
    this.renderer.appendChild(div, div2);
    el.insertAdjacentElement('afterend', div);
    /** keep track of the mask element */
    this.mask = div;
    this.mask?.addEventListener('click', (event) => {
      this.removeMaskElement(el);
      el.focus();
    });
  }

  removeMaskElement(el: HTMLInputElement) {
    /** remove and rest the input element when the mask is clicked */
    let parent: HTMLElement = this.renderer.parentNode(el);
    let child: HTMLElement | null = parent.querySelector('div');
    this.renderer.removeChild(parent, child);
    this.renderer.setStyle(el, 'opacity', '1');
    this.mask = undefined;
  }
}
