-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema SistemaPracticantes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema SistemaPracticantes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SistemaPracticantes` DEFAULT CHARACTER SET utf8 ;
USE `SistemaPracticantes` ;

-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`TipoPersona`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`TipoPersona` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`TipoPersona` (
  `IdTipoPersona` INT NOT NULL AUTO_INCREMENT,
  `Tipo` VARCHAR(45) NULL,
  PRIMARY KEY (`IdTipoPersona`),
  UNIQUE INDEX `IdTipoPersona_UNIQUE` (`IdTipoPersona` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Persona`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Persona` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Persona` (
  `Cedula` DECIMAL(9,0) NOT NULL,
  `Nombre` VARCHAR(60) NULL,
  `SegundoNombre` VARCHAR(60) NULL,
  `Apellido` VARCHAR(60) NULL,
  `SegundoApellido` VARCHAR(60) NULL,
  `Sexo` VARCHAR(9) NULL,
  `TipoPersona` INT NULL,
  PRIMARY KEY (`Cedula`),
  UNIQUE INDEX `Cedula_UNIQUE` (`Cedula` ASC),
  INDEX `fk_Persona_TipoPersona_IdTipoPersona_idx` (`TipoPersona` ASC),
  CONSTRAINT `fk_Persona_TipoPersona_IdTipoPersona`
    FOREIGN KEY (`TipoPersona`)
    REFERENCES `SistemaPracticantes`.`TipoPersona` (`IdTipoPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`CorreoElectronico`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`CorreoElectronico` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`CorreoElectronico` (
  `IdCorreoElectronico` INT NOT NULL AUTO_INCREMENT,
  `CorreoElectronico` VARCHAR(60) NULL,
  `Cedula` DECIMAL(9,0) NULL,
  PRIMARY KEY (`IdCorreoElectronico`),
  UNIQUE INDEX `CorreoElectronico_UNIQUE` (`CorreoElectronico` ASC),
  UNIQUE INDEX `IdCorreoElectronico_UNIQUE` (`IdCorreoElectronico` ASC),
  CONSTRAINT `fk_CorreoElectronico_Persona_Cedula`
    FOREIGN KEY (`Cedula`)
    REFERENCES `SistemaPracticantes`.`Persona` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`NumeroTelefono`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`NumeroTelefono` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`NumeroTelefono` (
  `IdNumeroTelefono` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `NumeroTelefono` DECIMAL(8,0) NULL,
  `Cedula` DECIMAL(9,0) NULL,
  PRIMARY KEY (`IdNumeroTelefono`),
  INDEX `fk_NumeroTelefono_Persona_Cedula_idx` (`Cedula` ASC),
  UNIQUE INDEX `IdNumeroTelefono_UNIQUE` (`IdNumeroTelefono` ASC),
  UNIQUE INDEX `NumeroTelefono_UNIQUE` (`NumeroTelefono` ASC),
  CONSTRAINT `fk_NumeroTelefono_Persona_Cedula`
    FOREIGN KEY (`Cedula`)
    REFERENCES `SistemaPracticantes`.`Persona` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Usuario` (
  `NombreUsuario` VARCHAR(30) NOT NULL,
  `Contraseña` VARCHAR(64) NULL,
  `Cedula` DECIMAL(9,0) NULL,
  PRIMARY KEY (`NombreUsuario`),
  UNIQUE INDEX `NombreUsuario_UNIQUE` (`NombreUsuario` ASC),
  INDEX `fk_Usuario_Persona_Cedula_idx` (`Cedula` ASC),
  CONSTRAINT `fk_Usuario_Persona_Cedula`
    FOREIGN KEY (`Cedula`)
    REFERENCES `SistemaPracticantes`.`Persona` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Universidad`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Universidad` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Universidad` (
  `IdUniversidad` INT NOT NULL AUTO_INCREMENT,
  `NombreUniversidad` VARCHAR(60) NULL,
  PRIMARY KEY (`IdUniversidad`),
  UNIQUE INDEX `IdUniversidad_UNIQUE` (`IdUniversidad` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Escuela`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Escuela` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Escuela` (
  `IdEscuela` INT NOT NULL AUTO_INCREMENT,
  `NombreEscuela` VARCHAR(60) NULL,
  `IdUniversidad` INT NULL,
  PRIMARY KEY (`IdEscuela`),
  UNIQUE INDEX `IdEscuela_UNIQUE` (`IdEscuela` ASC),
  INDEX `fk_Escuela_Universidad_IdUniverisdad_idx` (`IdUniversidad` ASC),
  CONSTRAINT `fk_Escuela_Universidad_IdUniverisdad`
    FOREIGN KEY (`IdUniversidad`)
    REFERENCES `SistemaPracticantes`.`Universidad` (`IdUniversidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Sede`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Sede` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Sede` (
  `IdSede` INT NOT NULL AUTO_INCREMENT,
  `NombreSede` VARCHAR(60) NULL,
  `Ubicación` TEXT NULL,
  `IdUniversidad` INT NULL,
  PRIMARY KEY (`IdSede`),
  UNIQUE INDEX `IdSede_UNIQUE` (`IdSede` ASC),
  INDEX `fk_Sede_Universidad_IdUniversidad_idx` (`IdUniversidad` ASC),
  CONSTRAINT `fk_Sede_Universidad_IdUniversidad`
    FOREIGN KEY (`IdUniversidad`)
    REFERENCES `SistemaPracticantes`.`Universidad` (`IdUniversidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Carrera`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Carrera` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Carrera` (
  `IdCarrera` INT NOT NULL AUTO_INCREMENT,
  `IdUniversidad` INT NULL,
  `IdEscuela` INT NULL,
  `IdSede` INT NULL,
  `NombreCarrera` VARCHAR(60) NULL,
  PRIMARY KEY (`IdCarrera`),
  UNIQUE INDEX `IdCarrera_UNIQUE` (`IdCarrera` ASC),
  INDEX `fk_Carrera_Universidad_IdUniversidad_idx` (`IdUniversidad` ASC),
  INDEX `fk_Carrera_Escuela_IdEscuela_idx` (`IdEscuela` ASC),
  INDEX `fk_Carrera_Sede_IdSede_idx` (`IdSede` ASC),
  CONSTRAINT `fk_Carrera_Universidad_IdUniversidad`
    FOREIGN KEY (`IdUniversidad`)
    REFERENCES `SistemaPracticantes`.`Universidad` (`IdUniversidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Carrera_Escuela_IdEscuela`
    FOREIGN KEY (`IdEscuela`)
    REFERENCES `SistemaPracticantes`.`Escuela` (`IdEscuela`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Carrera_Sede_IdSede`
    FOREIGN KEY (`IdSede`)
    REFERENCES `SistemaPracticantes`.`Sede` (`IdSede`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Estudiante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Estudiante` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Estudiante` (
  `IdEstudiante` INT NOT NULL AUTO_INCREMENT,
  `Universidad` INT NULL,
  `Escuela` INT NULL,
  `Sede` INT NULL,
  `Carrera` INT NULL,
  `Cedula` DECIMAL(9,0) NULL,
  `Carne` DECIMAL(10,0) NULL,
  `Estado` VARCHAR(20) NULL,
  PRIMARY KEY (`IdEstudiante`),
  UNIQUE INDEX `IdEstudiante_UNIQUE` (`IdEstudiante` ASC),
  INDEX `fk_Estudiante_Persona_Cedula_idx` (`Cedula` ASC),
  INDEX `fk_Estudiante_Universidad_Id_Universidad_idx` (`Universidad` ASC),
  INDEX `fk_Estudiante_Escuela_IdEscuela_idx` (`Escuela` ASC),
  INDEX `fk_Estudiante_Sede_IdSede_idx` (`Sede` ASC),
  INDEX `fk_Estudiante_Carrera_IdCarrera_idx` (`Carrera` ASC),
  CONSTRAINT `fk_Estudiante_Persona_Cedula`
    FOREIGN KEY (`Cedula`)
    REFERENCES `SistemaPracticantes`.`Persona` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Estudiante_Universidad_Id_Universidad`
    FOREIGN KEY (`Universidad`)
    REFERENCES `SistemaPracticantes`.`Universidad` (`IdUniversidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Estudiante_Escuela_IdEscuela`
    FOREIGN KEY (`Escuela`)
    REFERENCES `SistemaPracticantes`.`Escuela` (`IdEscuela`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Estudiante_Sede_IdSede`
    FOREIGN KEY (`Sede`)
    REFERENCES `SistemaPracticantes`.`Sede` (`IdSede`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Estudiante_Carrera_IdCarrera`
    FOREIGN KEY (`Carrera`)
    REFERENCES `SistemaPracticantes`.`Carrera` (`IdCarrera`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`CoordinadorPractica`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`CoordinadorPractica` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`CoordinadorPractica` (
  `Cedula` DECIMAL(9,0) NOT NULL,
  `Universidad` INT NULL,
  `Escuela` INT NULL,
  `Carrera` INT NULL,
  PRIMARY KEY (`Cedula`),
  UNIQUE INDEX `IdCoordinadorPractica_UNIQUE` (`Cedula` ASC),
  INDEX `fk_Coordinador_Universidad_IdUniversidad_idx` (`Universidad` ASC),
  INDEX `fk_Coordinador_Escuela_IdEscuela_idx` (`Escuela` ASC),
  INDEX `fk_Coordinador_Carrera_IdCarrera_idx` (`Carrera` ASC),
  CONSTRAINT `fk_Coordinador_Persona_Cedula`
    FOREIGN KEY (`Cedula`)
    REFERENCES `SistemaPracticantes`.`Persona` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Coordinador_Universidad_IdUniversidad`
    FOREIGN KEY (`Universidad`)
    REFERENCES `SistemaPracticantes`.`Universidad` (`IdUniversidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Coordinador_Escuela_IdEscuela`
    FOREIGN KEY (`Escuela`)
    REFERENCES `SistemaPracticantes`.`Escuela` (`IdEscuela`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Coordinador_Carrera_IdCarrera`
    FOREIGN KEY (`Carrera`)
    REFERENCES `SistemaPracticantes`.`Carrera` (`IdCarrera`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`EvaluacionCoordinador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`EvaluacionCoordinador` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`EvaluacionCoordinador` (
  `CedulaEstudiante` DECIMAL(9,0) NOT NULL,
  `CedulaCoordinador` DECIMAL(9,0) NOT NULL,
  `JSONEvaluacion` VARCHAR(45) NULL,
  PRIMARY KEY (`CedulaEstudiante`, `CedulaCoordinador`),
  CONSTRAINT `fk_EvaluacionCoordinador_Estudiante_Cedula`
    FOREIGN KEY (`CedulaEstudiante`)
    REFERENCES `SistemaPracticantes`.`Estudiante` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EvaluacionCoordinador_CoordinadorPractica_Cedula`
    FOREIGN KEY (`CedulaCoordinador`)
    REFERENCES `SistemaPracticantes`.`CoordinadorPractica` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Documento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Documento` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Documento` (
  `NombreDocumento` VARCHAR(60) NOT NULL,
  `Dueno` DECIMAL(9,0) NOT NULL,
  `FechaModificacion` TIME NULL,
  PRIMARY KEY (`NombreDocumento`, `Dueno`),
  INDEX `fk_Documento_Persona_Cedula_idx` (`Dueno` ASC),
  CONSTRAINT `fk_Documento_Persona_Cedula`
    FOREIGN KEY (`Dueno`)
    REFERENCES `SistemaPracticantes`.`Persona` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documento_CoordinadorPractica_Cedula`
    FOREIGN KEY (`Dueno`)
    REFERENCES `SistemaPracticantes`.`CoordinadorPractica` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Empresa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Empresa` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Empresa` (
  `CedulaJuridica` DECIMAL(10,0) NOT NULL,
  `NombreEmpresa` VARCHAR(60) NULL,
  `Estado` VARCHAR(20) NULL,
  PRIMARY KEY (`CedulaJuridica`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`ContactoEmpresa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`ContactoEmpresa` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`ContactoEmpresa` (
  `Cedula` DECIMAL(9,0) NOT NULL,
  `EmpresaAsociado` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`Cedula`, `EmpresaAsociado`),
  INDEX `fk_ContactoEmpresa_Empresa_CedulaJuridica_idx` (`EmpresaAsociado` ASC),
  CONSTRAINT `fk_ContactoEmpresa_Empresa_CedulaJuridica`
    FOREIGN KEY (`EmpresaAsociado`)
    REFERENCES `SistemaPracticantes`.`Empresa` (`CedulaJuridica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ContactoEmpresa_Persona_Cedula`
    FOREIGN KEY (`Cedula`)
    REFERENCES `SistemaPracticantes`.`Persona` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`CatalagoEvento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`CatalagoEvento` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`CatalagoEvento` (
  `IdTipoEvento` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(100) NULL,
  `Descripcion` TEXT NULL,
  PRIMARY KEY (`IdTipoEvento`),
  UNIQUE INDEX `IdTipoEvento_UNIQUE` (`IdTipoEvento` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Evento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Evento` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Evento` (
  `IdEvento` INT NOT NULL AUTO_INCREMENT,
  `HoraInicio` TIME NULL,
  `HoraFin` TIME NULL,
  `TipoEvento` INT NULL,
  `Foto` BINARY NULL,
  `Coordinador` DECIMAL(9,0) NULL,
  PRIMARY KEY (`IdEvento`),
  INDEX `fk_Evento_CatalogoEvento_IdTipoEvento_idx` (`TipoEvento` ASC),
  INDEX `fk_Evento_Coordinador_Cedula_idx` (`Coordinador` ASC),
  CONSTRAINT `fk_Evento_CatalogoEvento_IdTipoEvento`
    FOREIGN KEY (`TipoEvento`)
    REFERENCES `SistemaPracticantes`.`CatalagoEvento` (`IdTipoEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Evento_Coordinador_Cedula`
    FOREIGN KEY (`Coordinador`)
    REFERENCES `SistemaPracticantes`.`CoordinadorPractica` (`Cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`ActividadesPorEvento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`ActividadesPorEvento` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`ActividadesPorEvento` (
  `idActividadesPorEvento` INT NOT NULL AUTO_INCREMENT,
  `HoraInicio` TIME NULL,
  `HoraFin` TIME NULL,
  `Descripcion` TEXT NULL,
  `Empresa` DECIMAL(10,0) NULL,
  `Evento` INT NULL,
  PRIMARY KEY (`idActividadesPorEvento`),
  UNIQUE INDEX `idActividadesPorEvento_UNIQUE` (`idActividadesPorEvento` ASC),
  INDEX `fk_Actividades_Evento_idEvento_idx` (`Evento` ASC),
  INDEX `fk_Actividades_Empresa_CedulaJuridica_idx` (`Empresa` ASC),
  CONSTRAINT `fk_Actividades_Evento_idEvento`
    FOREIGN KEY (`Evento`)
    REFERENCES `SistemaPracticantes`.`Evento` (`IdEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Actividades_Empresa_CedulaJuridica`
    FOREIGN KEY (`Empresa`)
    REFERENCES `SistemaPracticantes`.`Empresa` (`CedulaJuridica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SistemaPracticantes`.`Bitacora`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SistemaPracticantes`.`Bitacora` ;

CREATE TABLE IF NOT EXISTS `SistemaPracticantes`.`Bitacora` (
  `idBitacora` INT NOT NULL AUTO_INCREMENT,
  `descripcion` TEXT NULL,
  PRIMARY KEY (`idBitacora`),
  UNIQUE INDEX `idBitacora_UNIQUE` (`idBitacora` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
