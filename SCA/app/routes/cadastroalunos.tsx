import { CadastroAlunos } from "~/cadastro_alunos/CadastroAlunos";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CadastroAluno" },
    { name: "description", content: "Cadastrar Alunos" },
  ];
}

export default function Home() {
  return <CadastroAlunos />;
}
