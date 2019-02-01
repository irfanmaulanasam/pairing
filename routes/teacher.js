const express = require('express')
const routes = express.Router()
const Models = require('../models')
const Teacher = Models.Teacher
const Subject = Models.Subject
const Region = Models.Region
const Fees = Models.Fee

routes.get('/login',(req,res)=>{
    Teacher.findOne({where:req.body.Username})
    .then(data=>{

    })
    .catch(err=>{
        if (!err.length) {
            res.send('Username tidak ditemukan' )
        } else {
            res.render('./err', {message:err} )
        }
    })

})
// routes.get('/deleteTeachers/:id', (req,res)=> {
//     // console.log(req.params.id)
//     Teacher.destroy({where : { id : req.params.id }})
//     .then(()=> {
//         res.redirect('/listTeachers')
//     })
//     .catch(err => {
//         res.send(err)
//     })
// })

//form penambahan teacher di form regitrasi teachers
routes.get('/registrasiGuru',(req,res)=>{
    let regions = []
    let fee = []
    let input ={
        FullName: '',
        Address: '',
        Phone: '',
        Email: '',
        Username: '',
        Password: '',
        RegionId: null,
        FeeId: null,
        SubjectId: null,
    }
    Region.findAll()
    .then(data=>{
        // res.send(data)
        regions = data
    })
    Fees.findAll()
    .then(fee1=>{
        // res.send(data)
        fee = fee1 
    })
    Subject.findAll()
    .then(data=>{
        res.render('./registrasiGuru',
        { Fee : fee, region: regions,
        subject:data, output:input})
    })
    .catch(err=>{
        res.send(err)
    })
})

//form pengiriman teacher di halaman registrasi teachers
routes.post('/registrasiGuru', (req,res)=> {
    if(!req.body){
        res.send('data kosong')
    } else {
        Teacher.create({
            FullName: req.body.FullName,
            Address: req.body.Address,
            Phone: req.body.Phone,
            Email: req.body.Email,
            Username: req.body.Username,
            Password: req.body.Password,
            RegionId: req.body.RegionId,
            FeeId: req.body.FeeId,
            SubjectId: req.body.SubjectId,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(data => {
            res.send(data)
            // res.redirect('/listTeachers')
        })
        .catch(err => {
            res.send(err)
        })
    }
})

// url update data teachers
routes.get('/editTeachers/:id', (req,res)=> {
    let dataInput = null
    Teacher.findByPk(req.params.id)
    .then(data => {
        dataInput = data
        return Subject.findAll()   
    })
    .then(subject=>{
        res.render('./pages/edit.ejs', {data : dataInput ,option : subject , name : 'Teachers'})
    })
    .catch(err => {
        res.send(err)
    })
})
// posting ke  database 
routes.post('/editTeachers/:id', (req,res)=> {
    console.log(req.body)
    Teacher.update( {
        first_name:req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        SubjectId:req.body.SubjectId,
        updated_at:new Date()},
        {
        where:{
            id:req.params.id
        }
    })
     .then(()=> {
         res.redirect('/listTeachers')
     })
     .catch(err => {
         res.send(err)
     })
 })
 

routes.get('/list',(req,res)=>{
    Teacher.findAll({order:[['id']]})
    .then((data)=>{
        // res.send(data)
        // res.send(data)
        res.render('./pages/list.ejs',{key:data, name:'Teachers'})
    })
    .catch((err)=>{
        res.send(err)
    })
})

routes.get('/*',(req,res)=>{
    res.render('./notfounds.ejs')
})

module.exports = routes