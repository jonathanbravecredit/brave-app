import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "Error" on getClientMessage if !error.message', () => {
    let res = service.getClientMessage(new Error())
    expect(res).toEqual( "Error" )
  })

  it('should return "test" on getClientMessage if error.message', () => {
    let res = service.getClientMessage({message: 'test'} as Error)
    expect(res).toEqual( "test" )
  })

  it('should return "test" on getClientStack', () => {
    let res = service.getClientStack({stack: 'test'} as Error)
    expect(res).toEqual( "test" )
  })

  it('should return "test" on getServerMessage', () => {
    let res = service.getServerMessage({message: 'test'} as HttpErrorResponse)
    expect(res).toEqual( "test" )
  })

  it('should return "stack" on getServerStack', () => {
    let res = service.getServerStack({} as HttpErrorResponse)
    expect(res).toEqual( "stack" )
  })
});
