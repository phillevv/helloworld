import { connection } from './index';

export const all = async () => {
    return new Promise( (resolve, reject ) => {

        connection.query('SELECT * from users', (err, result) => {
            if(err) {
                return reject(err);
            }
            resolve(result);
        });

    });
}

export default {
    all
}