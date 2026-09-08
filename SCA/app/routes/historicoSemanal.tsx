import type { Route } from "./+types/home";
import { CadastroSecretarias } from "~/cadastro_secretarias/CadastroSecretarias";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cadastro" },
    { name: "description", content: "Cadastrar Secretárias" },
  ];
}

export default function Home() {
  return <CadastroSecretarias />;
}
