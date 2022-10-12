module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        title: DataTypes.STRING,
        price: DataTypes.STRING,
        type: DataTypes.STRING,
        pictures: DataTypes.STRING,
        status: DataTypes.STRING,
        thumnail: DataTypes.STRING,
    });
    return Coffee;
}