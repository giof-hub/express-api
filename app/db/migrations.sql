CREATE DATABASE TECNOLOGIAS;

CREATE TABLE PESSOA(
	ID SERIAL PRIMARY KEY,
	NOME VARCHAR(255) NOT NULL,
	DOCUMENTO VARCHAR(20) NOT NULL,
	PROFISSAO VARCHAR(100) NOT NULL,
	DATANASCIMENTO DATE NOT NULL,
	DATAHORAREGISTRO TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
);

CREATE TABLE USUARIO(

	ID SERIAL PRIMARY KEY,
	EMAIL VARCHAR(100) NOT NULL UNIQUE,
	LOGIN VARCHAR(100) NOT NULL UNIQUE,
	IDPESSOA INT REFERENCES PESSOA(ID),
	DATAHORAREGISTRO TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
);

INSERT INTO PESSOA (NOME, DOCUMENTO, PROFISSAO, DATANASCIMENTO)
	VALUES ('Teste', '11111111111', 'Tester', '2001-07-11') ;