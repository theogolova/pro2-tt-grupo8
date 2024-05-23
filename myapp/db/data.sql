CREATE DATABASE IF NOT EXISTS databaseproyecto;
USE databaseproyecto;

CREATE TABLE Usuarios (
/* Nombrecolumna   Tipodato     Restricciones */
Id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuarios_id INT,
email VARCHAR(250) NOT NULL,
contraseña VARCHAR(250) NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL,
foto_perfil VARCHAR(250) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE Productos (
/* Nombrecolumna   Tipodato     Restricciones */ 
Id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
productos_id INT,
clienteId INT UNSIGNED,
nombre_foto VARCHAR(250) NOT NULL,
nombre_prod VARCHAR(250) NOT NULL, 
descripcion_prod VARCHAR(250) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (clienteId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    Id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    productoId INT UNSIGNED,
    usuarioId INT UNSIGNED,
    comentario VARCHAR(250) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (productoId) REFERENCES Productos(Id),
    FOREIGN KEY (usuarioId) REFERENCES Usuarios(Id)
);


INSERT INTO Usuarios (usuarios_id, email, contraseña, fecha, dni, foto_perfil)
VALUES 
(1, 'pepito@udesa.edu.ar', '123', '1940-05-07', 46123804, '/images/users/pepito.png'),
(2, 'messi@gmail.com', '456', '2010-10-10', 10294852, '/images/users/messi.png'),
(3, 'julian@udesa.edu.ar', '789', '2011-11-11', 46223904, '/images/users/julian.png'),
(4, 'enzo@udesa.edu.ar', '181', '1990-01-01', 9987204, '/images/users/enzo.png'),
(5, 'gallardo@udesa.edu.ar', '912', '2018-09-12', 4612304, '/images/users/gallardo.png');

INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES 
(1, 'https://images.footlocker.com/is/image/EBFL2/N5031100_01?wid=504&hei=504&fmt=png-alpha', 'Nike Jordan', 'Zapatillas Nike Air Jordan');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(2, 'https://images.footlocker.com/is/image/EBFL2/N7175630_a1?wid=504&hei=504&fmt=png-alpha', 'Nike SB', 'Zapatillas Nike SB');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(3, 'https://images.footlocker.com/is/image/EBFL2/8480002_a1?wid=504&hei=504&fmt=png-alpha', 'Nike Air Max Plus', 'Zapatillas Nike Air Max Plus');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(4, 'https://images.footlocker.com/is/image/EBFL2/04133050_a1?wid=504&hei=504&fmt=png-alpha', 'Nike Air Max Plus Black', 'Zapatillas Nike SB');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(5, 'https://images.footlocker.com/is/image/EBFL2/M0032402_a1?wid=504&hei=504&fmt=png-alpha', 'Nike Air Max Plus Blue', 'Zapatillas Nike SB');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(6, 'https://images.footlocker.com/is/image/EBFL2/IG9030_a1?wid=504&hei=504&fmt=png-alpha', 'Adidas Samba', 'Zapatillas Adidas Samba');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(7, 'https://images.footlocker.com/is/image/EBFL2/IF7161_a1?wid=504&hei=504&fmt=png-alpha', 'Adidas Gazelle', 'Zapatillas Adidas Gazelle');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(8, 'https://images.footlocker.com/is/image/EBFL2/2698494_a1?wid=504&hei=504&fmt=png-alpha', 'On Running', 'Zapatillas On Running');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(9, 'https://images.footlocker.com/is/image/EBFL2/W2288111_a1?wid=504&hei=504&fmt=png-alpha', 'Nike Airforce 1', 'Zapatillas Nike Airforce One');
INSERT INTO productos (productos_id, nombre_foto, nombre_prod, descripcion_prod)
VALUES
(10, 'https://images.footlocker.com/is/image/EBFL2/39764703_a1?wid=504&hei=504&fmt=png-alpha', 'Puma Palermo', 'Zapatillas Puma Palermo');


INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(1, 1, '¡Estas zapatillas son increíbles!'),
(1, 2, 'Me encanta el diseño de estas zapatillas.'),
(1, 3, 'Espectaculares zapatillas!');
INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(2, 1, "No me gustó mucho su diseño" ),
(2, 2, " Maravillosas y comodas" ),
(2, 3, "A pesar del precio y su diseño antiguo, muy buenas!" );

INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(1, 1, '¡Estas zapatillas son increíbles!'),
(1, 2, 'Me encanta el diseño de estas zapatillas.'),
(1, 3, 'Espectaculares zapatillas!');

INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(4, 1, 'Bonito diseño'),
(4, 2, 'Buena calidad'),
(4, 3, 'Estas zapatillas son muy cómodas');

INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(5, 1, 'Gran elección'),
(5, 2, 'Me encanta el color'),
(5, 3, 'Zapatillas muy versátiles');

INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(6, 1, 'Muy cómodas'),
(6, 2, 'Excelente calidad'),
(6, 3, 'Estas zapatillas son perfectas para mí');

INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(7, 1, 'Estas zapatillas son clásicas'),
(7, 2, 'Me gustaría tenerlas en todos los colores'),
(7, 3, 'Son muy cómodas');

INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(8, 1, 'Buenas zapatillas para correr'),
(8, 2, 'Excelente amortiguación'),
(8, 3, 'Me encanta el diseño');

INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(9, 1, 'Estas zapatillas son muy versátiles'),
(9, 2, 'Perfectas para cualquier ocasión'),
(9, 3, 'Las recomiendo');

INSERT INTO comentarios (productoId, usuarioId, comentario)
VALUES 
(10, 1, 'Muy cómodas'),
(10, 2, 'Buen diseño'),
(10, 3, 'Excelente calidad');

