import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IPublicPartition } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { BehaviorSubject } from 'rxjs';

import { PublicitemsView } from './publicitems.view';

describe('PublicitemsView', () => {
  let component: PublicitemsView;
  let fixture: ComponentFixture<PublicitemsView>;
  let creditReportServicesMock: any;

  beforeEach(async () => {
    creditReportServicesMock = jasmine.createSpyObj('CreditreportService', ['']);

    //props
    creditReportServicesMock.tuPublicItem$ = new BehaviorSubject<IPublicPartition>({} as IPublicPartition);
    await TestBed.configureTestingModule({
      declarations: [PublicitemsView],
      imports: [SharedPipesModule],
      providers: [
        { provide: CreditreportService, useValue: creditReportServicesMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitemsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
