import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { createPopper, Placement } from '@popperjs/core';

@Directive({
  selector: '[braveOutlineTooltip]',
})
export class OutlineTooltipDirective {
  @Input() title: string = 'Message title';
  @Input() body: string = 'Message body';
  @Input() position: Placement = 'top';

  private _host: HTMLElement | undefined;
  private _tooltip: HTMLDivElement | undefined;
  private popoverShow: boolean = false;

  get host() {
    return this._host;
  }
  set host(value: HTMLElement | undefined) {
    this._host = value;
  }

  get tooltip() {
    return this._tooltip;
  }
  set tooltip(value: HTMLDivElement | undefined) {
    this._tooltip = value;
  }

  constructor(el: ElementRef) {
    this.host = el.nativeElement;
    this.tooltip = document.createElement('div');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.toggleTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.toggleTooltip();
  }

  ngAfterViewInit() {
    if (this.tooltip) {
      this.tooltip.innerHTML = `
      <div class="bg-white border border-solid border-blueGray-300 m-4 block z-50 font-normal leading-normal max-w-xs text-left no-underline break-words rounded-lg">
        <div>
          <p class="bg-white font-sans font-semibold text-sm text-coolGray-700 p-3 mb-0 border-b border-solid border-blueGray-300 rounded-t-lg">
            ${this.title}
          </p>
          <p class="font-sans text-sm text-coolGray-700 p-3 mb-4">
          ${this.body}
          </p>
        </div>
      </div>
      `;
    }
  }

  toggleTooltip() {
    if (this.popoverShow) {
      this.popoverShow = false;
      this.destroyPopper();
    } else {
      this.popoverShow = true;
      this.createPoppper();
    }
  }
  destroyPopper() {
    this.tooltip?.parentNode?.removeChild(this.tooltip);
  }
  createPoppper() {
    if (this.host && this.tooltip) {
      createPopper(this.host, this.tooltip, {
        placement: this.position,
      });
      this.host.parentNode?.insertBefore(this.tooltip, this.host.nextSibling);
    }
  }
}
