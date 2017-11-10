/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitUsersService } from './git-users.service';

describe('GitUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitUsersService]
    });
  });

  it('should ...', inject([GitUsersService], (service: GitUsersService) => {
    expect(service).toBeTruthy();
  }));
});
