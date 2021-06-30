import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_PAGINATION_DEFAULT_NAVIGATION_CONFIGURATION as defaultConfig } from './constants';
import { IBasePaginationNavigationConfiguration } from './interfaces';

@Component({
  selector: 'brave-base-pagination',
  templateUrl: './base-pagination.component.html'
})
/**
 * **TODO**:
 * 1) Support trucate in pages.
 * 2) Support start and end of truncate in pages.
 */
export class BasePaginationComponent implements OnInit, OnChanges {
  /**
   * Number of pages to be displayed as pagination items.
   * @example
   *
   * numberOfPages: 4
   */
  @Input() numberOfPages = 4;
  /**
   * Value used to give specific style to the pagination items.
   * @example
   *
   * color: 'point';
   */
  @Input() paginationStyle: 'default' | 'point'  = 'default';
  /**
   * Value used to give color to the icons and items inside of the pagination
   * @defaultValue 'default'
   * @example
   *
   * color: 'primary'
   */
  @Input() color: 'default' | 'primary' = 'default';
  /**
   * Custom configuration used for the custom styling of the pagination base component.
   *
   * This configuration uses **Material Icons** HTML syntax to render the desired icon style.
   * @example
   *
   * customConfiguration: IBasePaginationNavigationConfiguration = {
   *   prevIcon: 'add',
   *   nextIcon: 'remove',
   *   hideNavAtBase: true,
   *   hideNavAtLimit: true,
   *   truncate: false
   * }
   */
  @Input() customConfiguration: Partial<IBasePaginationNavigationConfiguration> | undefined = undefined;
  /**
   * Custom configuration used for the internal styling of the pagination base component.
   *
   * This configuration uses **Material Icons** HTML syntax to render the desired icon style.
   * @example
   *
   * customConfiguration: IBasePaginationNavigationConfiguration = {
   *   prevIcon: 'add',
   *   nextIcon: 'remove',
   *   hideNavAtBase: true,
   *   hideNavAtLimit: true,
   *   truncate: false
   * }
   */
  baseConfiguration: IBasePaginationNavigationConfiguration = defaultConfig;

  private currentActivePageModifier$: BehaviorSubject<number> = new BehaviorSubject(1);
  /**
   * An Observable that holds the current active index.
   *
   *
   * @example
   * currentActivePage$.subscribe((val) => {
   *   console.log(val) // 2;
   * });
   *
   */
  public currentActivePage$: Observable<number> = this.currentActivePageModifier$.asObservable();

  localPages: any[] = [];
  localCurrentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.numberOfPages; i++) {
      this.localPages.push(i + 1);
    }
  }

  ngOnChanges(): void {
    if (this.customConfiguration !== undefined) {
      this.baseConfiguration = { ...this.customConfiguration };
      console.log(this.baseConfiguration);
    }
  }

  setActivePage(pageIndex: number): void {
    this.currentActivePageModifier$.next(pageIndex);
    this.localCurrentIndex = pageIndex;
  }

  navigate(direction: 'back' | 'forward'): void {
    const isLimitReached = this.isLimitReached(direction);
    if (!isLimitReached) {
      let currentIndex = this.localCurrentIndex;
      const isBack = direction === 'back';
      isBack ? currentIndex-- : currentIndex++;
      this.setActivePage(currentIndex);
    }
  }

  private isLimitReached(direction: 'back' | 'forward'): boolean {
    const cIndex = this.localCurrentIndex;
    const cMaxLimit = this.localPages.length - 1;
    return direction === 'back' ? cIndex === 0 : cIndex === cMaxLimit;
  }
}
