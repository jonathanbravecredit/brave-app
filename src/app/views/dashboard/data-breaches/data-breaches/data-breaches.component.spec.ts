import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { APIService } from '@shared/services/aws/api.service';
import { Observable, of } from 'rxjs';

import { DataBreachesComponent } from './data-breaches.component';

describe('DataBreachesComponent', () => {
  let component: DataBreachesComponent;
  let fixture: ComponentFixture<DataBreachesComponent>;
  let storeMock: any;
  let apiMock: any;
  class RouteMock {
    data = of();
  }

  beforeEach(async () => {
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);
    apiMock = jasmine.createSpyObj('APIService', ['']);
    await TestBed.configureTestingModule({
      declarations: [DataBreachesComponent],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: APIService, useValue: apiMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store.run dispatch on onCardClick', () => {
    storeMock.dispatch.and.returnValue(new Observable<any>());
    component.onCardClick(1);
    expect(storeMock.dispatch).toHaveBeenCalled();
  });
});
