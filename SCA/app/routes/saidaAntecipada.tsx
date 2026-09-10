import { SaidaAntecipadaAnexo } from "~/saidas_antecipadas_anexos/saidaAntecipadaAnexo";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cadastro" },
    { name: "description", content: "Cadastrar Secretárias" },
  ];
}

export default function Home() {
  return <SaidaAntecipadaAnexo />;
}
