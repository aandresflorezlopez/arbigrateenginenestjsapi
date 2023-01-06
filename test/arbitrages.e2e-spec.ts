import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ArbitragesModule } from '../src/arbitrages/arbitrage.module';
import { AppModule } from '../src/app.module';
import { RatesHttpModule } from '../src/rates-http/rates-http.module';

describe('Rates (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ArbitragesModule, RatesHttpModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('(POST) /arbitrages', () => {
    return request(app.getHttpServer())
      .post('/arbitrages')
      .send({ amount: '10000', currencyPair: 'USD/COP' })
      .expect(201)
      .expect('hello 10241');
  });
});
