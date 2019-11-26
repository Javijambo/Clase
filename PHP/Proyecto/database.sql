drop database if exists Alvaro;
create database Alvaro;
use Alvaro;
CREATE TABLE Clientes
(
  IdCliente INT auto_increment,
  Nombre varCHAR(15) NOT NULL,
  Apellidos varCHAR(40) NOT NULL,
  Id_Pedido INT ,
  DNI INT NOT NULL,
  PRIMARY KEY (IdCliente)
);

CREATE TABLE Proveedor
(
  Marca varchar(50) NOT NULL,
  PRIMARY KEY (Marca)
);

CREATE TABLE Torre (
    IdTorre varchar(5),
    Imagen varchar(50) NOT NULL,
    Marca varchar(50) NOT NULL,
    Modelo varchar(50) NOT NULL,
    Precio DECIMAL(13 , 2 ) NOT NULL,
    Stock INT default 5,
    PRIMARY KEY (IdTorre),
    FOREIGN KEY (Marca)
    
    REFERENCES Proveedor (Marca)
);

CREATE TABLE CPU
(
  IdCPU varchar(5),
  Imagen text not null,
  Modelo varchar(50) NOT NULL,
  Precio DECIMAL(13,2) NOT NULL,
  Marca varchar(50) NOT NULL,
  Velocidad decimal(5,1),
  Stock INT default 5,

  PRIMARY KEY (IdCPU),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE Ram
(
  IdRam varchar(5),
  Imagen text not null,
  Velocidad INT NOT NULL,
  Modelo varchar(70) NOT NULL,
  Capacidad  SET('8GB 2x4GB','8GB','16Gb 2x8GB','16GB') NOT NULL,
  Precio  DECIMAL(13,2) NOT NULL,
  Marca varchar(50) NOT NULL,
  Stock INT default 5,

  PRIMARY KEY (IdRam),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE GPU
(
  IdGPU varchar(5),
  Imagen text not null,
  Modelo varchar(50) NOT NULL,
  Serie set('RTX','GTX','RX 5000','RX 500','Super') NOT NULL,
  Precio  DECIMAL(13,2) NOT NULL,
  Marca varchar(50) NOT NULL,
  Stock INT default 5,

  PRIMARY KEY (IdGPU),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE MB
(
  IdMB varchar(5),
  Imagen text not null,
  Modelo varchar(50) NOT NULL,
  Tipo Set('B450','Z390','X570'),
  socket Set('AM4','1151') NOT NULL,
  Precio  DECIMAL(13,2) NOT NULL,
  Marca varchar(50) NOT NULL,
  PRIMARY KEY (IdMB),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE PSU
(
  IdPSU varchar(5),
  Imagen text not null,
  Modelo varchar(50) not null,
  Watios INT NOT NULL,
  Certificacion  SET('80 Plus Bronze','80 Plus Silver','80 Plus Gold','80 Plus Platinum') NOT NULL,
  Precio  DECIMAL(13,2) NOT NULL,
  Marca varchar(50) NOT NULL,
  Stock INT default 5,

  PRIMARY KEY (IdPSU),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE Disco
(
  IdDisco varchar(5),
  Imagen text not null,
  Modelo varchar(50) not null,
  Tipo set('SSD','HDD','M.2') NOT NULL,
  Capacidad INT NOT NULL,
  Precio DECIMAL(13,2) NOT NULL,
  Marca varchar(50) NOT NULL,
  Stock INT default 5,

  PRIMARY KEY (IdDisco),
  FOREIGN KEY (Marca) REFERENCES Proveedor(Marca)
);

CREATE TABLE Pedido
(
  IdPedido INT auto_increment,
  Fecha_Pedido INT NOT NULL,
  IdCliente INT NOT NULL,
  IdComponentes longtext NOT NULL,
  Total DECIMAL(13,2),
  PRIMARY KEY (IdPedido),
  FOREIGN KEY (IdCliente) REFERENCES Clientes(IdCliente)
);



/*==========================MARCAS/PROVEEDORES=================================*/
insert into Proveedor values('Asus');
insert into Proveedor values('MSI');
insert into Proveedor values('ROG');
insert into Proveedor values('Kingston');
insert into Proveedor values('Intel');
insert into Proveedor values('AMD');
insert into Proveedor values('G.Skill');
insert into Proveedor values('NZXT');
insert into Proveedor values('Seagate'); 
insert into Proveedor values('Samsung');
insert into Proveedor values('Corsair');
insert into Proveedor values('EVGA');
insert into Proveedor values('Nvidia');
insert into Proveedor values('Bitfenix');
insert into Proveedor values('Lian li');
insert into Proveedor values('Cooler Master');
insert into Proveedor values('Phanteks');
insert into Proveedor values('Aorus');
insert into Proveedor values('Crucial');
insert into Proveedor values('Gigabyte');


/*=================================TorreS==================================== */ 
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t01','nzxtcaja.jpg','NZXT','H510 Rojo',79.99);
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t02','nzxtcaja2.jpg','NZXT','H510i ',109.99);
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t03','phantekcaja.jpg','Phanteks','Enthoo Evolv X ',209.99);
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t04','msicaja.jpg','MSI','MAG Vampiric 010',64.99);
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t05','cmcaja.jpg','Cooler Master','MasterCase H500P',159.61);
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t06','cmcaja2.jpg','Cooler Master','MasterBox',47.95);
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t07','corsaircaja.jpg','Corsair','iCUE 220T RGB',99.99);
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t08','gigabytecaja.jpg','Aorus','Aorus AC300W',121.99 );
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t09','corsaircaja2.jpg','Corsair','Crystal 680X',249.99);
insert into Torre(IdTorre,Imagen,Marca,Modelo,Precio) values('t10','corsaircaja3.jpg','Corsair','Obsidian 1000D',154.99);


/*=================================CPU==================================== */ 
insert into  CPU(IdCPU,Imagen,Marca,Modelo,Velocidad,Precio) values ('c01','ryzen52.jpg','AMD','Ryzen 5 2600',3.4,134.99);
insert into  CPU(IdCPU,Imagen,Marca,Modelo,Velocidad,Precio) values ('c02','3600','AMD','Ryzen 5 3600',3.6,214.90); 
insert into  CPU(IdCPU,Imagen,Marca,Modelo,Velocidad,Precio) values ('c03','9900k','Intel','Core i9-9900KS',3.6,489.99);
insert into  CPU(IdCPU,Imagen,Marca,Modelo,Velocidad,Precio) values ('c04','9900ks','Intel','Core i9-9900KS',5.0,599.99);
insert into  CPU(IdCPU,Imagen,Marca,Modelo,Velocidad,Precio) values ('c05','i5','Intel','Core i5-9600K',3.7,220.99);
insert into  CPU(IdCPU,Imagen,Marca,Modelo,Velocidad,Precio) values ('c06','i7','Intel','Core i7-9700K',3.6,369.99);
insert into  CPU(IdCPU,Imagen,Marca,Modelo,Velocidad,Precio) values ('c07','ryzen7','AMD','Ryzen 7 3700X',3.6,357.99);


/*=================================PLACA BASE==================================== */ 
insert into MB(IdMB,Imagen,Marca,Modelo,Socket,Tipo,Precio)values('m01','gb450.jpg','Gigabyte','B450M DS3H','AM4','B450',65.99);
insert into MB(IdMB,Imagen,Marca,Modelo,Socket,Tipo,Precio)values('m02','gz390.jpg','Gigabyte','Z390 Gaming X','1151','Z390',139.90);
insert into MB(IdMB,Imagen,Marca,Modelo,Socket,Tipo,Precio)values('m03','x570.jpg','Gigabyte','X570 Aorus Elite','AM4','X570',214.99);
insert into MB(IdMB,Imagen,Marca,Modelo,Socket,Tipo,Precio)values('m04','mz390.jpg','MSI','Mpg Z390 Gaming Pro Carbon','1151','Z390',199.99);
insert into MB(IdMB,Imagen,Marca,Modelo,Socket,Tipo,Precio)values('m05','g450.jpg','Aorus','B450 AORUS Pro','AM4','B450',119.99);
insert into MB(IdMB,Imagen,Marca,Modelo,Socket,Tipo,Precio)values('m06','rogmax.jpg','ROG','Maximus XI Hero','1151','Z390',319.99);   


/*=================================RAM==================================== */ 
insert into Ram(IdRam,Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('r01','tridentz.jpg','G.Skill','Trident Z RGB DDR4 3200 PC4-25600 16GB 2x8GB CL16',3200,'16GB 2x8GB',113.69);
insert into Ram(IdRam,Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('r02','ball.jpg','Crucial','Ballistix Tactical Tracer DDR4 3000 PC4-24000 8GB CL16',3000,'8GB',59.99);
insert into Ram(IdRam,Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('r03','hyperx.jpg','Kingston','HyperX Predator RGB DDR4 3200MHz 16GB CL16',3200,'16GB',113.70);
insert into Ram(IdRam,Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('r04','delta.jpg','Crucial','Team Group Delta White RGB DDR4 3000 PC4-24000 8GB 2x4GB CL16',3000,'8GB 2x4GB',49.00);
insert into Ram(IdRam,Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('r05','vengance.jpg','Corsair','Vengeance LPX DDR4 3000 PC4-24000 16GB 2x8GB CL15',3000,'16GB 2x8GB',78.88);


/*=================================GPU==================================== */ 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g01','2080ti.jpg','Aorus','RTX','GeForce RTX 2080 Ti 11G GDDR6',1479.00); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g02','5580.jpg','Asus','RX 500','Dual Radeon RX580 OC Edition 4GB GDDR5',134.99); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g03','1660.jpg','Gigabyte','GTX','GeForce GTX 1660 OC 6GB GDDR5',239.99); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g04','2070s.jpg','Gigabyte','Super','GeForce RTX 2070 Super Windforce OC 3X 8GB GDDR6',549.99); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g05','2060s.jpg','MSI','Super','GeForce RTX 2060 Super Gaming X 8GB GDDR6',469.99); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g06','2060.jpg','Rog','RTX','Strix Gaming GeForce RTX 2060 OC 6GB GDDR6',459.99); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g07','1650.jpg','MSI','GTX','GeForce GTX 1650 Ventus XS 4GB OC GDDR5',176.99); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g08','590.jpg','MSI','RX 500','Radeon RX 590 Armor 8GB OC 8GB GDDR5',237.99); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g09','5700.jpg','Gigabyte','RX 5000','AMD Radeon RX 5700 XT Gaming OC 8GB GDDR6',449.99); 
insert into GPU(IdGPU,Imagen,Marca,Serie,Modelo,Precio)values('g10','2080s.jpg','Aorus','Super','GeForce RTX 2080 Super Waterforce 8 GB GDDR6',934.99); 


/*=================================PSU==================================== */ 
insert into PSU(IdPSU,Imagen,Marca,Modelo,Watios,Certificacion,Precio)values('p01','rm70.jpg','Corsair','RM750 750W 80 Plus Gold Full Modular',750,'80 Plus Gold',99.99);
insert into PSU(IdPSU,Imagen,Marca,Modelo,Watios,Certificacion,Precio)values('p02','cmps.jpg','Cooler Master','MWE Bronze 650 650W 80 Plus Bronze',650,'80 Plus Bronze',59.99);
insert into PSU(IdPSU,Imagen,Marca,Modelo,Watios,Certificacion,Precio)values('p03','evgaps.jpg','EVGA','Supernova G3 750W 80 Plus Gold Modular',750,'80 Plus Gold',136.99);
insert into PSU(IdPSU,Imagen,Marca,Modelo,Watios,Certificacion,Precio)values('p04','1200.jpg','Corsair','HX1200 1200W 80 Plus Platinum Modular',1200,'80 Plus Platinum',224.99);


/*=================================SSD==================================== */ 
insert into Disco(IdDisco,Imagen,Marca,Modelo,Tipo,Capacidad,Precio)values('d01','kingston.jpg','Kingston',' A400 SSD 240GB','SSD',240,32.99);
insert into Disco(IdDisco,Imagen,Marca,Modelo,Tipo,Capacidad,Precio)values('d02','samsung1.jpg','Samsung','860 EVO Basic SSD 500GB SATA3','SSD',500,81.99);
insert into Disco(IdDisco,Imagen,Marca,Modelo,Tipo,Capacidad,Precio)values('d03','samsung2.jpg','Samsung','970 EVO Plus 500GB SSD NVMe M.2','M.2',500,124.99);
insert into Disco(IdDisco,Imagen,Marca,Modelo,Tipo,Capacidad,Precio)values('d04','seagate.jpg','Seagate','BarraCuda 3.5" 1TB SATA3','HDD',1000,38.50);
insert into Disco(IdDisco,Imagen,Marca,Modelo,Tipo,Capacidad,Precio)values('d05','seagate2.jpg','Seagate','IronWolf NAS 4TB SATA3','HDD',4000,118.90);
insert into Disco(IdDisco,Imagen,Marca,Modelo,Tipo,Capacidad,Precio)values('d06','crucial.jpg','Crucial','Crucial MX500 M.2 2280 500GB','SSD',500,78.99); 


