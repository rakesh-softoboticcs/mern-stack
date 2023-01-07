module.exports = (sequelize,DataTypes)=>{
    const Posts = sequelize.define("Posts",{
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        postText:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        pusername:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    })

    return Posts
}