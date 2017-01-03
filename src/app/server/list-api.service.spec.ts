/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListApiService } from './list-api.service';

describe('ListApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListApiService]
    });
  });

  it('should ...', inject([ListApiService], (service: ListApiService) => {
    expect(service).toBeTruthy();
  }));
});
