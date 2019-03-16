import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import {
  HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

import { UserService } from './user.service';
import {FormsModule} from "@angular/forms";






const mockUsers =  {
  name: 'test',
  surname: 'testLastName',
  phone: +'38000000000',
  mail: 'testmail@mail.com',
  birthDate: new Date().toDateString(),
  addDate: new Date().toDateString(),
  editDate: new Date().toDateString()
};

const changeUsers =  {
  id: '1',
  name: 'test',
  surname: 'testLastName',
  phone: '38000000000',
  mail: 'testmail@mail.com',
  birthDate: new Date().toDateString(),
  addDate: new Date().toDateString(),
  editDate: new Date().toDateString()
};


describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.get(UserService);
    httpClient = TestBed.get(HttpTestingController);

  });



  it('should get users', inject(
    [HttpTestingController, UserService],
    (
      httpMock: HttpTestingController,
      userService: UserService
    ) =>   {

      userService.getUsers().subscribe((users) => {
            expect(users).toEqual(mockUsers);
      });

      const mockReq = httpMock.expectOne(userService.UserURL);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockUsers);

      httpMock.verify();
    }
    )
  );
  it('should create users', inject(
    [HttpTestingController, UserService],
    (
      httpMock: HttpTestingController,
      userService: UserService
    ) =>   {

      userService.createUser( mockUsers).subscribe((users) => {
        expect(users).toEqual(mockUsers);
      });

      const mockReq = httpMock.expectOne(userService.UserURL);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockUsers);

      httpMock.verify();
    }
    )
  );
  it('should edit users', inject(
    [HttpTestingController, UserService],
    (
      httpMock: HttpTestingController,
      userService: UserService
    ) =>   {

      userService.updateUser( changeUsers ).subscribe((users) => {
        expect(users).toEqual(changeUsers);
      });

      const mockReq = httpMock.expectOne(userService.UserURL + '/' + changeUsers.id);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(changeUsers);

      httpMock.verify();
    }
    )
  );
  it('should delete users', inject(
    [HttpTestingController, UserService],
    (
      httpMock: HttpTestingController,
      userService: UserService
    ) =>   {

      userService.deleteUser( changeUsers ).subscribe((users) => {
        expect(users).toEqual(changeUsers);
      });

      const mockReq = httpMock.expectOne(userService.UserURL + '/' + changeUsers.id);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(changeUsers);

      httpMock.verify();
    }
    )
  );
  it('throw error message', inject(
    [HttpTestingController, UserService],
    (
      httpMock: HttpTestingController,
      userService: UserService
    ) => {

      userService.getUsers().subscribe((users) => fail('expected an error'
        ), error => expect(error.console).toContain('console.error')
      );
      expect(service.handleError()).toThrowError( Error);
    }));
  it('should be created UserService', () => {
    expect(service).toBeTruthy();
  });
});





