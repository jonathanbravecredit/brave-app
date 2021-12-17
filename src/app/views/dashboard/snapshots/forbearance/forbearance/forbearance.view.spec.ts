import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { BehaviorSubject } from 'rxjs';

import { ForbearanceView } from './forbearance.view';

class CreditReportServiceMock {
  tuReport$ = new BehaviorSubject<IMergeReport>({} as IMergeReport);
  setTradeline = (arg0: ITradeLinePartition) => {
    arg0;
  };
}

class RouteMock {}

describe('ForbearanceView', () => {
  let component: ForbearanceView;
  let fixture: ComponentFixture<ForbearanceView>;
  let routerMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    routerMock.navigate.and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [ForbearanceView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: CreditreportService, useClass: CreditReportServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
