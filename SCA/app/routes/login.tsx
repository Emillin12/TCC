import { Login } from "~/login/Login";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Entrar" },
    { name: "description", content: "Entrada e saída dos secretários." },
  ];
}

export default function Home() {
  return <Login />;
}
