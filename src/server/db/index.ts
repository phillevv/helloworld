import * as mysql from 'mysql';
import config from '../config';

import users from './users';


export const connection = mysql.createConnection(config.mysql);

connection.connect(err => {
    if(err) console.log(err);
    });

    export default {

        users
    }