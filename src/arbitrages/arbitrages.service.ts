import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatesService } from '../rates/rates.service';
import { Repository, Not } from 'typeorm';
import { Rates } from '../rates/rates.entity';
import { Arbitrages } from './arbitrages.entity';

@Injectable()
export class ArbitragesService {
  constructor(
    @InjectRepository(Arbitrages)
    private arbitragesRepository: Repository<Arbitrages>,
    private readonly ratesService: RatesService,
  ) {}

  private async getRate({ fromCurrency, toCurrency }): Promise<Rates> {
    const rates = await this.ratesService.findOne({
      fromCurrency,
      toCurrency,
    });

    if (!rates[0]) {
      await this.arbitragesRepository.save({
        currencyExchange: `${fromCurrency}/${toCurrency}`,
        amount: '0',
        message: `There is no rates for ${fromCurrency} and ${toCurrency}`,
      });

      throw new Error(`there is no rates for ${fromCurrency}`);
    }

    return rates[0];
  }

  async calculateArbitrageAmount({
    fromCurrency,
    toCurrency,
    amount,
  }: {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
  }): Promise<any> {
    await this.arbitragesRepository.save({
      currencyExchange: `${fromCurrency}/${toCurrency}`,
      amount: String(amount),
      message: `Start transaction with ${amount}`,
    });

    // First exchange
    const intialRate = await this.getRate({ fromCurrency, toCurrency });
    const { rate: rateBase, toCurrency: intialToCurrency } = intialRate;

    // Bridge exchange
    const currencyExchanges = await this.getRate({
      fromCurrency: intialToCurrency,
      toCurrency: Not(fromCurrency),
    });
    const { rate: firstRateExchange, toCurrency: firstExchangeToCurrency } =
      currencyExchanges;

    // Final exchange
    const arbitrageExchanges = await this.getRate({
      fromCurrency: firstExchangeToCurrency,
      toCurrency: fromCurrency,
    });
    const { rate: finalRate } = arbitrageExchanges;

    const result: number =
      amount * Number(rateBase) * Number(firstRateExchange) * Number(finalRate);

    const isProfit: boolean = result - amount > 0;

    await this.arbitragesRepository.save({
      currencyExchange: `${fromCurrency}/${toCurrency}`,
      amount: String(amount),
      message: `Finish transaction with ${result}`,
    });

    const arbitrageAnalisis = {
      isProfit,
      profit: isProfit ? result - amount : 0,
      firstExchange: {
        name: toCurrency,
        rate: rateBase,
      },
      bridgeExchange: {
        name: firstExchangeToCurrency,
        rate: firstRateExchange,
      },
      finalExchange: {
        name: firstExchangeToCurrency,
        rate: finalRate,
      },
    };

    return arbitrageAnalisis;
  }
}
