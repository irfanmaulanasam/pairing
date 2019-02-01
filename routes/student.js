const express = require('express')
const routes = express.Router()
const Models = require('../models')
const Student = Models.Student
const Subject = Models.Subject
const Region = Models.Region

// routes.get('/deleteStudents/:id', (req,res)=> {
//     // console.log(req.params.id)
//     Student.destroy({where : { id : req.params.id }})
//     .then(()=> {
//         res.redirect('/listStudents')
//     })
//     .catch(err => {
//         res.send(err)
//     })
// })

//form penambahan Student di form add Students
routes.get('/registrasi',(req,res)=>{
    let region = null
    let input ={
        FullName: '',
        Address: '',
        Phone: '',
        Email: '',
        Username: '',
        Password: '',
        RegionId: null
    }
    Region.findAll()
    .then(data=>{
        region = data
        res.render('./registrasi',{ Region:region, output:input, name:'Students'})
    })
    .catch(err=>{
        res.send(err)
    })
})

//form pengiriman Student di halaman add Students
routes.post('/registrasi', (req,res)=> {
    // console.log(req.body);
    // console.log(req.body.Email, '=========')
    if (!req.body) {
        res.send('data kosong')
    } else {
        Student.create({
        FullName: req.body.FullName,
        Address: req.body.Address,
        Phone: req.body.Phone,
        Email: req.body.Email,
        Username: req.body.Username,
        Password: req.body.Password,
        RegionId: req.body.Regionid
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }
})

// url update data Students
routes.get('/editStudents/:id', (req,res)=> {
    let dataInput = null
    Student.findByPk(req.params.id)
    .then(data => {
        dataInput = data
        return Subject.findAll()   
    })
    .then(subject=>{
        res.render('./pages/edit.ejs', {data : dataInput ,option : subject , name : 'Students'})
    })
    .catch(err => {
        res.send(err)
    })
})
// posting ke  database 
routes.post('/editStudents/:id', (req,res)=> {
    // console.log(req.body)
    Student.update( {
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
         res.redirect('/listStudents')
     })
     .catch(err => {
         res.send(err)
     })
 })
 

routes.get('/list',(req,res)=>{
    Student.findAll({order:[['id']]})
    .then((data)=>{
        // res.send(data)
        // res.send(data)
        res.render('./pages/list.ejs',{key:data, name:'Students'})
    })
    .catch((err)=>{
        res.send(err)
    })
})

routes.get('/*',(req,res)=>{
    res.render('./notfounds.ejs')
})

module.exports = routes