create database BD_saude; /* criação do banco */

use BD_saude; /*utilizando */

create table cliente(
Id int primary key not null auto_increment,
Nome varchar(50) not null,
Email varchar(70) not null,
 Telefone char(14) not null,
 senha varchar(80) not null
);