const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({
      firstName: "Fatma",
      lastName: "Kausar",
      email: "kausar@gmail.com",
      gpa: "4.0",
      campusId: 2
    }),
    Student.create({
      firstName: "Sally",
      lastName: "John",
      email: "sjohn@gmail.com",
      gpa: "3.8",
      campusId: 1
    }),
    Student.create({
      firstName: "Keke",
      lastName: "Palmer",
      email: "kpalmer@gmail.com",
      gpa: "3.9",
      campusId: 1
    }),
  ]);
};

module.exports = seedDatabase;
