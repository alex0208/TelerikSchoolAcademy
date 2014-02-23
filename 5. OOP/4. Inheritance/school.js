function Human(fname, lname, age){
	this.fname = fname;
	this.lname = lname;
	this.age = age;
}

Human.prototype.introduce = function(){
	var properties = {};
	for(var key in this){
    	if(this.hasOwnProperty(key) && typeof this[key] !== 'function') {
        	properties[key] = this[key] ;
    	}
	}

	return properties;
}

Student.prototype = new Human();
Student.prototype.constructor = Student;
function Student(fname, lname, age, grade){
	Human.call(this, fname, lname, age);
	this.grade = grade;
}

Teacher.prototype = new Human();
Teacher.prototype.constructor = Teacher;
function Teacher(fname, lname, age, specialty){
	Human.call(this, fname, lname, age);
	this.specialty = specialty;
}

function SchoolClass(name, capacity, students, teacher){
	this.name = name;
	this.capacity = capacity;

	this.students = [];
	
	if(this.capacity > students.length)
		this.students = students;
	else{
		var i = 0;
		while(this.students.length < this.capacity)
			this.students.push(students[i++]);
	}
	this.teacher = teacher;
}

function School(name, town, classes){
	this.name = name;
	this.town = town;
	this.classes = classes || [];
}

