import { TestBed } from '@angular/core/testing';

import { LoginUserIntercepterService } from './login-user-intercepter.service';

describe('LoginUserIntercepterService', () => {
  let service: LoginUserIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUserIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
