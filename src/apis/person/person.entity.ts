import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Role } from '../role/role.entity';
import { Store } from '../store/store.entity';

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

    @Column({ nullable: false })
    dni: string;

    @Column({ nullable: false })
    photo: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: true })
    sexo: boolean;

    @Column({ nullable: false })
    verifiedEmail: boolean;

    @Column({ nullable: false })
    active: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updateAt: Date;

    @ManyToOne(() => Role, (role) => role.people)
    role: Role;

    @ManyToOne(() => Store, (store) => store.people)
    store: Store;
}
