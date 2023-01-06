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

  it('(GET) /rates', () => {
    const response = [
      {
        id: 1,
        fromCurrency: 'USD',
        toCurrency: 'COP',
        rate: '4900',
        isActive: true,
        created_at: '2023-01-06T02:40:40.899Z',
        updated_at: '2023-01-06T02:40:40.899Z',
      },
      {
        id: 2,
        fromCurrency: 'COP',
        toCurrency: 'USD',
        rate: '0.00020',
        isActive: true,
        created_at: '2023-01-06T02:40:40.899Z',
        updated_at: '2023-01-06T02:40:40.899Z',
      },
      {
        id: 3,
        fromCurrency: 'COP',
        toCurrency: 'BRL',
        rate: '0.0011',
        isActive: true,
        created_at: '2023-01-06T02:40:40.899Z',
        updated_at: '2023-01-06T02:40:40.899Z',
      },
      {
        id: 4,
        fromCurrency: 'BRL',
        toCurrency: 'COP',
        rate: '922',
        isActive: true,
        created_at: '2023-01-06T02:40:40.899Z',
        updated_at: '2023-01-06T02:40:40.899Z',
      },
      {
        id: 5,
        fromCurrency: 'BRL',
        toCurrency: 'USD',
        rate: '0.19',
        isActive: true,
        created_at: '2023-01-06T02:40:40.899Z',
        updated_at: '2023-01-06T02:40:40.899Z',
      },
      {
        id: 6,
        fromCurrency: 'USD',
        toCurrency: 'BRL',
        rate: '5.39',
        isActive: true,
        created_at: '2023-01-06T02:40:40.899Z',
        updated_at: '2023-01-06T02:40:40.899Z',
      },
    ];

    return request(app.getHttpServer())
      .get('/rates')
      .expect(200)
      .expect(response);
  });
});
