import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { getCustomRepository } from 'typeorm';

import { PersonRepository } from '../../apis/person/person.respository';

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'HERE-SEED',
};
export default new Strategy(opts, async (payload, done) => {
    const personRepository = getCustomRepository(PersonRepository);

    try {
        const personDb = await personRepository.findOne({
            where: { id: payload.id },
            select: ['id', 'surnames', 'names', 'email', 'typePerson', 'photo', 'sexo'],
            relations: ['stores', 'stores.store', 'stores.role', 'typePerson'],
        });

        if (personDb) return done(null, personDb);

        return done(null, false);
    } catch (error) {
        console.log(error);
    }
});
