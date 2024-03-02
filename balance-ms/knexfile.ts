import type { Knex } from 'knex';

// Update with your config settings.
const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'mysqlbalance',
      port: 3306,
      database: 'balance',
      user: 'root',
      password: 'root',
      supportBigNumbers: true,
      bigNumberStrings: true,
      multipleStatements: true,
      dateStrings: true,
    },
    pool: {
      min: 2,
      max: 10,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      afterCreate: function _(connection: any, done: any) {
        connection.query('SET time_zone = "UTC";', function er(err: Error) {
          if (err) {
            console.log(err, 'failed to initialize mysql database connection');
          } else {
            console.log('mysql database connected');
          }
          done(err, connection);
        });
      },
    },
  },
};

module.exports = config;
