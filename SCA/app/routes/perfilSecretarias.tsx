import { PerfilSecretaria } from "~/perfil_secretarias/PerfilSecretarias";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Perfil" },
    { name: "description", content: "Perfil do secretário." },
  ];
}

export default function Home() {
  return <PerfilSecretaria />;
}
