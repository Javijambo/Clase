function Animal(nombre, especie, numPatas, cola) {
    this.nombre = nombre;
    this.especie = especie;
    this.numPatas = numPatas;
    this.cola = cola;
    
    this.getNombre = function () {
        return this.nombre;
    }
    
    this.setNombre = function (nombre) {
        this.nombre = nombre;
    }
    function Vaca(nombre, especie, numPatas, cola, leche) {
        Animal.call(this, nombre, especie, numPatas, cola);
        this.leche = leche;
        
        
        Vaca.prototype.ordeñar = function (leche) {
            this.leche = this.leche - 1;
        }
        
        Vaca.prototype.getLeche = function () {
            return this.leche;
        }
        
            Vaca.prototype.setLeche = function (leche) {
                this.leche = leche;
            }
        
        }
        
        Vaca.prototype = new Animal();
        
        function Tigre(nombre, especie, numPatas, cola, numVictimas) {
        Animal.call(this, nombre, especie, numPatas, cola);
        this.numVictimas = numVictimas;
        igre.prototype.getNumVictimas = function () {
            return this.numVictimas;
        }
        
        Tigre.prototype.setNumVictimas = function (numVictimas) {
            this.numVictimas = numVictimas;
        }
        
        Tigre.prototype.comerPersonas = function (numVictimas) {
            this.numVictimas = this.numVictimas + 1;
        }
        }
        
        Tigre.prototype = new Animal();
    }