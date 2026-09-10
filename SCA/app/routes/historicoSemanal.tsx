import { HistoricoSemanal } from "~/historico_semanal/HisotricoSemanal";
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
