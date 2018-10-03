export default (sequelize, DataType) => {
    const Books = sequelize.define('Books', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: ture
            }
        }
    });
    return Books;
}