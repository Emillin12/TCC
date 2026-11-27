
import { useState } from "react";

export function SobreNos() {

  const [balaoAberto, setBalaoAberto] = useState<number | null>(null);

  const [idioma, setIdioma] = useState<"pt" | "en" | "es">("pt");

  const [temaEscuro, setTemaEscuro] = useState(false);

  const textos = {
    pt: {
      titulo: "Sobre Nós",
      secoes: [
        {
          titulo: "Quem Somos?",
          descricao: `Somos uma equipe dedicada ao desenvolvimento de soluções tecnológicas voltadas à modernização, organização e aprimoramento da gestão escolar.

Nosso trabalho tem como propósito oferecer ferramentas digitais que contribuam para tornar os processos administrativos e pedagógicos das instituições de ensino mais eficientes, organizados, transparentes e acessíveis.

Acreditamos que a tecnologia deve atuar como uma aliada da educação, proporcionando recursos que facilitem o trabalho dos profissionais da escola e contribuam para uma gestão mais precisa e responsável.`
        },
        {
          titulo: "Nossa Solução",
          descricao: `Desenvolvemos o Sistema de Controle de Atrasos e Saídas Antecipadas de Alunos, uma solução destinada ao apoio das atividades da secretaria e da coordenação escolar.

A plataforma foi concebida para proporcionar um acompanhamento mais organizado da rotina dos estudantes, permitindo o registro, controle e consulta de ocorrências relacionadas à entrada e à saída dos alunos.

Dessa forma, a instituição dispõe de um recurso centralizado para auxiliar no acompanhamento da frequência e da movimentação dos estudantes.`
        },
        {
          titulo: "Nossa Visão",
          descricao: `Ser uma referência no desenvolvimento de soluções tecnológicas para a gestão escolar, promovendo inovação, eficiência e melhoria contínua nos processos administrativos das instituições de ensino.

Pretendemos contribuir para uma transformação digital responsável, na qual a tecnologia esteja verdadeiramente a serviço da educação e das pessoas que fazem parte da comunidade escolar.`
        },
        {
          titulo: "Compromisso com a Gestão Escolar",
          descricao: `Entendemos que uma gestão escolar eficiente depende de organização, informação e acompanhamento adequado dos processos.

Nesse sentido, nossa solução foi desenvolvida para apoiar os profissionais responsáveis pela administração da rotina dos estudantes, proporcionando maior controle sobre os registros e facilitando a consulta das informações.

Nosso compromisso é oferecer uma ferramenta que seja prática, confiável e adequada à realidade das instituições de ensino.`
        },
        {
          titulo: "Segurança e Responsabilidade",
          descricao: `A utilização de sistemas destinados ao ambiente escolar exige atenção especial à segurança, privacidade e proteção das informações.

Por esse motivo, consideramos a responsabilidade no tratamento das informações um princípio fundamental do desenvolvimento da plataforma, buscando proporcionar um ambiente adequado para o gerenciamento dos registros escolares.`
        },
        {
          titulo: "Em Síntese",
          descricao: `Nosso projeto representa a união entre tecnologia, organização e educação, oferecendo uma solução desenvolvida para atender às necessidades da rotina escolar.

Por meio do Sistema de Controle de Atrasos e Saídas Antecipadas de Alunos, buscamos proporcionar às instituições de ensino maior controle, praticidade e transparência no acompanhamento das ocorrências relacionadas aos estudantes.

Nosso propósito é utilizar a tecnologia para tornar a gestão escolar mais eficiente, organizada e preparada para os desafios do presente e do futuro.`
        }
      ]
    },

    en: {
      titulo: "About Us",
      secoes: [
        {
          titulo: "Who Are We?",
          descricao: `We are a team dedicated to developing technological solutions focused on modernizing, organizing and improving school management.

Our goal is to provide digital tools that help make the administrative and educational processes of institutions more efficient, organized, transparent and accessible.

We believe technology should be an ally of education, providing resources that facilitate the work of school professionals and contribute to more precise and responsible management.`
        },
        {
          titulo: "Our Solution",
          descricao: `We developed the Student Late Arrival and Early Departure Control System, a solution designed to support school administrative and coordination activities.

The platform was created to provide more organized monitoring of students' routines, allowing the recording, management and consultation of occurrences related to student arrivals and departures.

This provides the institution with a centralized resource to assist in monitoring attendance and student movements.`
        },
        {
          titulo: "Our Vision",
          descricao: `To become a reference in developing technological solutions for school management, promoting innovation, efficiency and continuous improvement in the administrative processes of educational institutions.

We aim to contribute to responsible digital transformation, where technology truly serves education and the people who are part of the school community.`
        },
        {
          titulo: "Commitment to School Management",
          descricao: `We understand that efficient school management depends on organization, information and proper monitoring of processes.

Our solution was developed to support professionals responsible for managing students' routines, providing greater control over records and making information easier to access.

Our commitment is to offer a practical, reliable tool suited to the reality of educational institutions.`
        },
        {
          titulo: "Security and Responsibility",
          descricao: `The use of systems designed for the school environment requires special attention to security, privacy and information protection.

For this reason, we consider responsible information management a fundamental principle in the development of our platform, seeking to provide an appropriate environment for managing school records.`
        },
        {
          titulo: "In Summary",
          descricao: `Our project represents the union of technology, organization and education, offering a solution designed to meet the needs of everyday school life.

Through the Student Late Arrival and Early Departure Control System, we aim to provide educational institutions with greater control, convenience and transparency in monitoring student occurrences.

Our purpose is to use technology to make school management more efficient, organized and prepared for the challenges of today and tomorrow.`
        }
      ]
    },

    es: {
      titulo: "Sobre Nosotros",
      secoes: [
        {
          titulo: "¿Quiénes Somos?",
          descricao: `Somos un equipo dedicado al desarrollo de soluciones tecnológicas enfocadas en la modernización, organización y mejora de la gestión escolar.

Nuestro propósito es ofrecer herramientas digitales que contribuyan a hacer los procesos administrativos y pedagógicos de las instituciones educativas más eficientes, organizados, transparentes y accesibles.

Creemos que la tecnología debe ser una aliada de la educación, proporcionando recursos que faciliten el trabajo de los profesionales de la escuela y contribuyan a una gestión más precisa y responsable.`
        },
        {
          titulo: "Nuestra Solución",
          descricao: `Desarrollamos el Sistema de Control de Retrasos y Salidas Anticipadas de Alumnos, una solución destinada a apoyar las actividades de la secretaría y la coordinación escolar.

La plataforma fue diseñada para proporcionar un seguimiento más organizado de la rutina de los estudiantes, permitiendo registrar, controlar y consultar incidencias relacionadas con la entrada y salida de los alumnos.

De esta manera, la institución dispone de un recurso centralizado para ayudar en el seguimiento de la asistencia y los movimientos de los estudiantes.`
        },
        {
          titulo: "Nuestra Visión",
          descricao: `Ser una referencia en el desarrollo de soluciones tecnológicas para la gestión escolar, promoviendo innovación, eficiencia y mejora continua en los procesos administrativos de las instituciones educativas.

Pretendemos contribuir a una transformación digital responsable, en la que la tecnología esté verdaderamente al servicio de la educación y de las personas que forman parte de la comunidad escolar.`
        },
        {
          titulo: "Compromiso con la Gestión Escolar",
          descricao: `Entendemos que una gestión escolar eficiente depende de la organización, la información y el seguimiento adecuado de los procesos.

Nuestra solución fue desarrollada para apoyar a los profesionales responsables de administrar la rutina de los estudiantes, proporcionando un mayor control de los registros y facilitando la consulta de la información.

Nuestro compromiso es ofrecer una herramienta práctica, confiable y adecuada a la realidad de las instituciones educativas.`
        },
        {
          titulo: "Seguridad y Responsabilidad",
          descricao: `La utilización de sistemas destinados al entorno escolar exige una atención especial a la seguridad, privacidad y protección de la información.

Por este motivo, consideramos la responsabilidad en el tratamiento de la información un principio fundamental del desarrollo de nuestra plataforma, buscando proporcionar un entorno adecuado para la gestión de los registros escolares.`
        },
        {
          titulo: "En Resumen",
          descricao: `Nuestro proyecto representa la unión entre tecnología, organización y educación, ofreciendo una solución desarrollada para atender las necesidades de la rutina escolar.

A través del Sistema de Control de Retrasos y Salidas Anticipadas de Alumnos, buscamos proporcionar a las instituciones educativas mayor control, practicidad y transparencia en el seguimiento de las incidencias relacionadas con los estudiantes.

Nuestro propósito es utilizar la tecnología para hacer que la gestión escolar sea más eficiente, organizada y preparada para los desafíos del presente y del futuro.`
        }
      ]
    }
  };

  const t = textos[idioma];

  const toggleBalao = (index: number) => {
    setBalaoAberto(balaoAberto === index ? null : index);
  };

  const fundo = temaEscuro
    ? "bg-slate-900 text-white"
    : "bg-gray-100 text-gray-900";

  const cartao = temaEscuro
    ? "bg-slate-800 border-slate-700"
    : "bg-white border-gray-200";

  const tituloCartao = temaEscuro
    ? "text-blue-300"
    : "text-blue-950";

  const textoCartao = temaEscuro
    ? "text-gray-300"
    : "text-gray-700";

  return (
    <main className={`flex flex-col min-h-screen w-full ${fundo}`}>

      {/* CABEÇALHO */}
      <header className="flex flex-wrap items-center justify-between gap-4 bg-blue-900 p-4 shadow-md">

        <img
          className="rounded-full w-20 h-20 object-cover"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        <div className="flex-1 text-center">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            {t.titulo}
          </h1>
        </div>

        {/* IDIOMA E TEMA */}
        <div className="flex items-center gap-3">

          <select
            value={idioma}
            onChange={(e) =>
              setIdioma(e.target.value as "pt" | "en" | "es")
            }
            className="border border-gray-300 rounded-md p-2 text-sm bg-white text-gray-900"
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

          <button
            type="button"
            onClick={() => setTemaEscuro(!temaEscuro)}
            className="rounded-md bg-white text-blue-950 px-3 py-2 text-lg hover:bg-gray-200 transition"
            aria-label="Alternar tema"
          >
            {temaEscuro ? "☀️" : "🌙"}
          </button>

        </div>

      </header>

      {/* CONTAINER DOS BALÕES */}
      <div className="flex flex-col gap-4 p-6 md:p-8 max-w-4xl mx-auto w-full">

        {t.secoes.map((secao, index) => (

          <button
            key={index}
            type="button"
            onClick={() => toggleBalao(index)}
            aria-expanded={balaoAberto === index}
            className={`text-left cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
              cartao
            } ${
              balaoAberto === index
                ? temaEscuro
                  ? "border-blue-400"
                  : "border-blue-900 bg-blue-50/50"
                : temaEscuro
                  ? "hover:border-blue-400"
                  : "hover:border-blue-400"
            }`}
          >

            {/* TÍTULO DO BALÃO */}
            <div className="flex items-center justify-between gap-4">

              <p className={`font-bold text-lg ${tituloCartao}`}>
                {secao.titulo}
              </p>

              <span
                className={`text-blue-500 transition-transform duration-300 ${
                  balaoAberto === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>

            </div>

            {/* CONTEÚDO EXPANSÍVEL */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                balaoAberto === index
                  ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-400/40"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >

              <div className="overflow-hidden">

                <p className={`${textoCartao} leading-relaxed whitespace-pre-line`}>
                  {secao.descricao}
                </p>

              </div>

            </div>

          </button>

        ))}

      </div>

      {/* RODAPÉ */}
      <footer className={`text-center text-xs p-4 ${
        temaEscuro
          ? "bg-slate-800 text-gray-300"
          : "bg-gray-200 text-gray-600"
      }`}>
        © {new Date().getFullYear()} - {t.titulo}
      </footer>

    </main>
  );
}
