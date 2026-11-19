
import { Perguntas_Frequentes } from "~/perguntas_frequentes/Perguntas_Frequentes";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Perguntas" },
    { name: "description", content: "Perguntas que fazem frequentemente" },
  ];
}

export default function Home() {
  return <Perguntas_Frequentes />;
}