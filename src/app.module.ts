import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';

import config from '../ormconfig';

import { RatesHttpModule } from './rates-http/rates-http.module';
import { ArbitragesModule } from './arbitrages/arbitrage.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    RatesHttpModule,
    ArbitragesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
