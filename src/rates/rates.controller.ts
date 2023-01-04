import { Controller, Get } from '@nestjs/common';
import { Rates } from './rates.entity';
import { RatesService } from './rates.service';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  async getRates(): Promise<Rates[]> {
    return await this.ratesService.findAll();
  }
}
