import { TestBed, inject } from '@angular/core/testing';

import { RequiredItemsService } from './required-items.service';

describe('RequiredItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequiredItemsService]
    });
  });

  it('should be created', inject([RequiredItemsService], (service: RequiredItemsService) => {
    expect(service).toBeTruthy();
  }));
});
