import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IBreachCard } from '@bravecredit/brave-sdk';

import { DataBreachListComponent } from './data-breach-list.component';

describe('DataBreachListComponent', () => {
  let component: DataBreachListComponent;
  let fixture: ComponentFixture<DataBreachListComponent>;
  let routerMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [DataBreachListComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run reviewed.push if c.reviewed on init', () => {
    component.cards = [{ reviewed: true } as IBreachCard];
    spyOn(component.reviewed, 'push');
    component.ngOnInit();
    expect(component.reviewed.push).toHaveBeenCalled();
  });

  it('should run unreviewed.push if !c.reviewed on init', () => {
    component.cards = [{ reviewed: false } as IBreachCard];
    spyOn(component.unreviewed, 'push');
    component.ngOnInit();
    expect(component.unreviewed.push).toHaveBeenCalled();
  });

  it('should set isEmpty to true if c.reviewed is never false on init', () => {
    component.cards = [{ reviewed: true } as IBreachCard];
    component.ngOnInit();
    expect(component.isEmpty).toBeTrue();
  });

  it('should set isEmpty to false if c.reviewed is at least once false on init', () => {
    component.cards = [{ reviewed: false } as IBreachCard];
    component.ngOnInit();
    expect(component.isEmpty).toBeFalse();
  });

  it('should run closeClick.emit on hideCard', () => {
    spyOn(component.closeClick, 'emit')
    component.hideCard(0)
    expect(component.closeClick.emit).toHaveBeenCalled()
  })

  it('should set isEmpty to true if unreviewed.length = 1 on hideCard', () => {
    component.unreviewed = [{} as IBreachCard];
    component.hideCard(0);
    expect(component.isEmpty).toBeTrue();
  });

  it('should set isEmpty to true if unreviewed.length = 0 on hideCard', () => {
    component.unreviewed = [];
    component.hideCard(0);
    expect(component.isEmpty).toBeTrue();
  });

  it('should set isEmpty to false if unreviewed.length = 2 on hideCard', () => {
    component.unreviewed = [{} as IBreachCard, {} as IBreachCard];
    component.hideCard(0);
    expect(component.isEmpty).toBeFalse();
  });

  it('shound run navigate on goToReport', () => {
    component.goToReport()
    expect(routerMock.navigate).toHaveBeenCalled()
  })
});
