use SistemaPracticantes;

insert into TipoPersona(tipo) values('coordinador'),('estudiante'),('administrador'),('empresa'),('profesor');
insert into CatalagoEvento(nombre) values('Charla'),('Taller'),('Vinculación con la empresa');

select * from tipopersona;
select * from catalagoEvento;

insert into persona(cedula,nombre,apellido,segundoapellido,sexo,tipopersona)
values (116710731,'Alvaro', 'Castro', 'Venegas', 'masculino',2),
		(111900849,'Adriana', 'Alvarez', 'Figueroa', 'femenino',1),
        (204800084,'Marcia', 'Venegas', 'Gamboa', 'femenino',4)
;

select * from persona;

insert into Usuario(nombreusuario,contraseña,cedula)
values ('acastrov','sha1$967c350c$1$77c4f72890f4d95a73da51118d4f5e5a4e609364', 116710731),
		('aalvarezf','sha1$967c350c$1$77c4f72890f4d95a73da51118d4f5e5a4e609364', 111900849),
        ('mvenegasg','sha1$967c350c$1$77c4f72890f4d95a73da51118d4f5e5a4e609364', 204800084);

select * from usuario;

insert into universidad(nombreuniversidad) values ('Tecnologico de Costa Rica');
select * from universidad;

insert into escuela(nombreescuela, idUniversidad) values('Escuela de computacion',1);
select * from escuela;

insert into sede(nombresede,ubicación, iduniversidad) values('Centro Academico San Jose', 'San Jose centro',1);
select * from sede;

insert into carrera(idsede,nombrecarrera) values(1,'Ingenieria en Computacion');
select * from carrera;

insert into estudiante(carrera,cedula,carne,estado) values(1,116710731, 2015099369,'pendiente');
select * from estudiante;

insert into coordinadorpractica(cedula,carrera) values(111900849,1);
select * from coordinadorpractica;

insert into empresa(cedulajuridica,nombreempresa,estado) values(3101477078, 'Patito', 'pendiente' );
select * from empresa;

insert into contactoempresa(cedula,empresaasociado) values(204800084,3101477078);
select * from contactoempresa;
