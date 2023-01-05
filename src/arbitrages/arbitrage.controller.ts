import { Controller, Post, Body } from '@nestjs/common';
import { ArbitrageDto } from 'src/dtos/arbitrage.dto';
import { ArbitragesService } from './arbitrages.service';

@Controller('arbitrages')
export class ArbitragesController {
  constructor(private readonly arbitrageService: ArbitragesService) {}
  @Post()
  async calculateArbitrages(@Body() body: ArbitrageDto): Promise<string> {
    const amount = Number(body.amount);
    const [fromCurrency, toCurrency] = body.currencyPair.split('/');

    const finalAmount = await this.arbitrageService.calculateArbitrageAmount({
      fromCurrency,
      toCurrency,
      amount,
    });

    return `hello ${finalAmount}`;
  }
}
