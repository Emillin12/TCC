Cadastro de Secreitarias
insert into secretarias (id,nome,masp,cpf,email,turno,senha) values (1,'Cleide Helena Da Silva','123456','111.222.333-44','cleidehelena@educacao.mg.gov.br','Manhã','1183281');

insert into secretarias (id,nome,masp,cpf,email,turno,senha) values (2,'Maria Aparecida De Oliveira','654321','222.333.444-55','mariaaparecida@educacao.mg.gov.br','Tarde','222952');

insert into secretarias (id,nome,masp,cpf,email,turno,senha) values (3,'Joana Da Silva Souza','789012','333.444.555-66','joanadasilva@educacao.mg.gov.br','Noite','377533');

insert into secretarias (id,nome,masp,cpf,email,turno,senha) values (4,'Jaqueline Souza','345678','444.555.666-77','jaquelinesouza@educacao.mg.gov.br','Noite','4535398');

Cadastro de Alunos
insert into alunos (id,nome,cpf,data_nascimento,turma,turno,genero,raca,nacionalidade,nome_responsavel,cpf_responsavel,telefone_responsavel,email_responsavel,endereco) values (108640,'João Pedro de Oliveira','555.666.777-88','15/03/2008','3º Ano 1','Manhã','Masculino','Branco','Brasileiro','Maria Aparecida de Oliveira','222.333.444-55','(31) 99999-9999','mariaaparecida@gmail.com','Rua Exemplo, 823 - Bairro Exemplo - Santa Rita Do Sapucaí - MG');

insert into alunos (id,nome,cpf,data_nascimento,turma,turno,genero,raca,nacionalidade,nome_responsavel,cpf_responsavel,telefone_responsavel,email_responsavel,endereco) values (108641,'Ana Beatriz Souza','666.777.888-99','22/07/2009','2º Ano 2','Manhã','Feminino','Branca','Brasileira','João da Silva Souza','333.444.555-66','(31) 99999-9999','anabeatriz@gmail.com','Rua Exemplo, 1923 - Bairro Exemplo - Santa Rita Do Sapucaí - MG');

insert into alunos (id,nome,cpf,data_nascimento,turma,turno,genero,raca,nacionalidade,nome_responsavel,cpf_responsavel,telefone_responsavel,email_responsavel,endereco) values (108642,'Carlos Eduardo Lima','777.888.999-00','10/11/2011','1º Ano 1','Manhã','Masculino','Parda','Brasileiro','Fernanda Lima','444.555.666-77','(31) 99999-9999','fernandalima@gmail.com','Rua Exemplo, 1883 - Bairro Exemplo - Santa Rita Do Sapucaí - MG');

insert into alunos (id,nome,cpf,data_nascimento,turma,turno,genero,raca,nacionalidade,nome_responsavel,cpf_responsavel,telefone_responsavel,email_responsavel,endereco) values (108643,'Gabriel Henrique Santos','688.999.000-11','05/05/2014','7º Ano 2','Tarde','Masculino','Pardo','Brasileiro','Luana Santos','055.666.777-88','(31) 99999-9999','luanasantos123@gmail.com','Rua Exemplo, 123 - Bairro Exemplo - Santa Rita Do Sapucaí - MG');

insert into alunos (id,nome,cpf,data_nascimento,turma,turno,genero,raca,nacionalidade,nome_responsavel,cpf_responsavel,telefone_responsavel,email_responsavel,endereco) values (108644,'Pamela Rodrigues','777.888.999-00','15/03/2008','3º Ano 1','Manhã','Feminino','Branca','Brasileira','Helena Rodrigues','055.666.777-88','(31) 99999-9999',' helena.rodrigues@gmail.com','Rua Exemplo, 45 - Bairro Exemplo - Santa Rita Do Sapucaí - MG');


Cadastro de Turmas

insert into turmas (id,nome,turno) values (101564,'6º Ano 1','Tarde')

insert into turmas (id,nome,turno) values (101565,'6º Ano 2','Tarde')

insert into turmas (id,nome,turno) values (101566,'7º Ano 1','Tarde')

insert into turmas (id,nome,turno) values (101567,'7º Ano 2','Tarde')

insert into turmas (id,nome,turno) values (101568,'8º Ano 1','Manhã')

insert into turmas (id,nome,turno) values (101569,'8º Ano 2','Manhã')

insert into turmas (id,nome,turno) values (101570,'9º Ano 1','Manhã')

insert into turmas (id,nome,turno) values (101571,'9º Ano 2','Manhã')

insert into turmas (id,nome,turno) values (101572,'1º Ano 1','Manhã')

insert into turmas (id,nome,turno) values (101573,'1º Ano 2','Manhã')

insert into turmas (id,nome,turno) values (1015744,'1º Ano Técnico em Energias Renovaveis','Integral')

insert into turmas (id,nome,turno) values (101574,'2º Ano 1','Manhã')

insert into turmas (id,nome,turno) values (101575,'2º Ano 2','Manhã')

insert into turmas (id,nome,turno) values (101575,'2º Ano Técnico em Energias Renovaveis','Integral')

insert into turmas (id,nome,turno) values (101576,'3º Ano 1','Manhã')

insert into turmas (id,nome,turno) values (101577,'3º Ano 2','Manhã')

insert into turmas (id,nome,turno) values (101578,'3º Ano Técnico em Informática','Integral')




Atrasos e Saídas Antecipadas
insert into atrasos_saidas (id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, tipo_ocorrencia, justificativa, observacoes) values (108640, 101576, '2026-10-04', '08:10', 'Atraso', 'Médico', '');

Anexo de atestados médicos e outros documentos

insert into anexos (tipo_documento, imagem_documento, descricao) values ('Atestado médico', 'atestado_medico.png', 'O aluno apresentou um atestado médico justificando o atraso devido a uma consulta médica.');




Atrasos e Saídas Antecipadas
insert into atrasos_saidas (id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, tipo_ocorrencia, justificativa, observacoes) values (108641, 101577, '2026-08-15', '12:30', 'Saída antecipada', 'Trabalho', 'A responsável do aluno solicitou a saída antecipada devido a compromissos de trabalho.');

Anexo de atestados médicos e outros documentos

insert into anexos (tipo_documento, imagem_documento, descricao) values ('Declaração', 'declaracao_saida_antecipada.png', 'A responsável do aluno apresentou uma declaração solicitando a saída antecipada devido a compromissos de trabalho.');



insert into atrasos_saidas (id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, tipo_ocorrencia, justificativa, observacoes) values (108642, 101574, '2026-09-29', '08:40', 'Atraso', 'Ficou preso no trânsito', '');

Anexo de atestados médicos e outros documentos

insert into anexos (tipo_documento, imagem_documento, descricao) values ('Declaração', 'declaracao_atraso_transito.png', 'O aluno ficou preso no trânsito e não conseguiu chegar a tempo na escola, por isso se atrasou.');



insert into atrasos_saidas (id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, tipo_ocorrencia, justificativa, observacoes) values (108643, 101567, '2026-10-10', '14:00', 'Saída antecipada', 'Mal-estar', 'Responsável do aluno foi chamado para buscá-lo na escola devido ao mal-estar.');

Anexo de atestados médicos e outros documentos

insert into anexos (tipo_documento, imagem_documento, descricao) values ('Atestado médico', 'atestado_mal_estar.png', 'O aluno apresentou um atestado médico justificando a saída antecipada devido a mal-estar.');

