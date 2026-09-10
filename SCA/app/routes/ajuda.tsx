import { Ajuda } from "~/ajuda/Ajuda";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ajuda" },
    { name: "description", content: "Suporte de ajuda apara as secretárias " },
  ];
}

export default function Home() {
  return <Ajuda />;
}
