import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Person } from '../person/person.entity';

@Entity()
export class TypePerson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    code: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false, default: true })
    active: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updateAt: Date;

    @OneToMany(() => Person, (person) => person.typePerson)
    people: Person[];
}
