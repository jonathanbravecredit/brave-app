import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { IamService } from "../auth/iam.service";
import { NeverbounceService } from "./neverbounce.service";


//private http: HttpClient, private auth: AuthService

describe("NeverbounceService", () => {
  let service: NeverbounceService;
  let iamMock: any;

  beforeEach(() => {
    iamMock = jasmine.createSpyObj("IamService", ["signRequest"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: IamService, useValue: iamMock },
      ],
    });
    service = TestBed.inject(NeverbounceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call iam.signRequest on validateEmail", () => {
    service.validateEmail('test@test.test')
    expect(iamMock.signRequest).toHaveBeenCalled();
  });

  it("should call fetch on validateEmail", fakeAsync(() => {
    spyOn(window, 'fetch')
    service.validateEmail('test@test.test')
    tick()
    expect(fetch).toHaveBeenCalled();
  }));
});
