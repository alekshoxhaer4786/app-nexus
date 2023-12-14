/*
Filename: ComplexCode.js
Content: A complex JavaScript program that performs various operations on a data structure representing a university student information system.
*/

// Student class representing a university student
class Student {
  constructor(name, id, major) {
    this.name = name;
    this.id = id;
    this.major = major;
    this.courses = [];
  }

  enrollCourse(course) {
    this.courses.push(course);
  }

  getCoursesCount() {
    return this.courses.length;
  }

  getCourseList() {
    return this.courses;
  }
}

// Course class representing a university course
class Course {
  constructor(name, code, instructor) {
    this.name = name;
    this.code = code;
    this.instructor = instructor;
  }
}

// University class representing the university student information system
class University {
  constructor(name) {
    this.name = name;
    this.students = [];
  }

  registerStudent(student) {
    this.students.push(student);
  }

  getStudentCount() {
    return this.students.length;
  }

  getStudentList() {
    return this.students;
  }

  getCourseCount() {
    let courseCount = 0;
    for (let student of this.students) {
      courseCount += student.getCoursesCount();
    }
    return courseCount;
  }

  getCourseList() {
    let courseList = [];
    for (let student of this.students) {
      courseList.push(...student.getCourseList());
    }
    return courseList;
  }

  getCourseDetails(courseCode) {
    for (let student of this.students) {
      for (let course of student.getCourseList()) {
        if (course.code === courseCode) {
          return course;
        }
      }
    }
    return null;
  }
}

// Example usage of the university student information system
const university = new University("My University");

const student1 = new Student("John Doe", "001", "Computer Science");
const student2 = new Student("Jane Smith", "002", "Mathematics");

const course1 = new Course("Introduction to Computer Science", "CS101", "Prof. Johnson");
const course2 = new Course("Calculus I", "MATH101", "Prof. Jackson");

student1.enrollCourse(course1);
student1.enrollCourse(course2);
student2.enrollCourse(course1);

university.registerStudent(student1);
university.registerStudent(student2);

console.log("University Name:", university.name);
console.log("Number of Students:", university.getStudentCount());
console.log("Number of Courses:", university.getCourseCount());
console.log("Course Details (CS101):", university.getCourseDetails("CS101"));