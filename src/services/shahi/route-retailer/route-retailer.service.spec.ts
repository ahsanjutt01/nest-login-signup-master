import { Test, TestingModule } from '@nestjs/testing';
import { RouteRetailerService } from './route-retailer.service';

describe('RouteRetailerService', () => {
  let service: RouteRetailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteRetailerService],
    }).compile();

    service = module.get<RouteRetailerService>(RouteRetailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
