const students =  { name: "Charlie", age: 28, work: "manager" }


// Add the 'do' method to the prototype once
Object.prototype.do = function() {
    console.log(`${this.name} is doing ${this.work} job at the age of ${this.age}`);
};

// Loop through the array and call 'do' for each object
students.do()
