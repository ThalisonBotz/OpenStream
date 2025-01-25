import { Sequelize } from "sequelize" // importando o Sequelize

export const database = new Sequelize({ // creating a new instance of Sequelize
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'onebitflix_development',
  username: 'onebitflix',
  password: 'onebitflix',
  define:{
    underscored: true // used for snake_case in the database
  }
})