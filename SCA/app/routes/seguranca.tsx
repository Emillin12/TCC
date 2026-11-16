import { Seguranca } from "~/seguranca/seguranca";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Segurança" },
    { name: "description", content: "Cookies de segurança" },
  ];
}

export default function Home() {
  return <Seguranca />;
}
