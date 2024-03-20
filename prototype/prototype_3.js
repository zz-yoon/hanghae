function Work(indicator) { 
    this._indicator = indicator ?? 0;
}

Worker.prototype.start = function () { 
    setInterval(() => {
        this._indicator += 10;
        this._draw();
    }, 1000);
}

Work.prototype._draw = function () { }

function WorkA() { Work.call(this, 10); }

WorkA.prototype = Object.create(Work.prototype, {});
WorkA.prototype._draw = function () { }

function WorkB() { Work.call(this, 10); }

WorkB.prototype = Object.create(Work.prototype, {});
WorkB.prototype._draw = function () { };

const workA = new WorkA();
const workB = new WorkB();

workA.start();
workB.start();




