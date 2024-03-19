function Person(name) { 
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function () { 
    return 'My name is' + this.name;
}

var p1 = new Person('yoon');
console.log(p1);
console.log(p1.introduce());

function Ultra() {}
Ultra.prototype.ultraProp = true;

// console.log(Person.prototype);
// console.log(Person.prototype.name);
function Person(name) { 
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function () { 
    return 'My name is' + this.name;
}

var p1 = new Person('yoon');
console.log(p1);
console.log(p1.introduce());

function Ultra() {}
Ultra.prototype.ultraProp = true;

// console.log(Person.prototype);
// console.log(Person.prototype.name);
// console.log(Ultra.prototype);