import { TestBed } from '@angular/core/testing';

import { PassarObjetoService } from './passar-objeto.service';

describe('PassarObjetoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassarObjetoService = TestBed.get(PassarObjetoService);
    expect(service).toBeTruthy();
  });
});
