db = db.getSiblingDB('studentdb');

db.students.insertMany([
  {
    reg_no: "REG001",
    first_name: "Alice",
    last_name: "Smith",
    subjects: ["Math","Physics","CS"],
    cgpa: 3.75
  },
  {
    reg_no: "REG002",
    first_name: "Bob",
    last_name: "Johnson",
    subjects: ["English","Biology","Chemistry"],
    cgpa: 3.50
  }
]);