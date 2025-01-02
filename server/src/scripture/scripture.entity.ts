import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('scriptures')
export class Scripture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reference: string;

  @Column('jsonb')
  text: any;

  @Column('bytea', { nullable: true })
  embeddings: Buffer;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
