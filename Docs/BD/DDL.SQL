Cadastro de Secreitarias
https://www.w3schools.com/sql/sql_dates.asp
CREATE TABLE secretarias (
  id int PRIMARY KEY,
  nome varchar(255) NOT NULL,
  masp varchar(255) NOT NULL,
  cpf varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  turno varchar(255)NOT NULL,
  senha varchar(255) NOT NULL
);

Cadastro de Alunos

CREATE TABLE alunos (
  id int PRIMARY KEY,
  nome_completo_do_aluno varchar(255) NOT NULL,
  cpf varchar(255)NOT NULL,
  data_de_nascimento date NOT NULL,
  turma varchar(255)NOT NULL,
  turno varchar(255)NOT NULL,
  genero varchar(255)NOT NULL,
  raca varchar(255)NOT NULL,
  nacionalidade/naturalidade varchar(255)NOT NULL,
  nome_do_responsavel varchar(255) NOT NULL,
  cpf_do_responsavel varchar(255) NOT NULL,
  telefone_do_responsavel varchar(255)NOT NULL,
  email_do_responsavel varchar(255)NOT NULL,
  endereco_completo varchar(255)NOT NULL
);

Cadastro de Turmas

CREATE TABLE turmas (
  id int PRIMARY KEY,
  nome_da_turma varchar(255) NOT NULL,
  id_da_turma varchar(255) NOT NULL,
  turno varchar(255) NOT NULL
);


Atrasos e Saídas Antecipadas

CREATE TABLE atraso e saidas antecipadas  (
  id int PRIMARY KEY,
  id_do_aluno varchar(255) NOT NULL,
  id_da_turma varchar(255) NOT NULL,
  nome_do_aluno varchar(255) NOT NULL,
  nome_da_turma varchar(255) NOT NULL,
  data_do_atraso/saída_antecipada date,
  hora_do_atraso/saída_antecipada time,
  tipo_da_ocorrência varchar(255) NOT NULL,
  justificativa_da_ocorrência varchar(255) NOT NULL,
  observações_adicionais varchar(255)
);


Anexo de atestados médicos e outros documentos
CREATE TABLE anexo_de_atestado  (
  id int PRIMARY KEY,
  tipo_do_documento varchar(255) NOT NULL,
  imagem_do_documento varchar(255)NOT NULL,
  descrição/Observações varchar(255),
);
  