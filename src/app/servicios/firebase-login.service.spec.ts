import { TestBed } from '@angular/core/testing';

import { FirebaseLoginService } from './firebase-login.service';

describe('FirebaseLoginService', () => {
  let service: FirebaseLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
