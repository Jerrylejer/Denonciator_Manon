/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LearnersService } from './learners.service';

describe('Service: Learners', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearnersService]
    });
  });

  it('should ...', inject([LearnersService], (service: LearnersService) => {
    expect(service).toBeTruthy();
  }));
});
