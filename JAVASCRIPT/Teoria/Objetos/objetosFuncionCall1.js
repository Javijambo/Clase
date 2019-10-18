var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  fullname2: function(){
    return this.lastName + " " +this.firstName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
person.fullName.call(person1);  // Muestra "John Doe". Aquí el objeto que actua como this es person1
person.fullName.call(person2);  // Muestra "Mary Doe". En este caso, quién actua como this es person2
person.fullname2.call(person2);