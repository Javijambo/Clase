function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2019 - this.age;
  }
  
  var p = new person("A", 22);
  document.write(p.yearOfBirth());
  // Muestra el año de nacimiento 1997