import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FilledSpinningButtonComponent } from "./filled-spinning-button.component";
import { InterstitialService } from "../../../services/interstitial/interstitial.service";
import { Subscription, BehaviorSubject } from 'rxjs';

describe("FilledSpinningButtonComponent", () => {
  let component: FilledSpinningButtonComponent;
  let fixture: ComponentFixture<FilledSpinningButtonComponent>;
  let buttonServiceMock: any;

  beforeEach(async () => {
    buttonServiceMock = jasmine.createSpyObj("InterstitialService", [""], {
      fetching$: new BehaviorSubject<boolean>(false),
    });
    await TestBed.configureTestingModule({
      declarations: [FilledSpinningButtonComponent],
      providers: [
        {
          provide: InterstitialService,
          useValue: buttonServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledSpinningButtonComponent);
    component = fixture.componentInstance;
    spyOn(component, "refreshClass");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should run refreshClass on changes", () => {
    component.ngOnChanges();
    expect(component.refreshClass).toHaveBeenCalled();
  });

  it("should run refreshClass on ngOnInit", () => {
    component.ngOnInit();
    expect(component.refreshClass).toHaveBeenCalled();
  });

  it("should run spinning$.unsubscribe on ngOnDestroy", () => {
    component.spinning$ = new Subscription();
    spyOn(component.spinning$, "unsubscribe");
    component.ngOnDestroy();
    expect(component.spinning$.unsubscribe).toHaveBeenCalled();
  });

  it("should run fetching$.next on toggleSpinner", () => {
    spyOn(buttonServiceMock.fetching$, "next");
    component.toggleSpinner();
    expect(buttonServiceMock.fetching$.next).toHaveBeenCalled();
  });
});
