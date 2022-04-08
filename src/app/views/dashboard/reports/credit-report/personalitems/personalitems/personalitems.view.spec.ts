import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IBorrower } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { BehaviorSubject } from 'rxjs';

import { PersonalitemsView } from './personalitems.view';


describe('PersonalitemsView', () => {
  let component: PersonalitemsView;
  let fixture: ComponentFixture<PersonalitemsView>;
  let creditReportServicesMock: any;

  beforeEach(async () => {
    // methods
    creditReportServicesMock = jasmine.createSpyObj('CreditreportService', ['']);

    // props
    creditReportServicesMock.tuPersonalItem$ = new BehaviorSubject<IBorrower>({} as IBorrower);
    await TestBed.configureTestingModule({
      declarations: [PersonalitemsView],
      imports: [SharedPipesModule],
      providers: [
        { provide: CreditreportService, useValue: creditReportServicesMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitemsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
