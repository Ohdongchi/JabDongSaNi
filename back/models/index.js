const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./members")(sequelize, Sequelize);
db.Patients = require("./patients")(sequelize, Sequelize);
db.Visit = require('./visit')(sequelize, Sequelize);

db.User.hasMany(db.Patients, {foreignKey:'writer', sourceKey:'members_num'});
db.Patients.belongsTo(db.User, {foreignKey:'writer', targetKey:'members_num'});

db.Patients.hasMany(db.Visit, {foreignKey:'visitor_num', sourcKey:'patients_num'})
db.Visit.belongsTo(db.Patients, {foreignKey:'visitor_num', targetKey:'patients_num'})
module.exports = db;
