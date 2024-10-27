const {User} = require('../models')
const userRouter= require('express').Router()
const bcrypt=require('bcrypt')
userRouter.get('/', async (request,response)=>{
    const users= await User.findAll({
        attributes:['username']
    })
    response.json(users)
})

userRouter.post('/',async (request,response)=>{
    console.log(request.body)
    const {username,firstName,lastName,password} =request.body
    const saltedRounds=10
    if(!(username&&password)){
        return response.status(400).json({error:'username and password required'})
    }
    const passwordHash=await bcrypt.hash(password,saltedRounds)

    try{
        await User.create({username,firstName,lastName,passwordHash})
        response.status(201).send()
    }
    catch(e){console.log(e)
        response.status(400).send()
    }

})

module.exports=userRouter