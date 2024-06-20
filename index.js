// 1-masala


// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Doe', age: 20, score: 67, status: 'active'},
//     { name: 'Aziz', age: 36, score: 72, status: 'inactive' },
//     { name: 'Bobur', age: 45, score: 52, status: 'inactive' },
//     { name: 'Rustam', age: 32, score: 96, status: 'inactive' },
//     { name: 'Omad', age: 52, score: 60, status: 'inactive' },
//     { name: 'Ozod', age: 21, score: 34, status: 'inactive' },
//     { name: 'Doston', age: 16, score: 87, status: 'inactive' },
//   ];


//   function nameAndage(students) {
//     students.forEach(student => {
//       console.log(`name: ${student.name}, age: ${student.age}`);
//     });
//   }
  
  
//   nameAndage(students);

// 2-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 99, status: 'inactive' },
//   { name: 'Doe', age: 23, score: 24, status: 'active' },
//   { name: 'Jack', age: 32, score: 71, status: 'inactive' },
//   { name: 'John', age: 40, score: 34, status: 'active' },
//   { name: 'Bobed', age: 42, score: 91, status: 'inactive' },
//   { name: 'Alice', age: 50, score: 88, status: 'active' },
//   { name: 'Bob', age: 26, score: 56, status: 'inactive' }
// ];

// let higtscore = students => students.reduce((prev, current) => (prev.score > current.score) ? prev : current);


// let highestScorer = higtscore(students);
// console.log(`Eng yuqori ball: ${highestScorer.score}ga ega bo'lgan o'quvchi: ${highestScorer.name}`);


// 3-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Andrew', age: 23, score: 88, status: 'active' },
//   { name: 'Doe', age: 32, score: 78, status: 'active' },
//   { name: 'Jack', age: 13, score: 81, status: 'active' },
//   { name: 'John', age: 33, score: 43, status: 'active' },
//   { name: 'Akbar', age: 25, score: 58, status: 'active' },
//   { name: 'Alisher', age: 24, score: 98, status: 'active' },
// ];

// let filterStudents = students => {
//   return students.filter(student => student.name.charAt(0).toLowerCase() === 'a');
// };


// let filteredStudents = filterStudents(students);
// console.log(filteredStudents);



// 4-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Andrew', age: 23, score: 88, status: 'active' },
//   { name: 'Doe', age: 32, score: 78, status: 'active' },
//   { name: 'Jack', age: 13, score: 81, status: 'active' },
//   { name: 'John', age: 33, score: 43, status: 'active' },
//   { name: 'Akbar', age: 25, score: 58, status: 'active' },
//   { name: 'Alisher', age: 24, score: 98, status: 'active' },
// ];

// const calculate = students => {
//   if (students.length === 0) {
//     return 0; 
//   }

//   const totalScore = students.reduce((sum, student) => sum + student.score, 0);
//   const averageScore = totalScore / students.length;
//   return averageScore;
// };


// const average = calculate(students);
// console.log(`O'rtacha ball: ${average}`);


// 5-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'John', age: 22, score: 92, status: 'inactive' },
//   { name: 'Bob', age: 23, score: 88, status: 'active' }
// ];

// function findStudentName(studentsArray, name) {
//   return studentsArray.find(student => student.name === name);
// }


// const student = findStudentName(students, 'John');
// console.log(student);


// 6-masala


// const students = [
//   { name: 'Alice', age: 20, score: 80, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 85, status: 'active' }
// ];

// function findIndexScore(studentsArray, minScore) {
//   for (let i = 0; i < studentsArray.length; i++) {
//     if (studentsArray[i].score >= minScore) {
//       return i; 
//     }
//   }
//   return -1; 
// }


// const index = findIndexScore(students, 85);
// console.log(index); 


// 7-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function filterActiveStudents(studentsArray) {
//   return studentsArray.filter(student => student.status === 'active');
// }


// const activeStudents = filterActiveStudents(students);
// console.log(activeStudents);


// 8-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 17, score: 88, status: 'active' }
// ];

// function Students(studentsArray) {
//   return studentsArray.every(student => student.age >= 18);
// }


// const allAdults = Students(students);
// console.log(`Barcha o'quvchilar 18 yoshdan katta: ${allAdults}`);


// 9-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function Student(studentsArray) {
//   return studentsArray.some(student => student.score >= 90);
// }


// const HighScore = Student(students);
// console.log(`Kamida bitta o'quvchi 90 dan yuqori ball olganligi: ${HighScore}`);


// 10-masala


// 11-masala


// 12-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// function Names(studentsArray) {
//   return studentsArray.map(student => ({
//     ...student,
//     name: student.name.toUpperCase()
//   }));
// }


// const Students = Names(students);
// console.log(Students);


// 13-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function Scores(studentsArray) {
//   return studentsArray.map(student => student.score);
// }


// const scores = Scores(students);
// console.log(scores);


// 14-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' }
// ];

// function Keys(obj) {
  
//   return Object.keys(obj);
// }


// const keys = Keys(students[0]);
// console.log('Birinchi o\'quvchining barcha kalitlari:', keys);


// 15-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// function addStudent(students, newStudent) {
  
//   const newStudents = students.slice();
  
//   newStudents.push(newStudent);
  
//   return newStudents;
// }


// const updatedStudents = addStudent(students, newStudent);
// console.log('Yangi ro\'yxat:');
// console.log(updatedStudents);


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// function addStudent(studentsArray, newStudent) {
//   return [...studentsArray, newStudent];
// }


// const updatedStudents = addStudent(students, newStudent);
// console.log(updatedStudents);


// 16-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function removeStudent(studentsArray, studentName) {
//   return studentsArray.filter(student => student.name !== studentName);
// }


// const updatedStudents = removeStudent(students, 'Bob');
// console.log(updatedStudents);


// 17-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];

// function checkAge(studentsArray) {
//   return studentsArray.every(student => student.age <= 20);
// }


// const Twenty = checkAge(students);
// console.log(`Barcha o'quvchilar yoshi 20 dan katta yoki kichik: ${Twenty}`);


// 18-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function getStatus(students) {

//   return students.map(student => student.status);
// }


// const statusList = getStatus(students);
// console.log('O\'quvchilar statuslari:');
// console.log(statusList);


// 19-masala



// 20-masala

