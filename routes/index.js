const express = require('express')
const routes = express()
const teacher = require('./teacher')
const student = require('./Student')

routes.get('/',(req,res)=>{
    res.render('./index.ejs')
})
routes.get('/login',(req,res)=>{
    res.render('./login.ejs')
})

routes.post('/login',(req,res)=>{
    let Model = null
    if (req.body.role === 'Teacher') {
        Model = teacher
    } else if (req.body.role === 'Student'){
        Model = student
    } else {
        res.redirect('/*')
    }
    Model.findOne({where : {Username:req.body.Username}})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.use('/teacher',teacher)
routes.use('/student',student)

routes.get('/*',(req,res)=>{
    res.render('./notfounds.ejs')
})
module.exports = routes