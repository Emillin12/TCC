
import { useState } from "react";
import { Link } from "react-router";

export function CadastroAlunos() {
  const [idioma, setIdioma] = useState("pt");
  const [temaEscuro, setTemaEscuro] = useState(false);

  const rotas = [
    "/alertasPendentes",
    "/anexoAtestados",
    "/cadastroalunos",
    "/historicoMensal",
    "/historicoSemanal",
    "/paginainicio",
    "/exibicaoAluno"
  ];

  const textos = {
    pt: {
      menu: ["Alertas Pendentes", "Anexo de Atestado", "Cadastrar Aluno(a)", "Histórico Mensal", "Histórico Semanal", "Início", "Exibição de Aluno"],
      titulo: "Cadastro de Aluno",
      subtitulo: "Preencha os dados abaixo para cadastrar um novo aluno",
      nome: "Nome Completo",
      nascimento: "Data de Nascimento",
      cpf: "CPF",
      instituicao: "Instituição de Ensino",
      turma: "Turma",
      turno: "Turno",
      email: "E-mail (opcional)",
      endereco: "Endereço",
      responsavel: "Responsável",
      telefone: "Telefone do Responsável",
      selecionar: "Selecione",
      limpar: "Limpar",
      cadastrar: "Cadastrar",
      anos: ["1° ano", "2° ano", "3° ano", "1° ano técnico", "2° ano técnico", "3° ano técnico", "6° ano", "7° ano", "8° ano", "9° ano"],
      turnos: ["Matutino", "Vespertino", "Noturno", "Integral"]
    },
    en: {
      menu: ["Pending Alerts", "Medical Certificate", "Register Student", "Monthly History", "Weekly History", "Home", "Student List"],
      titulo: "Student Registration",
      subtitulo: "Fill in the information below to register a new student",
      nome: "Full Name",
      nascimento: "Date of Birth",
      cpf: "ID Number",
      instituicao: "Educational Institution",
      turma: "Class",
      turno: "Shift",
      email: "Email (optional)",
      endereco: "Address",
      responsavel: "Guardian",
      telefone: "Guardian's Phone",
      selecionar: "Select",
      limpar: "Clear",
      cadastrar: "Register",
      anos: ["1st grade", "2nd grade", "3rd grade", "1st technical year", "2nd technical year", "3rd technical year", "6th grade", "7th grade", "8th grade", "9th grade"],
      turnos: ["Morning", "Afternoon", "Night", "Full-time"]
    },
    es: {
      menu: ["Alertas Pendientes", "Certificado Médico", "Registrar Alumno", "Historial Mensual", "Historial Semanal", "Inicio", "Lista de Alumnos"],
      titulo: "Registro del Alumno",
      subtitulo: "Complete los datos para registrar un nuevo alumno",
      nome: "Nombre Completo",
      nascimento: "Fecha de Nacimiento",
      cpf: "Documento",
      instituicao: "Institución Educativa",
      turma: "Curso",
      turno: "Turno",
      email: "Correo electrónico (opcional)",
      endereco: "Dirección",
      responsavel: "Responsable",
      telefone: "Teléfono del Responsable",
      selecionar: "Seleccione",
      limpar: "Limpiar",
      cadastrar: "Registrar",
      anos: ["1° año", "2° año", "3° año", "1° año técnico", "2° año técnico", "3° año técnico", "6° año", "7° año", "8° año", "9° año"],
      turnos: ["Mañana", "Tarde", "Noche", "Tiempo completo"]
    }
  };

  const t = textos[idioma as keyof typeof textos];

  const fundo = temaEscuro
    ? "bg-slate-900 text-white"
    : "bg-gray-100 text-gray-900";

  const cartao = temaEscuro
    ? "bg-slate-800 text-white"
    : "bg-white text-gray-900";

  const campo = temaEscuro
    ? "bg-slate-700 border-slate-600 text-white"
    : "bg-white border-gray-300 text-gray-900";

  return (
    <main className={`flex min-h-screen w-full ${fundo}`}>

      {/* MENU LATERAL */}
      <aside className="bg-blue-900 text-white min-h-screen w-44 shrink-0 p-5">

        <img
          className="rounded-full w-20 mb-8"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        <nav className="flex flex-col gap-5">
          {t.menu.map((nome, index) => (
            <Link
              key={index}
              to={rotas[index]}
              className="block text-left text-sm hover:text-blue-300"
            >
              {nome}
            </Link>
          ))}
        </nav>

      </aside>

      {/* CONTEÚDO */}
      <div className="flex-1 min-w-0 p-6 md:p-8">

        <div className={`min-h-full rounded-xl shadow-lg p-6 md:p-8 ${cartao}`}>

          {/* CABEÇALHO */}
          <div className="flex items-center justify-between gap-4 border-b border-gray-300 pb-5 mb-6">

            <div className="flex items-center gap-4">

              {/* ÍCONE DO ALUNO */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-900 shrink-0"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>

              <div>
                <h1 className="text-2xl font-semibold">
                  {t.titulo}
                </h1>

                <p className="text-sm opacity-70">
                  {t.subtitulo}
                </p>
              </div>

            </div>

            {/* IDIOMA E TEMA NO CANTO SUPERIOR DIREITO */}
            <div className="flex items-center gap-3 shrink-0">

              <select
                value={idioma}
                onChange={(e) => setIdioma(e.target.value)}
                className={`border rounded-md p-2 text-sm ${campo}`}
              >
                <option value="pt">Português</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>

              <button
                type="button"
                onClick={() => setTemaEscuro(!temaEscuro)}
                className="rounded-md bg-blue-900 text-white px-3 py-2 text-sm hover:bg-blue-700"
              >
                {temaEscuro ? "☀️" : "🌙"}
              </button>

            </div>

          </div>

          {/* FORMULÁRIO */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 px-2 md:px-6"
          >

            {/* NOME */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.nome}</label>
              <input
                type="text"
                placeholder={t.nome}
                className={`w-full border rounded-md p-2 ${campo}`}
              />
            </div>

            {/* DATA DE NASCIMENTO */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.nascimento}</label>
              <input
                type="date"
                className={`w-full border rounded-md p-2 ${campo}`}
              />
            </div>

            {/* CPF */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.cpf}</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                className={`w-full border rounded-md p-2 ${campo}`}
              />
            </div>

            {/* INSTITUIÇÃO */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.instituicao}</label>
              <input
                type="text"
                placeholder={t.instituicao}
                className={`w-full border rounded-md p-2 ${campo}`}
              />
            </div>

            {/* TURMA */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.turma}</label>
              <select className={`w-full border rounded-md p-2 ${campo}`}>
                <option value="">{t.selecionar}</option>
                {t.anos.map((ano, index) => (
                  <option key={index} value={ano}>{ano}</option>
                ))}
              </select>
            </div>

            {/* TURNO */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.turno}</label>
              <select className={`w-full border rounded-md p-2 ${campo}`}>
                <option value="">{t.selecionar}</option>
                {t.turnos.map((turno, index) => (
                  <option key={index} value={turno}>{turno}</option>
                ))}
              </select>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.email}</label>
              <input
                type="email"
                placeholder={t.email}
                className={`w-full border rounded-md p-2 ${campo}`}
              />
            </div>

            {/* ENDEREÇO */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.endereco}</label>
              <input
                type="text"
                placeholder={t.endereco}
                className={`w-full border rounded-md p-2 ${campo}`}
              />
            </div>

            {/* RESPONSÁVEL */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.responsavel}</label>
              <input
                type="text"
                placeholder={t.responsavel}
                className={`w-full border rounded-md p-2 ${campo}`}
              />
            </div>

            {/* TELEFONE */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">{t.telefone}</label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className={`w-full border rounded-md p-2 ${campo}`}
              />
            </div>

            {/* BOTÕES */}
            <div className="md:col-span-2 flex justify-end gap-4 mt-8">

              <button
                type="reset"
                className="bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md hover:bg-gray-400"
              >
                {t.limpar}
              </button>

              <button
                type="submit"
                className="bg-blue-900 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700"
              >
                {t.cadastrar}
              </button>

            </div>

          </form>

        </div>
      </div>
    </main>
  );
}
