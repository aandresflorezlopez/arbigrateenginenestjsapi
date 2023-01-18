import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ArbitrageDto } from '../dtos/arbitrage.dto';
import { ArbitragesService } from './arbitrages.service';

@Controller('arbitrages')
export class ArbitragesController {
  constructor(private readonly arbitrageService: ArbitragesService) {}

  @Post()
  @HttpCode(200)
  async calculateArbitrages(@Body() body: ArbitrageDto): Promise<string> {
    const amount = Number(body.amount);
    const [fromCurrency, toCurrency] = body.currencyPair.split('/');

    try {
      const arbitrage = await this.arbitrageService.calculateArbitrageAmount({
        fromCurrency,
        toCurrency,
        amount,
      });

      const { firstExchange, bridgeExchange, finalExchange, profit } =
        arbitrage;

      return `Exchange ${firstExchange.name}: ${firstExchange.rate}, Exchange ${bridgeExchange.name}: ${bridgeExchange.rate}, USD-Change: ${finalExchange.rate}, (Buy ${firstExchange.rate} in ${firstExchange.name}, Buy ${bridgeExchange.rate} in ${bridgeExchange.name} and Buy ${finalExchange.rate} in ${finalExchange.name}) profit: ${profit}`;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.NOT_FOUND, { cause: e });
    }
  }
}
