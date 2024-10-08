create database if not exists 5IV8;

use 5IV8;

create table if not exists usuario (
id_usuario int auto_increment primary key,
nombre varchar(100) not null
);

describe usuario;

