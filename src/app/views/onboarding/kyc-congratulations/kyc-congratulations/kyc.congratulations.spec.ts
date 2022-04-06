import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { KycCongratulationsComponent } from '@views/onboarding/kyc-congratulations/kyc-congratulations/kyc-congratulations.component';


describe('KycCongratulationsComponent', () => {
  let component: KycCongratulationsComponent;
  let fixture: ComponentFixture<KycCongratulationsComponent>;
  let routerMock: any

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [KycCongratulationsComponent],
      providers: [
        { provide: Router, useValue: routerMock },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycCongratulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router.navigate when goToNext is called', () => {
    component.goToNext()

    expect(routerMock.navigate).toHaveBeenCalled()
  })
});
