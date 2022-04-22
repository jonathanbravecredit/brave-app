import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ICredentials } from "@aws-amplify/core";
import { Auth } from "aws-amplify";
import { Subject } from "rxjs";
import { GuestService } from "./guest.service";
import { IamService } from "./iam.service";

describe('GuestService', () => {
    let service: GuestService;

    beforeEach(() => {
      TestBed.configureTestingModule({
      });
      service = TestBed.inject(GuestService);
    });
  
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should run refreshGuestState on initGuestState', () => {
        spyOn(service, 'refreshGuestState')
        service.initGuestState()
        expect(service.refreshGuestState).toHaveBeenCalled();
    });

    it('should run Auth.currentCredentials on refreshGuestState', () => {
        spyOn(Auth, 'currentCredentials')
        service.refreshGuestState()
        expect(Auth.currentCredentials).toHaveBeenCalled();
    });

    it('should run guestState.next on refreshGuestState', fakeAsync(() => {
        let spy = spyOn(Auth, 'currentCredentials')
        spy.and.returnValue(Promise.resolve({} as ICredentials))
        service.guestState = new Subject<ICredentials | any>()
        spyOn(service.guestState, 'next')
        service.refreshGuestState()
        tick()
        expect(service.guestState.next).toHaveBeenCalled();
    }));
})