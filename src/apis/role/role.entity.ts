import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PersonStore } from '../person-store/person-store.entity';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    code: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false, default: true })
    active: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updateAt: Date;

    @OneToMany(() => PersonStore, (pStore) => pStore.role)
    peopleStores: PersonStore[];
}
