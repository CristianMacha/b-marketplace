import { createConnection } from 'typeorm';

const connection = createConnection({
    type: 'postgres',
    host: 'bp7msuke6vg3hhteed3e-postgresql.services.clever-cloud.com',
    port: 5432,
    username: 'ugi7rfkmdt5jiuitqgyc',
    password: 'dFSQDuHedXfDdGl7AjJN',
    database: 'bp7msuke6vg3hhteed3e',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../../apis/**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
});

export default connection;
