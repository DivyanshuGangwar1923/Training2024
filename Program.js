var Person = /** @class */ (function () {
    function Person(a, n) {
        this.Age = a;
        this.Name = n;
    }
    Person.prototype.display = function () {
        console.log(this.Age, this.Name);
    };
    return Person;
}());
var objPerson = new Person(21, "Divs");
objPerson.display();
var objPerson1 = new Person(21, "Divs");
objPerson1.display();
