import { TestBed } from '@angular/core/testing';

import { TomarhoraService } from './tomarhora.service';

describe('TomarhoraService', () => {
  let service: TomarhoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TomarhoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
