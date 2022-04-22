import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ICredentials } from "@aws-amplify/core";
import { Auth } from "aws-amplify";
import { AwsClient } from "aws4fetch";
import { IamService } from "./iam.service";

describe('IamService', () => {
    let service: IamService;
    let aws: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
      });
      service = TestBed.inject(IamService);
      aws = new AwsClient({
        accessKeyId: '',
        secretAccessKey: '',
        sessionToken: '',
        service: 'execute-api',
        region: 'us-east-2',
      })
    });
  
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // it('should run Auth.currentCredentials on signRequest', () => {
    //     jasmine.createSpyObj('AwsClient', ['sign'])
    //     let spy = spyOn(Auth, 'currentCredentials')
    //     spy.and.returnValue(Promise.resolve({} as ICredentials))
    //     service.signRequest('', '', {})
    //     expect(Auth.currentCredentials).toHaveBeenCalled();
    // });

    // it('should run Auth.essentialCredentials on signRequest', fakeAsync(() => {
    //     jasmine.createSpyObj('AwsClient', ['sign'])
    //     let spy = spyOn(Auth, 'currentCredentials')
    //     spy.and.returnValue(Promise.resolve({} as ICredentials))
    //     let spy2 = spyOn(Auth, 'essentialCredentials')
    //     spy2.and.returnValue({accessKeyId: 'test',secretAccessKey: 'test',sessionToken: 'test', } as ICredentials)
    //     service.signRequest('', '', {}).then(() => {
    //         tick()
    //         expect(Auth.essentialCredentials).toHaveBeenCalled();
    //     })
    // }));

    // it('should run aws.sign on signRequest', fakeAsync(() => {
    //     let awsClientSpy = jasmine.createSpyObj('AwsClient', ['sign'])
    //     let spy = spyOn(Auth, 'currentCredentials')
    //     spy.and.returnValue(Promise.resolve({} as ICredentials))
    //     let spy2 = spyOn(Auth, 'essentialCredentials')
    //     spy2.and.returnValue({accessKeyId: 'test',secretAccessKey: 'test',sessionToken: 'test', } as ICredentials)
    //     service.signRequest('', '', {}).then(() => {
    //         tick()
    //         expect(awsClientSpy.sign).toHaveBeenCalled();
    //     })
    // }));
})