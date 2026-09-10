import { ExibicaoAluno } from "~/exibicao_aluno/ExibicaoAluno";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exibicao" },
    { name: "description", content: "Mostrar os Alunos" },
  ];
}

export default function Home() {
  return <ExibicaoAluno />;
}
