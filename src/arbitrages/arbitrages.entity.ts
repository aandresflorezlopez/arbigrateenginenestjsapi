import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'arbitrages_logs' })
export class Arbitrages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'currency_exchange' })
  currencyExchange: string;

  @Column()
  amount: string;

  @Column({
    nullable: true,
  })
  message: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
