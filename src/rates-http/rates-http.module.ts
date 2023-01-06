import { Module } from '@nestjs/common';
import { RatesModule } from '../rates/rates.module';
import { RatesService } from '../rates/rates.service';
import { RatesController } from '../rates/rates.controller';

@Module({
  imports: [RatesModule],
  providers: [RatesService],
  exports: [RatesService],
  controllers: [RatesController],
})
export class RatesHttpModule {}
