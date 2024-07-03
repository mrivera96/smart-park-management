import { Test, TestingModule } from '@nestjs/testing';
import { ParkingSpacesService } from './parking-spaces.service';

describe('ParkingSpacesService', () => {
  let service: ParkingSpacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingSpacesService],
    }).compile();

    service = module.get<ParkingSpacesService>(ParkingSpacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
