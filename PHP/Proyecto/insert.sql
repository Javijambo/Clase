use pc;
/*==========================MARCAS/PROVEEDORES=================================*/
insert into Proveedor values('Asus');
insert into Proveedor values('MSI');
insert into Proveedor values('ROG');
insert into Proveedor values('Kingston');
insert into Proveedor values('Intel');
insert into Proveedor values('AMD');
insert into Proveedor values('G.Skill');
insert into Proveedor values('AMD');
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



/*=================================CAJAS==================================== */ 
insert into caja(Imagen,Marca,Modelo,Precio) values('nzxtcaja.jpg','NZXT','H510 Rojo',79.99);
insert into caja(Imagen,Marca,Modelo,Precio) values('nzxtcaja2.jpg','NZXT','H510i ',109.99);
insert into caja(Imagen,Marca,Modelo,Precio) values('phantekcaja.jpg','Phanteks','Enthoo Evolv X ',209.99);
insert into caja(Imagen,Marca,Modelo,Precio) values('msicaja.jpg','MSI','MAG Vampiric 010',64.99);
insert into caja(Imagen,Marca,Modelo,Precio) values('cmcaja.jpg','Cooler Master','MasterCase H500P',159.61);
insert into caja(Imagen,Marca,Modelo,Precio) values('cmcaja2.jpg','Cooler Master','MasterBox');
insert into caja(Imagen,Marca,Modelo,Precio) values('corasircaja.jpg','Corsair','iCUE 220T RGB',99.99);
insert into caja(Imagen,Marca,Modelo,Precio) values('gigabytecaja.jpg','Aorus','Aorus AC300W',121.99 );
insert into caja(Imagen,Marca,Modelo,Precio) values('corsaircaja2.jpg','Corsair','Crystal 680X',249.99);
insert into caja(Imagen,Marca,Modelo,Precio) values('corsaircaja3.jpg','Corsair','Obsidian 1000D',154.99);

insert into  Procesador(Imagen,Marca,Socket,Modelo,Velocidad,Precio) values ('ryzen52.jpg','AMD','AM4','Ryzen 5 2600',3.4,134.99);
insert into  Procesador(Imagen,Marca,Socket,Modelo,Velocidad,Precio) values ('3600','AMD','AM4','Ryzen 5 3600',3.6,214.90); 
insert into  Procesador(Imagen,Marca,Socket,Modelo,Velocidad,Precio) values ('9900k','Intel','1151','Core i9-9900KS',3.6,489.99);
insert into  Procesador(Imagen,Marca,Socket,Modelo,Velocidad,Precio) values ('9900ks','Intel','1151','Core i9-9900KS',5.0,599.99);
insert into  Procesador(Imagen,Marca,Socket,Modelo,Velocidad,Precio) values ('i5','Intel','1151','Core i5-9600K',3.7,220.99);
insert into  Procesador(Imagen,Marca,Socket,Modelo,Velocidad,Precio) values ('i7','Intel','1151','Core i7-9700K',3.6,369.99);
insert into  Procesador(Imagen,Marca,Socket,Modelo,Velocidad,Precio) values ('ryzen7','AMD','AM4','Ryzen 7 3700X',3.6,357.99);

insert into Placa_Base(Imagen,Marca,Modelo,Socket,Tipo,Precio)values('gb450.jpg','Gigabyte','B450M DS3H','AM4','B450',65.99);
insert into Placa_Base(Imagen,Marca,Modelo,Socket,Tipo,Precio)values('gz390.jpg','Gigabyte','Z390 Gaming X','1151','Z390',139.90);
insert into Placa_Base(Imagen,Marca,Modelo,Socket,Tipo,Precio)values('x570.jpg','Gigabyte','X570 Aorus Elite','AM4','X570',214.99);
insert into Placa_Base(Imagen,Marca,Modelo,Socket,Tipo,Precio)values('mz390.jpg','MSI','Mpg Z390 Gaming Pro Carbon','1151','Z390',199.99);
insert into Placa_Base(Imagen,Marca,Modelo,Socket,Tipo,Precio)values('g450.jpg','Aorus','B450 AORUS Pro','AM4','B450',119.99);
insert into Placa_Base(Imagen,Marca,Modelo,Socket,Tipo,Precio)values('rogmax.jpg','ROG','Maximus XI Hero','1151','Z390',319.99);   

insert into Ram(Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('tridentz.jpg','G.Skill','Trident Z RGB DDR4 3200 PC4-25600 16GB 2x8GB CL16',3200,'16GB 2x8GB',113.69);
insert into Ram(Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('ball.jpg','Crucial','Ballistix Tactical Tracer DDR4 3000 PC4-24000 8GB CL16',3000,'8GB',59.99);
insert into Ram(Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('hyperx.jpg','Kingston','HyperX Predator RGB DDR4 3200MHz 16GB CL16',3200,'16GB',);
insert into Ram(Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('delta.jpg','Crucial','Team Group Delta White RGB DDR4 3000 PC4-24000 8GB 2x4GB CL16',3000,'8GB 2x4GB',49.00);
insert into Ram(Imagen,Marca,Modelo,Velocidad,Capacidad,Precio)values('vengance.jpg','Corsair','Vengeance LPX DDR4 3000 PC4-24000 16GB 2x8GB CL15',3000,'16GB 2x8GB',78.88);

insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('2080ti.jpg','Aorus','RTX','GeForce RTX 2080 Ti 11G GDDR6',1479.00); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('5580.jpg','Asus','RX 500','Dual Radeon RX580 OC Edition 4GB GDDR5',134.99); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('1660.jpg','Gigabyte','GTX','GeForce GTX 1660 OC 6GB GDDR5',239.99); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('2070s.jpg','Gigabyte','Super','GeForce RTX 2070 Super Windforce OC 3X 8GB GDDR6',549.99); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('2060s.jpg','MSI','Super','GeForce RTX 2060 Super Gaming X 8GB GDDR6',469.99); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('2060.jpg','Rog','RTX','Strix Gaming GeForce RTX 2060 OC 6GB GDDR6',459.99); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('1650.jpg','MSI','GTX','GeForce GTX 1650 Ventus XS 4GB OC GDDR5',176.99); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('590.jpg','MSI','RX 500','Radeon RX 590 Armor 8GB OC 8GB GDDR5',237.99); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('5700.jpg','Gigabyte','RX 5000','AMD Radeon RX 5700 XT Gaming OC 8GB GDDR6',449.99); 
insert into Grafica(Imagen,Marca,Serie,Modelo,Precio)values('2080s.jpg','Aorus','Super','GeForce RTX 2080 Super Waterforce 8 GB GDDR6',934.99); 

insert into Fuente_de_Alimentacion(Imagen,Marca,Modelo,Watios,Certificacion,Precio)values('rm70.jpg','Corsair','RM750 750W 80 Plus Gold Full Modular','80 Plus Gold',);