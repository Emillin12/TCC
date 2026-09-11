import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("cadastroSecretarias","routes/cadastroSecretarias.tsx"),
    route("Ajuda" , "routes/ajuda.tsx"),
    route("alertasPendentes" , "routes/alertasPendentes.tsx"),
    route("Anexo Atestados" , "routes/anexoAtestado.tsx"),
    route("Cadastro Alunos", "routes/cadastroalunos.tsx"),
    route("Exibicao Aluno" , "routes/exibicaoAluno.tsx"),
    route("Historico Mensal" , "routes/historicoMensal.tsx"),
    route("Historico Semanal" , "routes/historicoSemanal.tsx"),
    route("Pagina Inicio" , "routes/paginaInicio.tsx"),
    route("Login" , "routes/login.tsx"),
    route("Perfil Secretarias" , "routes/perfilSecretarias.tsx"),
    route("Saida Antecipada" , "routes/saidaAntecipada.tsx"),
    route("Seguranca" , "routes/seguranca.tsx"),
    route("Sobre Nós" , "routes/sobreNos.tsx")
    




    
] satisfies RouteConfig;
