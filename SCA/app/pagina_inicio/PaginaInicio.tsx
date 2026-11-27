
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export function PaginaInicio() {

  const [idioma, setIdioma] = useState<"pt" | "en" | "es">("pt");
  const [temaEscuro, setTemaEscuro] = useState(false);

  const navigate = useNavigate();

  const rotas: Record<string, string> = {
    "Sobre Nós": "/sobreNos",
    "Perfil": "/cadastroAlunos",
  };

  const textos = {
    pt: {
      escola: "Escola Estadual Sanico Teles",
      sobre: "Sobre Nós",
      ajuda: "Ajuda",
      perfil: "Perfil",
      sair: "Sair",
      titulo: "Bem-vindo ao SCSA - Sistema de Controle de Saídas Antecipadas e Atrasos",
      descricao: "Um sistema completo para facilitar a organização de informações e fortalecer a comunicação entre a escola e os alunos.",
      cartoes: [
        {
          titulo: "Cadastro de Alunos",
          descricao: "Cadastre e mantenha os dados dos alunos sempre atualizados."
        },
        {
          titulo: "Registrar Saídas Antecipadas e Atrasos",
          descricao: "Registre e controle saídas antecipadas e atrasos dos alunos de forma organizada."
        },
        {
          titulo: "Registros Semanais",
          descricao: "Visualize e controle os registros e ocorrências de cada semana letiva."
        },
        {
          titulo: "Histórico Mensal",
          descricao: "Acompanhe de forma prática os registros mensais da escola."
        },
        {
          titulo: "Alertas Pendentes",
          descricao: "Verifique os alunos que estão com alertas pendentes."
        },
        {
          titulo: "Atestados",
          descricao: "Adicione atestados de registros já finalizados."
        }
      ]
    },

    en: {
      escola: "Sanico Teles State School",
      sobre: "About Us",
      ajuda: "Help",
      perfil: "Profile",
      sair: "Logout",
      titulo: "Welcome to SCSA - Early Departure and Late Arrival Control System",
      descricao: "A complete system to facilitate information organization and strengthen communication between the school and students.",
      cartoes: [
        {
          titulo: "Student Registration",
          descricao: "Register and keep student information always up to date."
        },
        {
          titulo: "Register Early Departures and Late Arrivals",
          descricao: "Record and manage students' early departures and late arrivals in an organized way."
        },
        {
          titulo: "Weekly Records",
          descricao: "View and manage records and occurrences for each school week."
        },
        {
          titulo: "Monthly History",
          descricao: "Easily monitor the school's monthly records."
        },
        {
          titulo: "Pending Alerts",
          descricao: "Check students who have pending alerts."
        },
        {
          titulo: "Medical Certificates",
          descricao: "Add medical certificates to previously completed records."
        }
      ]
    },

    es: {
      escola: "Escuela Estatal Sanico Teles",
      sobre: "Sobre Nosotros",
      ajuda: "Ayuda",
      perfil: "Perfil",
      sair: "Salir",
      titulo: "Bienvenido al SCSA - Sistema de Control de Salidas Anticipadas y Retrasos",
      descricao: "Un sistema completo para facilitar la organización de información y fortalecer la comunicación entre la escuela y los alumnos.",
      cartoes: [
        {
          titulo: "Registro de Alumnos",
          descricao: "Registre y mantenga los datos de los alumnos siempre actualizados."
        },
        {
          titulo: "Registrar Salidas Anticipadas y Retrasos",
          descricao: "Registre y controle las salidas anticipadas y los retrasos de los alumnos de forma organizada."
        },
        {
          titulo: "Registros Semanales",
          descricao: "Visualice y controle los registros e incidencias de cada semana escolar."
        },
        {
          titulo: "Historial Mensual",
          descricao: "Consulte fácilmente los registros mensuales de la escuela."
        },
        {
          titulo: "Alertas Pendientes",
          descricao: "Verifique los alumnos que tienen alertas pendientes."
        },
        {
          titulo: "Certificados Médicos",
          descricao: "Agregue certificados médicos a registros ya finalizados."
        }
      ]
    }
  };

  const t = textos[idioma];

  const inicio = [
    {
      id: 1,
      rota: "/cadastroAlunos"
    },
    {
      id: 2,
      rota: "/saidaAntecipada"
    },
    {
      id: 3,
      rota: "/historicoSemanal"
    },
    {
      id: 4,
      rota: "/historicoMensal"
    },
    {
      id: 5,
      rota: "/alertasPendentes"
    },
    {
      id: 6,
      rota: "/anexoAtestados"
    }
  ];

  const fundo = temaEscuro
    ? "bg-slate-900 text-white"
    : "bg-gray-100 text-gray-900";

  const cartao = temaEscuro
    ? "bg-slate-800 text-white border border-slate-700"
    : "bg-white text-gray-900";

  return (
    <main className={`flex flex-col min-h-screen ${fundo}`}>

      {/* CABEÇALHO */}
      <header className={`flex flex-wrap items-center justify-between gap-4 p-4 shadow-md ${temaEscuro ? "bg-slate-800" : "bg-white"}`}>

        {/* LOGO */}
        <div>
          <img
            className="rounded-full w-20 h-20 object-cover"
            src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
            alt="Logo da escola"
          />
        </div>

        {/* NOME DA ESCOLA */}
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-3xl font-extrabold">
            {t.escola}
          </h1>
        </div>

        {/* MENU E CONFIGURAÇÕES */}
        <div className="flex flex-wrap items-center gap-4">

          <nav className="flex flex-wrap items-center gap-4 text-blue-500 font-medium">

            <Link
              to={rotas["Sobre Nós"]}
              className="hover:underline"
            >
              {t.sobre}
            </Link>

            <Link
              to="/Ajuda"
              className="hover:underline"
            >
              {t.ajuda}
            </Link>

            <Link
              to={rotas["Perfil"]}
              className="hover:underline"
            >
              {t.perfil}
            </Link>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="hover:underline"
            >
              {t.sair}
            </button>

          </nav>

          {/* SELETOR DE IDIOMA */}
          <select
            value={idioma}
            onChange={(e) =>
              setIdioma(e.target.value as "pt" | "en" | "es")
            }
            className={`border rounded-md p-2 text-sm ${temaEscuro ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          {/* BOTÃO TEMA */}
          <button
            type="button"
            onClick={() => setTemaEscuro(!temaEscuro)}
            className="rounded-md bg-blue-950 text-white px-3 py-2 hover:bg-blue-800 transition"
            aria-label="Alternar tema"
          >
            {temaEscuro ? "☀️" : "🌙"}
          </button>

        </div>

      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="flex-1 p-6 md:p-10">

        {/* TÍTULO E DESCRIÇÃO */}
        <h2 className="text-xl md:text-2xl font-bold mb-3">
          {t.titulo}
        </h2>

        <p className="mb-8 max-w-4xl text-sm md:text-base opacity-80">
          {t.descricao}
        </p>

        {/* CARTÕES CLICÁVEIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {inicio.map((item, index) => (

            <Link
              key={item.id}
              to={item.rota}
              className={`block rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer ${cartao}`}
            >

              <h3 className="text-lg md:text-xl font-bold mb-3">
                {t.cartoes[index].titulo}
              </h3>

              <p className="text-sm leading-relaxed opacity-80">
                {t.cartoes[index].descricao}
              </p>

              <div className="mt-5 text-blue-500 font-medium text-sm">
                {idioma === "pt"
                  ? "Acessar →"
                  : idioma === "en"
                    ? "Access →"
                    : "Acceder →"}
              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* RODAPÉ */}
      <footer className={`text-center p-4 text-xs ${temaEscuro ? "bg-slate-800 text-gray-300" : "bg-white text-gray-600"}`}>
        © {new Date().getFullYear()} - {t.escola}
      </footer>

    </main>
  );
}
