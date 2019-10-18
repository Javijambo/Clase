function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
      this.name = name;
    }
  }
  
  var p = new person("David", 21);
  document.write(p.name);
  p.changeName("John");
  document.write(p.name);
  //Ahora p.name tiene el valor de "John"