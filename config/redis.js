'use strict'

/*
|--------------------------------------------------------------------------
| Redis Configuaration
|--------------------------------------------------------------------------
|
| Here we define the configuration for redis server. A single application
| can make use of multiple redis connections using the redis provider.
|
*/

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | connection
  |--------------------------------------------------------------------------
  |
  | Redis connection to be used by default.
  |
  */
  connection: Env.get('REDIS_CONNECTION', 'https://leaguegg.tk'),

  /*
  |--------------------------------------------------------------------------
  | local connection config
  |--------------------------------------------------------------------------
  |
  | Configuration for a named connection.
  |
  */
  server: {
    host: Env.get('REDIS_HOST', 'https://leaguegg.tk/'),
    password: Env.get('REDIS_PASSWORD', null),
    db: 0,
    keyPrefix: ''
  },

  /*
  |--------------------------------------------------------------------------
  | cluster config
  |--------------------------------------------------------------------------
  |
  | Below is the configuration for the redis cluster.
  |
  */
  cluster: {
    clusters: [{
      host: 'https://leaguegg.tk/',
      password: null,
      db: 0
    },
    {
      host: 'https://leaguegg.tk/',
      password: null,
      db: 0
    }]
  }
}
