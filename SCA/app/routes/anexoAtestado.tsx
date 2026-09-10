import { AnexoAtestados } from "~/anexo_atestado/AnexoAtestado";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Anexo" },
    { name: "description", content: "Colocar atestados" },
  ];
}

export default function Home() {
  return <AnexoAtestados />;
}
