import { PaginaInicio } from "~/pagina_inicio/PaginaInicio";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Página Incial" },
    { name: "description", content: "Primeira página ao logar." },
  ];
}

export default function Home() {
  return <PaginaInicio />;
}
