drop database if exists pc;
create database pc;
use pc;
CREATE TABLE Clientes
(
  IdCliente INT auto_increment,
  Nombre CHAR(10) NOT NULL,
  Apellidos CHAR(15) NOT NULL,
  Id_Pedido INT ,
  DNI INT NOT NULL,
  PRIMARY KEY (IdCliente)
);

CREATE TABLE Proveedor
(
  Marca CHAR NOT NULL,
  PRIMARY KEY (Marca)
);

CREATE TABLE Caja (
    IdCaja INT AUTO_INCREMENT,
    Imagen VARCHAR(30) NOT NULL,
    Marca CHAR NOT NULL,
    Modelo VARCHAR(20) NOT NULL,
    Precio DECIMAL(13 , 2 ) NOT NULL,
    PRIMARY KEY (IdCaja),
    FOREIGN KEY (Marca)
        REFERENCES Proveedor (Marca)
);

CREATE TABLE Procesador
(
  IdProcesador INT auto_increment,
  Imagen text not null,
  Socket INT NOT NULL,
  Modelo CHAR NOT NULL,
  Precio DECIMAL(13,2) NOT NULL,
  Marca CHAR NOT NULL,
  Velocidad decimal(1,1),
  PRIMARY KEY (IdProcesador),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE Ram
(
  IdRam INT auto_increment,
  Imagen text not null,
  Velocidad INT NOT NULL,
  Modelo VARCHAR(20) NOT NULL,
  Capacidad  SET('8GB 2x4GB','8GB','16Gb 2x8GB','16GB') NOT NULL,
  Precio  DECIMAL(13,2) NOT NULL,
  Marca CHAR NOT NULL,
  PRIMARY KEY (IdRam),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE Grafica
(
  IdGrafica INT auto_increment,
  Imagen text not null,
  Modelo VARCHAR(20) NOT NULL,
  Serie set('RTX','GTX','RX 5000','RX 500','Super') NOT NULL,
  Precio  DECIMAL(13,2) NOT NULL,
  Marca CHAR NOT NULL,
  PRIMARY KEY (IdGrafica),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE Placa_base
(
  IdPlaca INT auto_increment,
  Imagen text not null,
  Modelo VARCHAR(20) NOT NULL,
  Tipo Set('B450','Z390','X570')
  Socket Set('1150','1151','AM4') NOT NULL,
  Precio  DECIMAL(13,2) NOT NULL,
  Marca VARCHAR(20) NOT NULL,
  PRIMARY KEY (IdPlaca),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE Fuente_de_Alimentacion
(
  IdFuente INT auto_increment,
  Imagen text not null,
  Modelo varchar(30) not null,
  Watios INT NOT NULL,
  Certificacion  SET('80 Plus Bronze','80 Plus Silver','80 Plus Gold','80 Plus Titanuim') NOT NULL,
  Precio  DECIMAL(13,2) NOT NULL,
  Marca Varchar(20) NOT NULL,
  PRIMARY KEY (IdFuente),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE Disco
(
  IdDisco INT auto_increment,
  Imagen text not null,
  Tipo set('SSD','HDD') NOT NULL,
  Nombre VARCHAR(20) NOT NULL,
  Capacidad INT NOT NULL,
  Precio DECIMAL(13,2) NOT NULL,
  Marca varchar(20) NOT NULL,
  PRIMARY KEY (IdDisco),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE PC
(
  Imagen vARCHAR(30) not null,
  IdPedido INT auto_increment,
  Fecha_Pedido INT NOT NULL,
  IdCliente INT NOT NULL,
  IdProcesador INT NOT NULL,
  IdGrafica INT NOT NULL,
  IdPlaca INT NOT NULL,
  IdDisco INT NOT NULL,
  IdRam INT NOT NULL,
  IdFuente INT NOT NULL,
  IdCaja INT NOT NULL,
  Total DECIMAL(13,2),
  PRIMARY KEY (IdPedido),
  FOREIGN KEY (IdCliente) REFERENCES Clientes(IdCliente),
  FOREIGN KEY (IdProcesador) REFERENCES Procesador(IdProcesador),
  FOREIGN KEY (IdGrafica) REFERENCES Grafica(IdGrafica),
  FOREIGN KEY (IdPlaca) REFERENCES Placa_base(IdPlaca),
  FOREIGN KEY (IdDisco) REFERENCES Disco(IdDisco),
  FOREIGN KEY (IdRam) REFERENCES Ram(IdRam),
  FOREIGN KEY (IdFuente) REFERENCES Fuente_de_Alimentacion(IdFuente),
  FOREIGN KEY (IdCaja,Imagen) REFERENCES Caja(IdCaja,Imagen)
);