import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Rates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'from_currency' })
  fromCurrency: string;

  @Column({ name: 'to_currency' })
  toCurrency: string;

  @Column({ name: 'from_rate' })
  fromRate: string;

  @Column({ name: 'to_rate' })
  toRate: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

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
