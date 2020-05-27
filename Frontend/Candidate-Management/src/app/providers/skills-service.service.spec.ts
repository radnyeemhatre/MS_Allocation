import { TestBed } from '@angular/core/testing';

import { SkillsServiceService } from './skills-service.service';

describe('SkillsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillsServiceService = TestBed.get(SkillsServiceService);
    expect(service).toBeTruthy();
  });
});
