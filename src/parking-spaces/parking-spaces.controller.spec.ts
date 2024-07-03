import { Test, TestingModule } from '@nestjs/testing';
import { ParkingSpacesController } from './parking-spaces.controller';

describe('ParkingSpacesController', () => {
  let controller: ParkingSpacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingSpacesController],
    }).compile();

    controller = module.get<ParkingSpacesController>(ParkingSpacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
