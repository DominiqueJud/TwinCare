module.exports=(sequelize,DataTypes) => {
    const drug= sequelize.define("Drug" , {
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        common_name: {
            type: DataTypes.STRING,
        },
        active_substance: {
            type: DataTypes.STRING(1000),
        },
        therapeutic_area: {
            type: DataTypes.STRING(1000),
        },
        group: {
            type: DataTypes.STRING(1000),
        }
    })


    return drug
}