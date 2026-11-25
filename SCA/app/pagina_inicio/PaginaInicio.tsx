
import { Link } from "react-router";

export function PaginaInicio() {

  const inicio = [
    {
      id: 1,
      img: "",
      titulo: "Cadastro de Alunos",
      descricao: "Cadastre e mantenha os dados dos alunos sempre atualizados.",
      rota: "/cadastroAlunos"
    },
    {
      id: 2,
      img: "",
      titulo: "Registrar Saídas Antecipadas e Atrasos",
      descricao: "Registre e controle saídas antecipadas e atrasos dos alunos de forma organizada.",
      rota: "/saidaAntecipada"
    },
    {
      id: 3,
      img: "",
      titulo: "Registros Semanais",
      descricao: "Visualize e controle os registros e ocorrências de cada semana letiva.",
      rota: "/historicoSemanal"
    },
    {
      id: 4,
      img: "",
      titulo: "Histórico Mensal",
      descricao: "Acompanhe de forma prática os registros mensais da escola.",
      rota: "/historicoMensal"
    },
    {
      id: 5,
      img: "",
      titulo: "Alertas Pendentes",
      descricao: "Verifique os alunos que estão com alertas pendentes.",
      rota: "/alertasPendentes"
    },
    {
      id: 6,
      img: "",
      titulo: "Atestados",
      descricao: "Adicione atestados de registros já finalizados.",
      rota: "/anexoAtestados"
    },
  ];

  const rotas: Record<string, string> = {
    "Sobre Nós": "/sobreNos",
    "Perfil": "/cadastroAlunos",
  };

  return (
    <main className="flex flex-col min-h-screen">

      {/* CABEÇALHO */}
      <header className="flex justify-between bg-gradient-to-r p-4 shadow-md">

        <aside>
          <img
            className="rounded-full w-20 mb-4"
            src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
            alt="Logo"
          />
        </aside>

        <div className="gap-1 text-3xl font-extrabold">
          <h1>Escola Estadual Sanico Teles</h1>
        </div>

        <nav className="flex gap-4 text-blue-500 font-medium">

          <Link to={rotas["Sobre Nós"]}>
            <span className="cursor-pointer hover:underline">
              Sobre Nós
            </span>
          </Link>

          <span
            className="cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/Ajuda")}
          >
            Ajuda
          </span>

          <Link to={rotas["Perfil"]}>
            <span className="cursor-pointer hover:underline">
              Perfil
            </span>
          </Link>

          <div
            className="cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/")}
          >
            Sair
          </div>

        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex">

        <section className="flex-1 p-10 bg-gray-100">

          <h2 className="text-xl font-bold mb-2">
            Bem-vindo ao SCSA - Sistema de Controle de Saídas Antecipadas e Atrasos
          </h2>

          <div className="mb-2 row-span-2 text-pretty">
            Um sistema completo para facilitar a organização de
            informações e fortalecer a comunicação entre a escola e os
            alunos.
          </div>

          {/* CARTÕES CLICÁVEIS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {inicio.map((item) => (

              <Link
                key={item.id}
                to={item.rota}
                className="block bg-white rounded-lg p-6 shadow hover:shadow-lg hover:scale-105 transition cursor-pointer text-gray-900"
              >

                {item.img && (
                  <img
                    src={item.img}
                    alt={item.titulo}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                )}

                <h3 className="text-xl font-bold mb-2">
                  {item.titulo}
                </h3>

                <p>
                  {item.descricao}
                </p>

              </Link>

            ))}

          </div>

        </section>

      </main>

    </main>
  );
}
