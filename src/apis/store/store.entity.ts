import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Person } from '../person/person.entity';

@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    ruc: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    location: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    facebook: string;

    @Column({ nullable: false })
    instagram: string;

    @Column({ nullable: false })
    twitter: string;

    @Column({ nullable: false })
    active: boolean;

    @Column({ nullable: false })
    status: string;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updateAt: Date;

    @OneToMany(() => Person, (person) => person.store)
    people: Person[];
}
