import { TestBed } from '@angular/core/testing';

import { TariffService } from './tariff.service';

describe('TariffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TariffService = TestBed.get(TariffService);
    expect(service).toBeTruthy();
  });
});
