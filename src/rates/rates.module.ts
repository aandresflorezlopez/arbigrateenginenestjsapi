import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Rates } from './rates.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rates])],
  exports: [TypeOrmModule],
})
export class RatesModule {}
