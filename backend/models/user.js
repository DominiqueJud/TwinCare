module.exports=(sequelize,DataTypes) => {
    const user= sequelize.define("User" , {
        username: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:'username',
            validate:{
                notEmpty:true
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        passwordHash:{
            type: DataTypes.STRING(1000),
            allowNull:false,
            validate:{
                notEmpty:true
            } 
        }
    })


    return user
}