import jwt from 'jsonwebtoken';

export function generateJWT(id: number) {
    return new Promise((resolve, reject) => {
        const payload = { id };
        jwt.sign(payload, 'HERE-SEED', { expiresIn: '1d' }, (err, token) => {
            if (err) {
                reject('No se pudo generar el JWT.');
            } else {
                resolve(token);
            }
        });
    });
}
