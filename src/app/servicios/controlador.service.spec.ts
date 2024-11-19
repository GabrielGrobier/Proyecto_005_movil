import { TestBed } from '@angular/core/testing';

import { ControladorService } from './controlador.service';

describe('ControladorService', () => {
  let service: ControladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
