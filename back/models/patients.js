module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        "patients",
        {
            patients_num: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            confirmation_day: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            residence_big:{
                type:DataTypes.STRING(20),
                allowNull:false,
            },
            residence_middle: {
                type:DataTypes.STRING(20),
                allowNull:false,
            },
            route: {
                type:DataTypes.TINYINT,
                allowNull:false,
                defaultValue:0,
            },
            state:{
                type:DataTypes.TINYINT,
                allowNull:false,
                defaultValue:0,
            },
            writer: {
                type:DataTypes.INTEGER,
                allowNull:false,
            }
        }
    );