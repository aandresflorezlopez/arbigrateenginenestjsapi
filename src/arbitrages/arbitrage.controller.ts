import { Controller, Post, Body } from '@nestjs/common';
import { ArbitrageDto } from 'src/dtos/arbitrage.dto';

@Controller('arbitrages')
export class ArbitragesController {
  @Post()
  calculateArbitrages(@Body() body: ArbitrageDto): string {
    console.log(body);
    return `hello ${JSON.stringify(body.amount)}`;
  }
}
