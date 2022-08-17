import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { UserLoginService } from './userLogin.service';

describe('UserLoginService', () => {
  let userLoginService: UserLoginService;
  let http: HttpClient;
  beforeEach(function () {
    userLoginService = new UserLoginService(http);
  });
  //getCategories
  it('should return category', () => {
    let response: any = [
      {
        categoryId: 523,
        categoryName: 'Heart',
        tasks: [],
        user_fk: 1,
      },
    ];
    let value: any;
    spyOn(userLoginService, 'getCategories').and.returnValue(of(response));
    userLoginService.getCategories().subscribe((res) => {
      value = res;
      console.log(res);
    });
    expect(value).toBe(response);
  });

  it('should return profile', () => {
    let mockResponse: any = {
      id: 1,

      userName: 'tom stills',

      password: 'tom@123',

      email: 'tom@gmail.com',

      phone: '8932092745',

      mobile: '9987890639',

      address: 'kanpur, up, india',

      category: [
        {
          categoryName: 'Heart',

          user_fk: 1,

          tasks: [],

          categoryId: 523,
        },
      ],
    };

    let response: any;

    spyOn(userLoginService, 'getProfile').and.returnValue(of(mockResponse));

    userLoginService.getProfile().subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should sign in', () => {
    let mockResponse: any = {
      id: 533,
      userName: 'tom',
      password: '$2a$10$7XaN3gRxOpugDWL5EcRm5OE73Eml2jCNCVR9iKU8Xip8Inh7oxdXK',
      email: 'tom1@gmail.com',
      phone: null,
      mobile: null,
      address: null,
      category: [],
    };

    let response: any;

    spyOn(userLoginService, 'checkLoginDetails').and.returnValue(
      of(mockResponse)
    );

    userLoginService.checkLoginDetails(mockResponse).subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should sign up', () => {
    let mockResponse: any = {
      id: 533,
      userName: 'tom',
      password: '$2a$10$7XaN3gRxOpugDWL5EcRm5OE73Eml2jCNCVR9iKU8Xip8Inh7oxdXK',
      email: 'tom1@gmail.com',
    };

    let response: any;

    spyOn(userLoginService, 'addUserLoginDetails').and.returnValue(
      of(mockResponse)
    );

    userLoginService.addUserLoginDetails(mockResponse).subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should add task', () => {
    let categoryId = 2;
    let mockResponse: any = {
      categoryName: 'Heart',
      taskName: 'BP check up',
      time: '20:00:00',
      date: '2022-08-17',
    };

    let response: any;

    spyOn(userLoginService, 'addTaskDetails').and.returnValue(of(mockResponse));

    userLoginService
      .addTaskDetails(mockResponse, categoryId)
      .subscribe((res) => {
        response = res;
        console.log(response);
      });

    expect(response).toBe(mockResponse);
  });

  it('should add category', () => {
    let mockResponse: any = {
      categoryName: 'Heart',
    };

    let response: any;

    spyOn(userLoginService, 'addCategoryDetails').and.returnValue(
      of(mockResponse)
    );

    userLoginService.addCategoryDetails(mockResponse).subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should get Category ID', () => {
    let mockResponse: any = {
      categoryName: 'Heart',
    };

    let response: any;

    spyOn(userLoginService, 'getCategoryID').and.returnValue(of(mockResponse));

    userLoginService.getCategoryID(mockResponse).subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should get Category ID and task details', () => {
    let categoryId = 2;
    let mockResponse: any = {
      categoryName: 'Heart',
      taskName: 'BP check up',
      time: '20:00:00',
      date: '2022-08-17',
    };

    let response: any;

    spyOn(userLoginService, 'getCategoryIDs').and.returnValue(of(mockResponse));

    userLoginService
      .getCategoryIDs(mockResponse, categoryId)
      .subscribe((res) => {
        response = res;
        console.log(response);
      });

    expect(response).toBe(mockResponse);
  });

  it('should delete category', () => {
    let categoryId = 2;
    let mockResponse: any = {
      categoryName: 'Heart',
      taskName: 'BP check up',
      time: '20:00:00',
      date: '2022-08-17',
    };

    let response: any;

    spyOn(userLoginService, 'deleteCategory').and.returnValue(of(mockResponse));

    userLoginService.deleteCategory(categoryId).subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should add profile', () => {
    let mockResponse: any = {
      phone: '9775656455',
      mobile: '9775656455',
      address: 'Kanpur',
    };

    let response: any;

    spyOn(userLoginService, 'updateProfile').and.returnValue(of(mockResponse));

    userLoginService.updateProfile(mockResponse).subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should edit profile', () => {
    let mockResponse: any = {
      phone: '9775656455',
      mobile: '9775656455',
      address: 'Kanpur',
    };

    let response: any;

    spyOn(userLoginService, 'editProfile').and.returnValue(of(mockResponse));

    userLoginService.editProfile(mockResponse).subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should get today task details', () => {
    let mockResponse: any = {
      categoryName: 'Heart',
      taskName: 'BP check up',
      time: '20:00:00',
      date: '2022-08-17',
    };

    let response: any;

    spyOn(userLoginService, 'getTodayList').and.returnValue(of(mockResponse));

    userLoginService.getTodayList().subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });

  it('should get today task name details', () => {
    let mockResponse: any = ['Heart'];

    let response: any;

    spyOn(userLoginService, 'getTodayTaskName').and.returnValue(
      of(mockResponse)
    );

    userLoginService.getTodayTaskName().subscribe((res) => {
      response = res;
      console.log(response);
    });

    expect(response).toBe(mockResponse);
  });
});
