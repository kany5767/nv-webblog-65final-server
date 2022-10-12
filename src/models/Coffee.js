module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        title: DataTypes.STRING,
        number : DataTypes.NUMBER,
        price: DataTypes.INTEGER,
        type: DataTypes.STRING,
        pictures: DataTypes.STRING,
        status: DataTypes.STRING,
        thumnail: DataTypes.STRING,
    });
    return Coffee;
}