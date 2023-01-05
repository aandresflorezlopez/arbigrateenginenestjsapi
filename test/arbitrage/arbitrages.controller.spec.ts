import { ArbitragesController } from 'src/arbitrages/arbitrage.controller';
import { ArbitragesService } from 'src/arbitrages/arbitrages.service';

import { TestingModule, Test } from '@nestjs/testing';

describe('Arbitrage engine', () => {
  let arbitragesController: ArbitragesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArbitragesController],
      providers: [ArbitragesService],
    }).compile();

    arbitragesController = module.get(ArbitragesController);
  });

  it('controller', () => {
    const result = arbitragesController.calculateArbitrages({
      currencyPair: 'USD/COP',
      amount: '1000',
    });

    console.log(result);
  });
});
