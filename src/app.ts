import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';

import routes from './routes';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(passport.initialize());

app.use('/v1', routes);

export default app;
