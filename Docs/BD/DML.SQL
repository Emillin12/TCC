-- =====================================================================
-- DML - dados de exemplo. Rodar depois do DDL.SQL.
-- =====================================================================

-- Cadastro de Secretarias
INSERT INTO secretarias (id, nome, masp, cpf, email_institucional, turno, senha) VALUES
(1, 'Cleide Helena Da Silva', '123456', '111.222.333-44', 'cleidehelena@educacao.mg.gov.br', 'MANHA', '1183281'),
(2, 'Maria Aparecida De Oliveira', '654321', '222.333.444-55', 'mariaaparecida@educacao.mg.gov.br', 'TARDE', '222952'),
(3, 'Joana Da Silva Souza', '789012', '333.444.555-66', 'joanadasilva@educacao.mg.gov.br', 'NOITE', '377533'),
(4, 'Jaqueline Souza', '345678', '444.555.666-77', 'jaquelinesouza@educacao.mg.gov.br', 'NOITE', '4535398');


-- Cadastro de Turmas
INSERT INTO turmas (id, nome, serie, turno, ano_letivo) VALUES
(101564, '6º Ano 1', '6º Ano', 'TARDE', 2026),
(101565, '6º Ano 2', '6º Ano', 'TARDE', 2026),
(101566, '7º Ano 1', '7º Ano', 'TARDE', 2026),
(101567, '7º Ano 2', '7º Ano', 'TARDE', 2026),
(101568, '8º Ano 1', '8º Ano', 'MANHA', 2026),
(101569, '8º Ano 2', '8º Ano', 'MANHA', 2026),
(101570, '9º Ano 1', '9º Ano', 'MANHA', 2026),
(101571, '9º Ano 2', '9º Ano', 'MANHA', 2026),
(101572, '1º Ano 1', '1º Ano', 'MANHA', 2026),
(101573, '1º Ano 2', '1º Ano', 'MANHA', 2026),
(101574, '1º Ano Técnico em Energias Renovaveis', '1º Ano', 'INTEGRAL', 2026),
(101575, '2º Ano 1', '2º Ano', 'MANHA', 2026),
(101576, '2º Ano 2', '2º Ano', 'MANHA', 2026),
(101577, '2º Ano Técnico em Energias Renovaveis', '2º Ano', 'INTEGRAL', 2026),
(101578, '3º Ano 1', '3º Ano', 'MANHA', 2026),
(101579, '3º Ano 2', '3º Ano', 'MANHA', 2026),
(101580, '3º Ano Técnico em Informática', '3º Ano', 'INTEGRAL', 2026);


-- Cadastro de Alunos
INSERT INTO alunos (id, nome, cpf, data_nascimento, turma, turno, genero, raca, nacionalidade, nome_responsavel, cpf_responsavel, telefone_responsavel, email_responsavel, endereco) VALUES
(108640, 'João Pedro de Oliveira', '555.666.777-88', '2008-03-15', '3º Ano 1', 'MANHA', 'Masculino', 'Branco', 'Brasileiro', 'Maria Aparecida de Oliveira', '222.333.444-55', '(31) 99999-9999', 'mariaaparecida@gmail.com', 'Rua Exemplo, 823 - Bairro Exemplo - Santa Rita Do Sapucaí - MG'),
(108641, 'Ana Beatriz Souza', '666.777.888-99', '2009-07-22', '2º Ano 2', 'MANHA', 'Feminino', 'Branca', 'Brasileira', 'João da Silva Souza', '333.444.555-66', '(31) 99999-9999', 'anabeatriz@gmail.com', 'Rua Exemplo, 1923 - Bairro Exemplo - Santa Rita Do Sapucaí - MG'),
(108642, 'Carlos Eduardo Lima', '777.888.999-00', '2011-11-10', '1º Ano 1', 'MANHA', 'Masculino', 'Parda', 'Brasileiro', 'Fernanda Lima', '444.555.666-77', '(31) 99999-9999', 'fernandalima@gmail.com', 'Rua Exemplo, 1883 - Bairro Exemplo - Santa Rita Do Sapucaí - MG'),
(108643, 'Gabriel Henrique Santos', '688.999.000-11', '2014-05-05', '7º Ano 2', 'TARDE', 'Masculino', 'Pardo', 'Brasileiro', 'Luana Santos', '055.666.777-88', '(31) 99999-9999', 'luanasantos123@gmail.com', 'Rua Exemplo, 123 - Bairro Exemplo - Santa Rita Do Sapucaí - MG'),
(108644, 'Pamela Rodrigues', '888.999.000-22', '2008-03-15', '3º Ano 1', 'MANHA', 'Feminino', 'Branca', 'Brasileira', 'Helena Rodrigues', '055.666.777-88', '(31) 99999-9999', 'helena.rodrigues@gmail.com', 'Rua Exemplo, 45 - Bairro Exemplo - Santa Rita Do Sapucaí - MG');


-- Atrasos e Saídas Antecipadas
INSERT INTO ocorrencias (id, id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, tipo_ocorrencia, justificativa, observacao) VALUES
(1, 108640, 101578, '2026-10-04', '08:10', 'ATRASO', 'Médico', ''),
(2, 108641, 101576, '2026-08-15', '12:30', 'SAIDA_ANTECIPADA', 'Trabalho', 'A responsável do aluno solicitou a saída antecipada devido a compromissos de trabalho.'),
(3, 108642, 101572, '2026-09-29', '08:40', 'ATRASO', 'Ficou preso no trânsito', ''),
(4, 108643, 101567, '2026-10-10', '14:00', 'SAIDA_ANTECIPADA', 'Mal-estar', 'Responsável do aluno foi chamado para buscá-lo na escola devido ao mal-estar.');


-- Anexo de atestados médicos e outros documentos
-- imagem_documento fica NULL: a imagem real entra pelo upload do sistema (POST /acoes multipart)
INSERT INTO anexos (id_ocorrencia, tipo_documento, imagem_documento, descricao_documento) VALUES
(1, 'Atestado médico', NULL, 'O aluno apresentou um atestado médico justificando o atraso devido a uma consulta médica.'),
(2, 'Declaração', NULL, 'A responsável do aluno apresentou uma declaração solicitando a saída antecipada devido a compromissos de trabalho.'),
(3, 'Declaração', NULL, 'O aluno ficou preso no trânsito e não conseguiu chegar a tempo na escola, por isso se atrasou.'),
(4, 'Atestado médico', NULL, 'O aluno apresentou um atestado médico justificando a saída antecipada devido a mal-estar.');


-- Como os ids acima foram informados na mão, ajusta os contadores
-- para o próximo cadastro feito pelo sistema não repetir id.
SELECT setval(pg_get_serial_sequence('secretarias', 'id'), (SELECT MAX(id) FROM secretarias));
SELECT setval(pg_get_serial_sequence('turmas', 'id'), (SELECT MAX(id) FROM turmas));
SELECT setval(pg_get_serial_sequence('alunos', 'id'), (SELECT MAX(id) FROM alunos));
SELECT setval(pg_get_serial_sequence('ocorrencias', 'id'), (SELECT MAX(id) FROM ocorrencias));
SELECT setval(pg_get_serial_sequence('anexos', 'id'), (SELECT MAX(id) FROM anexos));
