module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "members",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      members_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique:true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      permission: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      }
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );