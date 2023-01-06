import { ArbitragesService } from '../../src/arbitrages/arbitrages.service';
import { RatesService } from '../../src/rates/rates.service';

import { Repository } from 'typeorm';
import { Arbitrages } from '../../src/arbitrages/arbitrages.entity';

const saveMock = jest.fn();
const findOneMock = jest
  .fn()
  .mockReturnValue([
    {
      rate: '4900',
      fromCurrency: 'USD',
      toCurrrency: 'COP',
    },
  ])
  .mockReturnValueOnce([
    {
      fromCurrency: 'COP',
      toCurrency: 'BRL',
      rate: '0.0011',
    },
  ])
  .mockReturnValueOnce([
    {
      fromCurrency: 'BRL',
      toCurrency: 'USD',
      rate: '0.19',
    },
  ]);
const findAllMock = jest.fn();
const removeMock = jest.fn();

describe('Arbitrage service ', () => {
  it('calculates arbitrage profit', async () => {
    const arbitragesRepository = {
      save: saveMock,
    } as unknown as Repository<Arbitrages>;

    const ratesServiceMock = {
      findOne: findOneMock,
      findAll: findAllMock,
      remove: removeMock,
    } as unknown as RatesService;

    const arbitrageService = new ArbitragesService(
      arbitragesRepository,
      ratesServiceMock,
    );

    const fromCurrency = 'USD';
    const toCurrency = 'COP';
    const amount = Number('10000');

    const result = await arbitrageService.calculateArbitrageAmount({
      fromCurrency,
      toCurrency,
      amount,
    });

    expect(result).toEqual(10241);
  });

  it('dispatches exception cuz there are no rates', async () => {
    const arbitragesRepository = {
      save: saveMock,
    } as unknown as Repository<Arbitrages>;

    const ratesServiceMock = {
      findOne: jest.fn().mockReturnValue([]),
      findAll: findAllMock,
      remove: removeMock,
    } as unknown as RatesService;

    const arbitrageService = new ArbitragesService(
      arbitragesRepository,
      ratesServiceMock,
    );

    const fromCurrency = 'USD';
    const toCurrency = 'COP';
    const amount = Number('10000');

    try {
      await arbitrageService.calculateArbitrageAmount({
        fromCurrency,
        toCurrency,
        amount,
      });
    } catch (e) {
      expect(e.message).toEqual(`there is no rates for USD`);
    }
  });
});
