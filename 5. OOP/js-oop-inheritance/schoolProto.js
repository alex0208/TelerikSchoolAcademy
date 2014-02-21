//make sure Object.create works everywhere
if(!Object.create){
	Object.create = function(obj){
		function f(){};
		f.prototype = obj;
		return new f();
	}
}

//inheritance function
Object.prototype.extend = function(props){
	function f(){};
	f.prototype = Object.create(this);

	for(var p in props)
		f.prototype[p] = props[p];

	f.prototype.parent = this;
	return new f();
}

var Human = {
	fname : "",
	lname : "",
	age : "",
	introduce : function(){
		var properties = {};
		for(var key in this){
    		if(this.hasOwnProperty(key) && typeof this[key] !== 'function') {
        		properties[key] = this[key] ;
    		}
		}

		return properties;
	},
	init : function(fname, lname, age){
		this.fname = fname;
		this.lname = lname;
		this.age = age;
	}
}

var Student = Human.extend({
	grade : "",
	init : function(fname, lname, age, grade){
		Human.init.apply(this, arguments);
		this.grade = grade;
	}
});

var Teacher = Human.extend({
	specialty : "",
	init : function(lname, fname, age, specialty){
		Human.init.apply(this, arguments);
		this.specialty = specialty;
	}
});

var SchoolClass = {
	name : "",
	capacity : 0,
	students : [],
	teacher : {},
	init : function(name, capacity, students, teacher){
		this.name = name;
		this.capacity = capacity;

		if(this.capacity > students.length)
			this.students = students;
		else{
			var i = 0;
			while(this.students.length < this.capacity)
				this.students.push(students[i++]);
		}

		this.teacher = teacher;
	}
}

var School = {
	name : "",
	town : "",
	classes : [],
	init : function(name, town, classes){
		this.name = name;
		this.town = town;
		this.classes = classes || [];
	}
}

