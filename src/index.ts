import 'reflect-metadata';
import app from './app';
import db from './services/postgresql/pg';

app.listen(process.env.PORT || 3000, async () => {
    console.log('Server online.');

    try {
        await db;
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
});
