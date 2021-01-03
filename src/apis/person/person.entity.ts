import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { PersonStore } from '../person-store/person-store.entity';
import { Role } from '../role/role.entity';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    names: string;

    @Column({ nullable: false })
    surnames: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: true })
    photo: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true, default: null })
    sexo: boolean;

    @Column({ nullable: true, default: false })
    google: boolean;

    @Column({ nullable: false, default: false })
    verifiedEmail: boolean;

    @Column({ nullable: false, default: false })
    active: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updateAt: Date;

    @ManyToOne(() => Role, (role) => role.people, { nullable: false })
    role: Role;

    @OneToMany(() => PersonStore, (pStore) => pStore.person)
    stores: PersonStore[];
}
