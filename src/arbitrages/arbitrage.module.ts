import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArbitragesController } from './arbitrage.controller';

import { Arbitrages } from './arbitrages.entity';
import { Rates } from 'src/rates/rates.entity';
import { ArbitragesService } from './arbitrages.service';
import { RatesService } from 'src/rates/rates.service';

@Module({
  imports: [TypeOrmModule.forFeature([Arbitrages, Rates])],
  providers: [ArbitragesService, RatesService],
  exports: [TypeOrmModule, ArbitragesService],
  controllers: [ArbitragesController],
})
export class ArbitragesModule {}
