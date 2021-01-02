import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { STATUS_STORE } from '../../config/environment';

@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    ruc: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: false })
    location: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    facebook: string;

    @Column({ nullable: true })
    instagram: string;

    @Column({ nullable: true })
    twitter: string;

    @Column({ nullable: false, default: true })
    active: boolean;

    @Column({ nullable: false, default: STATUS_STORE.notVerified })
    status: string;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updateAt: Date;
}
