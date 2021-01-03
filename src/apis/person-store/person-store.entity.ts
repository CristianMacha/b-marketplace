import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Person } from '../person/person.entity';
import { Role } from '../role/role.entity';
import { Store } from '../store/store.entity';

@Entity()
export class PersonStore {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, default: true })
    active: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updateAt: Date;

    @ManyToOne(() => Role, (role) => role.peopleStores)
    role: Role;

    @ManyToOne(() => Person, (person) => person.stores)
    person: Person;

    @ManyToOne(() => Store, (store) => store.people)
    store: Store;
}
