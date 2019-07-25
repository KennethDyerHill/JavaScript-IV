// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
    this.name = attrs.Name,
    this.age = attrs.Age,
    this.location = attrs.Location
}
speak() {
    console.log(`{Hello my name is ${this.name}, I am from ${this.location}.}`);
}
};

class Instructors extends Person {
    constructor(attrs) {
        super(attrs),
        this.specialty = attrs.specialty,
        this.favLanguage = attrs.FavLanguage,
        this.catchPhrase = attrs.CatchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(studentName, subject) {
        console.log(`${studentName.name} receives a perfect score on ${subject}.`);
};
};

class Students extends Person {
    constructor(attrs) {
        super(attrs),
        this.previousBackground = attrs.PreviousBackground,
        this.className = attrs.ClassName,
        this.favSubjects = attrs.FavSubjects
    }
    listSubjects() {
            this.favSubjects.forEach(function(i){console.log(i)});
    }
    PRAssignment(subject) {
    console.log( `${studentName.name} has submitted a PR for ${subject}.`)
    };
    sprintChallenge(subject) {
        console.log(`${studentName.name} has begun sprint challenge on ${subject}.`)
};
};

class ProjectManagers extends Instructors {
    constructor(attrs) {
        super(attrs),
        this.gradClassName = attrs.GradClassName,
        this.favInstructor = attrs.FavInstructor
    };
    standUp() {
        console.log(`${this.name} announces to ${channel}, @channel standy times!.`)
    };
    debugsCode() {
        console.log(`${this.name} debugs ${studentName.name}'s code on ${subject}.`)
    };
};

const studentOne = new Students ({
    name: 'Link',
    age: 'Unknown',
    location: 'Highrule'
});

const instructorOne = new Instructors ({

});

console.log({instructorOne,studentOne});
instructorOne.demo("Python");
instructorOne.grade(studentOne, "Python");
studentOne.listsSubjects();
studentOne.PRAssignment("JavaScript");
studentOne.sprintChallenge("Web Design");
// teamLead.standUp("#WEB22_seth");
// teamLead.debugsCode(student,"JavaScript");