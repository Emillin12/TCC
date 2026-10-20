Cadastro de Secreitarias
https://www.w3schools.com/sql/sql_dates.asp
CREATE TABLE secretarias (
  id int PRIMARY KEY,
  nome varchar(255) NOT NULL,
  masp varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  turno varchar(255)NOT NULL,
  senha varchar(255) NOT NULL
);

Cadastro de Alunos

CREATE TABLE alunos (
  id int PRIMARY KEY,
  nome completo do aluno varchar(255) NOT NULL,
  cpf varchar(255)NOT NULL,
  data de nascimento date(255)NOT NULL,
  turma varchar(255)NOT NULL,
  turno varchar(255)NOT NULL,
  genero varchar(255)NOT NULL,
  raca varchar(255)NOT NULL,
  nacionalidade/naturalidade varchar(255)NOT NULL,
  nome do responsavel varchar(255) NOT NULL,
  cpf do responsavel varchar(255) NOT NULL,
  telefone do responsavel varchar(255)NOT NULL,
  email do responsavel varchar(255)NOT NULL,
  endereco completo varchar(255)NOT NULL
);

Cadastro de Turmas

CREATE TABLE turmas (
  id int PRIMARY KEY,
  nome da turma varchar(255) NOT NULL,
  id da turma varchar(255) NOT NULL,
  turno varchar(255) NOT NULL
);


Atrasos e Saídas Antecipadas

CREATE TABLE atraso e saidas antecipadas  (
  id int PRIMARY KEY,
  id do aluno varchar(255) NOT NULL,
  id da turma varchar(255) NOT NULL,
  nome do aluno varchar(255) NOT NULL,
  nome da turma varchar(255) NOT NULL,
  data do atraso/saída antecipada date,
  hora do atraso/saída antecipada time,
  tipo da ocorrência varchar(255) NOT NULL,
  justificativa da ocorrência varchar(255) NOT NULL,
  observações adicionais varchar(255)
);


Anexo de atestados médicos e outros documentos
CREATE TABLE anexo de atestado  (
  id int PRIMARY KEY,
  tipo do documento varchar(255) NOT NULL,
  imagem do documento varchar(255)NOT NULL,
  descrição/Observações varchar(255),
);
  