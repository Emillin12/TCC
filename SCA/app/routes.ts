import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("cadastro/secretarias","routes/cadastroSecretarias.tsx")



    
] satisfies RouteConfig;
