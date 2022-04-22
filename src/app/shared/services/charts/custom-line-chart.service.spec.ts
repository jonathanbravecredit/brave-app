import { TestBed } from '@angular/core/testing';

import { CustomLineChartService } from './custom-line-chart.service';

describe('CustomLineChartService', () => {
  let service: CustomLineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLineChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run getElementsByClassName on showDots', () => {
    let chart = {chartElement: {nativeElement: {getElementsByClassName: () => { return []}}}}
    let spy = spyOn(chart.chartElement.nativeElement, 'getElementsByClassName')
    spy.and.returnValue([])
    service.showDots(chart)
    expect(spy).toHaveBeenCalled()
  })

  it('should run getElementsByTagName on createMarker', () => {
    let chart = {chartElement: {nativeElement: {getElementsByTagName: () => { return []}}}}
    let spy = spyOn(chart.chartElement.nativeElement, 'getElementsByTagName')
    spy.and.returnValue([])
    service.createMarker(chart, '', 0)
    expect(spy).toHaveBeenCalled()
  })

  it('should run setAttributes on createMarker', () => {
    let chart = {chartElement: {nativeElement: {getElementsByTagName: () => { return []}}}}
    let spy = spyOn(chart.chartElement.nativeElement, 'getElementsByTagName')
    spy.and.returnValue([])
    spyOn(service, 'setAttributes')
    service.createMarker(chart, '', 0)
    expect(service.setAttributes).toHaveBeenCalled()
  })


});
