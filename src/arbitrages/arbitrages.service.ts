import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { Rates } from 'src/rates/rates.entity';
import { Arbitrages } from './arbitrages.entity';

@Injectable()
export class ArbitragesService {
  constructor(
    @InjectRepository(Rates)
    private ratesRepository: Repository<Rates>,
    @InjectRepository(Arbitrages)
    private arbitragesRepository: Repository<Arbitrages>,
  ) {}

  async calculateArbitrageAmount({
    fromCurrency,
    toCurrency,
    amount,
  }: {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
  }): Promise<number> {
    await this.arbitragesRepository.save({
      currencyExchange: `${fromCurrency}/${toCurrency}`,
      amount: String(amount),
      message: `Start transaction with ${amount}`,
    });

    // USD -> COP
    const rates = await this.ratesRepository.find({
      where: {
        fromCurrency,
        toCurrency,
      },
    });
    const intialRate = rates[0];
    const { rate: rateBase, toCurrency: intialToCurrency } = intialRate;

    // COP -> BRL
    const currencyExchanges = await this.ratesRepository.find({
      where: {
        fromCurrency: intialToCurrency,
        toCurrency: Not(fromCurrency),
      },
    });

    const { rate: firstRateExchange, toCurrency: firstExchangeToCurrency } =
      currencyExchanges[0];

    // BRL -> USD
    const arbitrageExchanges = await this.ratesRepository.find({
      where: {
        fromCurrency: firstExchangeToCurrency,
        toCurrency: fromCurrency,
      },
    });

    const { rate: finalRate } = arbitrageExchanges[0];

    const result: number =
      amount * Number(rateBase) * Number(firstRateExchange) * Number(finalRate);

    const isProfit: boolean = result - amount > 0;

    await this.arbitragesRepository.save({
      amount: String(amount),
      message: `Finish transaction with ${result}`,
    });

    // const arbitrageAnalisis = {
    //   isProfit,
    //   profit: isProfit ? result - amount : 0,
    // };

    return result;
  }
}
