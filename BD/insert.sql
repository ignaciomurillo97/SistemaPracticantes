use SistemaPracticantes;

insert into TipoPersona(tipo) values('coordinador'),('estudiante'),('administrador'),('empresa');

select * from TipoPersona;

insert into Persona(cedula,nombre,apellido,segundoapellido,sexo,tipopersona) 
values (116710731,'Alvaro', 'Castro', 'Venegas', 'masculino',2),
		(111900849,'Adriana', 'Alvarez', 'Figueroa', 'femenino',1),
        (204800084,'Marcia', 'Venegas', 'Gamboa', 'femenino',4)
;

select * from Persona;

insert into Usuario(nombreusuario,contraseña,cedula)
values ('acastrov','$2a$04$5NoHIFWinV2Hi98WgPNSZ.sk1r7wRIjdI31osl/HsU/yzHkeO1B2.', 116710731),
		('aalvarezf','$2a$04$5NoHIFWinV2Hi98WgPNSZ.sk1r7wRIjdI31osl/HsU/yzHkeO1B2.', 111900849),
        ('mvenegasg','$2a$04$5NoHIFWinV2Hi98WgPNSZ.sk1r7wRIjdI31osl/HsU/yzHkeO1B2.', 204800084);

select * from Usuario;

insert into Universidad(NombreUniversidad) values ('Tecnologico de Costa Rica');
select * from Universidad;

insert into Escuela(NombreEscuela, idUniversidad) values('Escuela de computacion',1); 
select * from Escuela;

insert into Sede(Nombresede,Ubicación, IdUniversidad) values('Centro Academico San Jose', 'San Jose centro',1);
select * from Sede;

insert into Carrera(IdUniversidad,IdEscuela,IdSede,NombreCarrera) values(1,1,1,'Ingenieria en Computacion');
select * from Carrera;

insert into Estudiante(Universidad,Escuela,Sede,Carrera,Cedula,Carne,Estado) values(1,1,1,1,116710731, 2015099369,'pendiente');
select * from Estudiante;

insert into CoordinadorPractica(Cedula,Escuela,Universidad,Carrera) values(111900849,1,1,1);
select * from CoordinadorPractica;

insert into Empresa(CedulaJuridica,NombreEmpresa,Estado) values(3101477078, 'Patito', 'pendiente' );
select * from Empresa;

insert into ContactoEmpresa(Cedula,EmpresaAsociado) values(204800084,3101477078);
select * from ContactoEmpresa;
