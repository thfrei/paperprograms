require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/paper_programs_development',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
};
