import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Rates } from './rates/rates.entity';
import { RatesHttpModule } from './rates-http/rates-http.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'rates',
      entities: [Rates],
      synchronize: true,
    }),
    RatesHttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
