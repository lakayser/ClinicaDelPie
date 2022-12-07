import { TestBed } from '@angular/core/testing';

import { HoramasivaService } from './horamasiva.service';

describe('HoramasivaService', () => {
  let service: HoramasivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoramasivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
