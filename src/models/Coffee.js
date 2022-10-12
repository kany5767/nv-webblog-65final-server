module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        title: DataTypes.STRING,
        price: DataTypes.STRING,
        type: DataTypes.STRING,
        pictures: DataTypes.STRING,
        status: DataTypes.STRING,
        thumnail: DataTypes.STRING
    })
    return User
}