import { Module } from '@nestjs/common';
import { RatesModule } from 'src/rates/rates.module';
import { RatesService } from 'src/rates/rates.service';
import { RatesController } from 'src/rates/rates.controller';

@Module({
  imports: [RatesModule],
  providers: [RatesService],
  exports: [RatesService],
  controllers: [RatesController],
})
export class RatesHttpModule {}
