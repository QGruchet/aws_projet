const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'lets_drawmadere',
  'admin',
  'admin',
  {
    host: 'db',
    dialect: 'postgres',
    port: 5432
  }
)

try {
  sequelize.authenticate();
  console.log('Connection to the database has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;