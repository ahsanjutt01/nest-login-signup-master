import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeSeederService } from './user-type-seeder.service';

describe('UserTypeSeederService', () => {
  let service: UserTypeSeederService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTypeSeederService],
    }).compile();

    service = module.get<UserTypeSeederService>(UserTypeSeederService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
