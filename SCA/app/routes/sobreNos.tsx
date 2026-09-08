import { SobreNos } from "~/sobre_nos/SobreNos";
import type { Route } from "./+types/home";
import { CadastroSecretarias } from "~/cadastro_secretarias/CadastroSecretarias";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sobre Nós" },
    { name: "description", content: "Infromações da escola " },
  ];
}

export default function Home() {
  return <SobreNos />;
}
