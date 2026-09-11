
import { CadastroSecretarias } from "~/cadastro_secretarias/CadastroSecretarias";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cadastro" },
    { name: "description", content: "Cadastrar Secretárias" },
  ];
}

export default function Home() {
  return <CadastroSecretarias />;
}
