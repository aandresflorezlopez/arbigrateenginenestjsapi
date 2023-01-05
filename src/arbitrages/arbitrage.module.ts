import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArbitragesController } from './arbitrage.controller';

import { Arbitrages } from './arbitrages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Arbitrages])],
  exports: [TypeOrmModule],
  controllers: [ArbitragesController],
})
export class ArbitragesModule {}
