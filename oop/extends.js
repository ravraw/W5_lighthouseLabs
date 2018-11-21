// superClass
class Person {
  constructor(name, email, quirkyFact) {
    this.name = name;
    this.email = email;
    this.quirkyFact = quirkyFact;
  }
  // bio
  bio() {
    return `My name is ${this.name} , and here\'s my quirky fact : ${
      this.quirkyFact
    } . ${this.location ? `i live in ${this.location}.` : ''}`;
  }
}

// students

class Student extends Person {
  constructor(name, email, quirkyFact, location) {
    super(name, email, quirkyFact);
    this.location = location;
  }
  myLocation() {
    return this.location;
  }
  enrollStudent(cohort) {
    this.cohort = cohort;
  }
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

// mentor

class Mentor extends Person {
  // constructor(name, email, quirkyFact) {
  //   super(name, email, quirkyFact);
  // }
  goOnShift() {
    this.onShift = true;
  }
  goOffShift() {
    this.onShift = false;
  }
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

// student instences

student1 = new Student('rav', 'rav@gmail.com', 'shrimp breeder', 'calgary');
student2 = new Student('raw', 'raw@gmail.com', 'Juggler', 'calgary');
student3 = new Student('ravraw', 'ravraw@gmail.com', 'Hunter', 'calgary');

// student mentor instences

mentor1 = new Mentor('Hafiz', 'hafiz@gmail.com', 'hip-hop enthusiast');
mentor2 = new Mentor('Lee', 'lee@gmail.com', 'loves to bbq');
mentor3 = new Mentor('Joel', 'joel@gmail.com', 'loves dark chocolate');

console.log(student1.bio());
console.log(student2.bio());
console.log(student3.bio());

console.log(mentor1.bio());
console.log(mentor2.bio());
console.log(mentor3.bio());
