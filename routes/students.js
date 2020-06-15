  
var express = require("express");
var router = express.Router();
const { Campus, Student } = require("../database/models");


//Route to get All Students//
router.get("/", async (req,res, next) => {
    try{
      const students = await Student.findAll({ include: Campus});
      console.log(students);
      res.status(200).json(students);
    }catch(err){
      next(err);
    }
  });

router.get("/:id", async (req, res,next) =>{
  //Takes the Id
  const{ id } = req.params;
  //Query the database
  try{
    const student = await Student.findByPk(id, {include: Campus});
    //send back the student as a repsonse
    res.status(200).json(student);
  } catch(err){
     // if error:
    // handle error
    next(err);
  }
});

router.post("/", async (req, res,next) =>{
  //Take the form data
  const { firstName, lastName, email, imageUrl, gpa} = req.body;

  //Create a new student entity//
  const studentObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    imageUrl: imageUrl,
    gpa: gpa,
  };
  try {
    const newStudent = await Student.create(studentObj);
    res.status(201).send(newStudent);
  } catch(err){
    next(err);
  }
});

router.put("/:id", async (req,res,next) => {
  const { id } = req.params;
  const { firstName, lastName, email, imageUrl, gpa} = req.body;

  const updatedObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    imageUrl: imageUrl,
    gpa: gpa,
  };
  try{
    const student = await Student.findByPk( id );
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    res.status(201).send(updatedStudent);
  } catch (err) {
    next(err);
  }
})

router.delete("/:id", async(req, res, next) => {
  const { id } = req.params;
  try{
    const student = await Student.findByPk(id);
    await student.destroy();
    res.sendStatus(204);
  } catch(err) {
    next(err);
  }
});

  module.exports = router;