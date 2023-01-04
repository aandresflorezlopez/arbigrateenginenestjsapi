import { Controller, Get } from '@nestjs/common';
import { Rates } from './rates/rates.entity';
import { RatesService } from './rates/rates.service';

@Controller()
export class AppController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  async getHello(): Promise<Rates[]> {
    return await this.ratesService.findAll();
  }
}
