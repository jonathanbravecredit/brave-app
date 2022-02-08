import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { of } from 'rxjs';

import { BottomNavbarComponent } from './bottom-navbar.component';

//private state: StateService, private trans: TransunionService, private store: Store

describe('BottomNavbarComponent', () => {
  let component: BottomNavbarComponent;
  let fixture: ComponentFixture<BottomNavbarComponent>;
  let stateMock: any;
  let transMock: any;
  let storeMock: any;

  beforeEach(async () => {
    stateMock = jasmine.createSpyObj('StateService', [''], { state$: of() });
    transMock = jasmine.createSpyObj('TransunionService', ['']);
    storeMock = jasmine.createSpyObj('Store', ['']);

    await TestBed.configureTestingModule({
      declarations: [BottomNavbarComponent],
      providers: [
        { provide: StateService, useValue: stateMock },
        { provide: TransunionService, useValue: transMock },
        { provide: Store, useValue: storeMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
