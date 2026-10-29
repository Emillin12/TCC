import { HistoricoSemanal } from "~/historico_semanal/HistoricoSemanal";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Desempenho" },
    { name: "description", content: "Movimentação da semana." },
  ];
}

export default function Home() {
  return <HistoricoSemanal />;
}
