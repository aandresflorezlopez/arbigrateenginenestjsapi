import { Module } from '@nestjs/common';
import { RatesController } from 'src/rates/rates.controller';
import { RatesModule } from 'src/rates/rates.module';
import { RatesService } from 'src/rates/rates.service';

@Module({
  imports: [RatesModule],
  providers: [RatesService],
  exports: [RatesService],
  controllers: [RatesController],
})
export class RatesHttpModule {}
