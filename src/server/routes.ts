import * as express from 'express';

import db from './db';
import users from './db/users';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});


router.get('/api/users', async (req,res) => {
    try {
    let users = await db.users.all();
    res.json(users); 
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;