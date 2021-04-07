const passport = require('passport');
const passportJWT = require('passport-jwt');

const pool = require('./data/pg');
const cfg = require('./config.js');

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const opts = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: true
};

module.exports = () => {
    const strategy = new Strategy(opts, async (payload, done) => {
        try {
            const result = await pool.query(
                'select 1 from player where player_id = $1',
                [payload.id]
            );
            if (result && result.rows && result.rows[0]) {
                return done(null, {
                    id: payload.id
                });
            } else {
                return done(new Error('User not found'), null);
            }
        } catch (err) {
            return done(new Error(err), null);
        }
    });

    passport.use(strategy);

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', cfg.jwtSession)
    };
};