// Create the student object
const student = {
  name: "John Doe",
};
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Example usage
const keys = student.getKeys();
console.log(keys); // Output: ['name']
