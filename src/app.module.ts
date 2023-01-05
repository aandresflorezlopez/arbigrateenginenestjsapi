import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'ormconfig';

import { RatesHttpModule } from './rates-http/rates-http.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), RatesHttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
