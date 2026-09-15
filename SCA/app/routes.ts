import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("cadastroSecretarias","routes/cadastroSecretarias.tsx"),
    route("Ajuda" , "routes/ajuda.tsx"),
    route("alertasPendentes" , "routes/alertasPendentes.tsx"),
    route("AnexoAtestados" , "routes/anexoAtestado.tsx"),
    route("CadastroAlunos", "routes/cadastroalunos.tsx"),
    route("ExibicaoAluno" , "routes/exibicaoAluno.tsx"),
    route("HistoricoMensal" , "routes/historicoMensal.tsx"),
    route("HistoricoSemanal" , "routes/historicoSemanal.tsx"),
    route("PaginaInicio" , "routes/paginaInicio.tsx"),
    route("Login" , "routes/login.tsx"),
    route("PerfilSecretarias" , "routes/perfilSecretarias.tsx"),
    route("SaidaAntecipada" , "routes/saidaAntecipada.tsx"),
    route("Seguranca" , "routes/seguranca.tsx"),
    route("SobreNos" , "routes/sobreNos.tsx")
    




    
] satisfies RouteConfig;
