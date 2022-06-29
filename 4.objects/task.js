function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {

  if(this.marks === undefined) {
    this.marks = [mark];

  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  this.marks = mark
}

Student.prototype.getAverage = function () {
 
  let sum = 0;
  for (var i = 0; i < this.marks.length; i++) {
   sum += this.marks[i]
  }
    return sum / this.marks.length
}

Student.prototype.exclude = function (reason) {

  delete this.subject;
  delete this.marks;
  this.excluded = reason;
} 

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')

console.log(student1); 
console.log(student2);

console.log(student1.getAverage()); // 4.666666666666667
