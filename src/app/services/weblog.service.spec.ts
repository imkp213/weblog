import { TestBed } from '@angular/core/testing';

import { WeblogService } from './weblog.service';

describe('WeblogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeblogService = TestBed.get(WeblogService);
    expect(service).toBeTruthy();
  });
});
