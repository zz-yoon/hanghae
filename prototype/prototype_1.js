<<<<<<< HEAD
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2;

var o = new Sub();
o.ultraProp = 1;
=======
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2;

var o = new Sub();
o.ultraProp = 1;
>>>>>>> e68eebb14e6f231ca829776a83fa555a562a8471
console.log(o.ultraProp);