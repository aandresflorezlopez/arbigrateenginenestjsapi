import { IsString, IsNotEmpty } from 'class-validator';

export class ArbitrageDto {
  @IsString()
  @IsNotEmpty()
  readonly currencyPair: string;

  @IsNotEmpty()
  readonly amount: string;
}
