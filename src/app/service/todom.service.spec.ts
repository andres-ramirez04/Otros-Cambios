import { TestBed } from '@angular/core/testing';

import { TodomService } from './todom.service';

describe('TodomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodomService = TestBed.get(TodomService);
    expect(service).toBeTruthy();
  });
});
