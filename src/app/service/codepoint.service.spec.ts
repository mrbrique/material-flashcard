import { TestBed } from '@angular/core/testing';

import { CodepointService } from './codepoint.service';

describe('CodepointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodepointService = TestBed.get(CodepointService);
    expect(service).toBeTruthy();
  });
});
