import { HistoricoMensal } from "~/historico _mensal/HistoricoMensal";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Movimentaçao" },
    { name: "description", content: "Movimentação dos alunos por mês." },
  ];
}

export default function Home() {
  return <HistoricoMensal />;
}
