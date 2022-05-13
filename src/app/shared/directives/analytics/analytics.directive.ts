import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { IAnalyticsConfig } from '@shared/services/analytics/analytics/analytics.interfaces';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';

@Directive({
  selector: '[braveAnalytics]',
})
export class AnalyticsDirective {
  @Input() analyticClickEvents: AnalyticClickEvents = AnalyticClickEvents.UnknownClickEvent;
  @Input() analyticConfig: IAnalyticsConfig = { google: true, mixpanel: true, brave: false };

  constructor(private analytics: AnalyticsService) {}

  @HostListener('click')
  onClick(): void {
    this.analytics.fireClickEvent(this.analyticClickEvents, this.analyticConfig);
  }
}
