// superClass
class Person {
  constructorna(name, quirkyFact) {
    this.name = name;
    this.quirkyfact = this.quirkyfact;
  }
  // bio
  bio() {
    return `My name is ${this.name} , and here\'s my quirky fact : ${
      this.quirkyfact
    } .`;
  }
}

// students

class Student extends Person {
  enrollStudent(cohort) {
    this.cohort = cohort;
  }
}

// mentor

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }
  goOffShift() {
    this.onShift = false;
  }
}
