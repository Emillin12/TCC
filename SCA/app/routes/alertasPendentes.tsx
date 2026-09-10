import { AlertasPendentes } from "~/alertas_pendentes/AlertasPendentes";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alertas" },
    { name: "description", content: "Avisar as Secretárias." },
  ];
}

export default function Home() {
  return <AlertasPendentes />;
}
