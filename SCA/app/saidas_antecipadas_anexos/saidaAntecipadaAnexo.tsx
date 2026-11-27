
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export function SaidaAntecipadaAnexo() {
  const navigate = useNavigate();

  const [idioma, setIdioma] = useState<"pt" | "en" | "es">("pt");
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [arquivo, setArquivo] = useState<File | null>(null);

  const rotas = [
    "/alertasPendentes",
    "/anexoAtestados",
    "/cadastroalunos",
    "/historicoMensal",
    "/historicoSemanal",
    "/paginainicio",
    "/registrarOcorrencia"
  ];

  const textos = {
    pt: {
      voltar: "Voltar",
      menu: [
        "Alertas Pendentes",
        "Anexo de Atestado",
        "Cadastrar Aluno",
        "Histórico Mensal",
        "Histórico Semanal",
        "Início",
        "Registrar Ocorrência"
      ],
      titulo: "Registrar Saída Antecipada / Atraso",
      subtitulo: "Preencha os dados abaixo para registrar a ocorrência do aluno",
      aluno: "Aluno",
      tipo: "Tipo da Ocorrência",
      periodo: "Período",
      data: "Data da Ocorrência",
      turma: "Turma",
      chegada: "Horário de chegada",
      responsavel: "Responsável (Quem autorizou/ Recebeu)",
      saida: "Horário de saída",
      motivo: "Motivo / Observações",
      placeholderAluno: "Nome do aluno",
      placeholderResponsavel: "Nome do responsável",
      placeholderMotivo: "Informe o motivo da saída antecipada ou do atraso",
      selecionar: "Selecione",
      selecionarTurma: "Selecione a turma",
      saidaAntecipada: "Saída antecipada",
      atraso: "Atraso",
      manha: "Manhã",
      tarde: "Tarde",
      noite: "Noite",
      atestado: "Atestado",
      anexar: "Anexar Atestado",
      registrar: "Registrar Ocorrência",
      arquivo: "Clique para selecionar um arquivo",
      limpar: "Limpar",
      anos: ["6° ano", "7° ano", "8° ano", "9° ano", "1° ano", "2° ano", "3° ano"]
    },

    en: {
      voltar: "Back",
      menu: [
        "Pending Alerts",
        "Medical Certificate",
        "Register Student",
        "Monthly History",
        "Weekly History",
        "Home",
        "Register Occurrence"
      ],
      titulo: "Register Early Departure / Late Arrival",
      subtitulo: "Fill in the information below to register the student's occurrence",
      aluno: "Student",
      tipo: "Occurrence Type",
      periodo: "Period",
      data: "Occurrence Date",
      turma: "Class",
      chegada: "Arrival Time",
      responsavel: "Guardian (Who authorized / received)",
      saida: "Departure Time",
      motivo: "Reason / Notes",
      placeholderAluno: "Student name",
      placeholderResponsavel: "Guardian name",
      placeholderMotivo: "Enter the reason for early departure or late arrival",
      selecionar: "Select",
      selecionarTurma: "Select class",
      saidaAntecipada: "Early departure",
      atraso: "Late arrival",
      manha: "Morning",
      tarde: "Afternoon",
      noite: "Night",
      atestado: "Medical Certificate",
      anexar: "Attach Certificate",
      registrar: "Register Occurrence",
      arquivo: "Click to select a file",
      limpar: "Clear",
      anos: ["6th grade", "7th grade", "8th grade", "9th grade", "1st grade", "2nd grade", "3rd grade"]
    },

    es: {
      voltar: "Volver",
      menu: [
        "Alertas Pendientes",
        "Certificado Médico",
        "Registrar Alumno",
        "Historial Mensual",
        "Historial Semanal",
        "Inicio",
        "Registrar Ocurrencia"
      ],
      titulo: "Registrar Salida Anticipada / Retraso",
      subtitulo: "Complete los datos para registrar la incidencia del alumno",
      aluno: "Alumno",
      tipo: "Tipo de Ocurrencia",
      periodo: "Período",
      data: "Fecha de la Ocurrencia",
      turma: "Curso",
      chegada: "Hora de llegada",
      responsavel: "Responsable (Quién autorizó / recibió)",
      saida: "Hora de salida",
      motivo: "Motivo / Observaciones",
      placeholderAluno: "Nombre del alumno",
      placeholderResponsavel: "Nombre del responsable",
      placeholderMotivo: "Informe el motivo de la salida anticipada o del retraso",
      selecionar: "Seleccione",
      selecionarTurma: "Seleccione el curso",
      saidaAntecipada: "Salida anticipada",
      atraso: "Retraso",
      manha: "Mañana",
      tarde: "Tarde",
      noite: "Noche",
      atestado: "Certificado Médico",
      anexar: "Adjuntar Certificado",
      registrar: "Registrar Ocurrencia",
      arquivo: "Haga clic para seleccionar un archivo",
      limpar: "Limpiar",
      anos: ["6° año", "7° año", "8° año", "9° año", "1° año", "2° año", "3° año"]
    }
  };

  const t = textos[idioma];

  const fundo = temaEscuro
    ? "bg-slate-900 text-white"
    : "bg-gray-100 text-gray-900";

  const cartao = temaEscuro
    ? "bg-slate-800 text-white"
    : "bg-white text-gray-900";

  const campo = temaEscuro
    ? "bg-slate-700 border-slate-600 text-white"
    : "bg-white border-gray-300 text-gray-700";

  function limparArquivo() {
    setArquivo(null);
  }

  return (
    <main className={`flex min-h-screen w-full ${fundo}`}>

      {/* MENU LATERAL */}
      <aside className="bg-blue-950 text-white min-h-screen w-44 shrink-0 flex flex-col items-center py-3 px-2">

        <button
          onClick={() => navigate(-1)}
          className="self-start text-2xl mb-4 px-2"
          aria-label={t.voltar}
          title={t.voltar}
        >
          ↩
        </button>

        <img
          className="rounded-full w-24 h-24 object-cover mb-8"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        <nav className="flex flex-col w-full gap-4">
          {t.menu.map((nome, index) => (
            <Link
              key={index}
              to={rotas[index]}
              className="block w-full text-left text-xs px-2 py-2 hover:text-blue-300"
            >
              {nome}
            </Link>
          ))}
        </nav>

      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-1 min-w-0 p-6 md:p-8">

        <div className={`border rounded-xl shadow-lg w-full min-h-full p-6 md:p-8 flex flex-col ${cartao}`}>

          {/* CABEÇALHO */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-300 pb-5 mb-10">

            <div>
              <h1 className="text-2xl font-semibold">
                {t.titulo}
              </h1>

              <p className="text-xs opacity-70 mt-1">
                {t.subtitulo}
              </p>
            </div>

            {/* IDIOMA E TEMA */}
            <div className="flex items-center gap-3">

              <select
                value={idioma}
                onChange={(e) =>
                  setIdioma(e.target.value as "pt" | "en" | "es")
                }
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
                aria-label="Alternar tema"
              >
                {temaEscuro ? "☀️" : "🌙"}
              </button>

            </div>

          </div>

          {/* FORMULÁRIO */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(t.registrar);
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >

            {/* ALUNO */}
            <div>
              <label className="block text-xs mb-2">{t.aluno}</label>
              <input
                type="text"
                placeholder={t.placeholderAluno}
                className={`w-full h-10 px-3 border rounded text-sm ${campo}`}
              />
            </div>

            {/* TIPO DA OCORRÊNCIA */}
            <div>
              <label className="block text-xs mb-2">{t.tipo}</label>
              <select className={`w-full h-10 px-3 border rounded text-sm ${campo}`}>
                <option value="">{t.selecionar}</option>
                <option value="saida">{t.saidaAntecipada}</option>
                <option value="atraso">{t.atraso}</option>
              </select>
            </div>

            {/* PERÍODO */}
            <div>
              <label className="block text-xs mb-2">{t.periodo}</label>
              <select className={`w-full h-10 px-3 border rounded text-sm ${campo}`}>
                <option value="">{t.selecionar}</option>
                <option value="manha">{t.manha}</option>
                <option value="tarde">{t.tarde}</option>
                <option value="noite">{t.noite}</option>
              </select>
            </div>

            {/* DATA */}
            <div>
              <label className="block text-xs mb-2">{t.data}</label>
              <input
                type="date"
                className={`w-full h-10 px-3 border rounded text-sm ${campo}`}
              />
            </div>

            {/* TURMA */}
            <div>
              <label className="block text-xs mb-2">{t.turma}</label>
              <select className={`w-full h-10 px-3 border rounded text-sm ${campo}`}>
                <option value="">{t.selecionarTurma}</option>

                {t.anos.map((ano, index) => (
                  <option key={index} value={ano}>
                    {ano}
                  </option>
                ))}
              </select>
            </div>

            {/* HORÁRIO DE CHEGADA */}
            <div>
              <label className="block text-xs mb-2">{t.chegada}</label>
              <input
                type="time"
                className={`w-full h-10 px-3 border rounded text-sm ${campo}`}
              />
            </div>

            {/* RESPONSÁVEL */}
            <div>
              <label className="block text-xs mb-2">{t.responsavel}</label>
              <input
                type="text"
                placeholder={t.placeholderResponsavel}
                className={`w-full h-10 px-3 border rounded text-sm ${campo}`}
              />
            </div>

            {/* HORÁRIO DE SAÍDA */}
            <div>
              <label className="block text-xs mb-2">{t.saida}</label>
              <input
                type="time"
                className={`w-full h-10 px-3 border rounded text-sm ${campo}`}
              />
            </div>

            {/* MOTIVO */}
            <div className="md:col-span-2">
              <label className="block text-xs mb-2">{t.motivo}</label>
              <textarea
                placeholder={t.placeholderMotivo}
                className={`w-full h-24 p-3 border rounded text-sm resize-none ${campo}`}
              />
            </div>

            {/* ATESTADO */}
            <div className="md:col-span-2">

              <label className="block text-xs mb-3">
                {t.atestado}
              </label>

              <label className={`flex flex-col items-center justify-center w-72 h-48 max-w-full border-2 border-dashed rounded-lg cursor-pointer transition hover:border-blue-500 ${temaEscuro ? "bg-slate-700 border-slate-500" : "bg-gray-100 border-gray-300"}`}>

                <svg
                  className="w-16 h-16 opacity-50"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="17" cy="7" r="2.5" />
                  <path d="M2 20l7-11 5 8 3-4 5 7z" />
                </svg>

                <span className="text-xs mt-3 text-center px-2">
                  {arquivo ? arquivo.name : t.arquivo}
                </span>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) =>
                    setArquivo(e.target.files?.[0] || null)
                  }
                />

              </label>

              {arquivo && (
                <button
                  type="button"
                  onClick={limparArquivo}
                  className="text-red-500 text-xs mt-2 hover:underline"
                >
                  {t.limpar}
                </button>
              )}

            </div>

            {/* BOTÕES */}
            <div className="md:col-span-2 flex flex-wrap justify-end gap-4 mt-6">

              <button
                type="reset"
                onClick={limparArquivo}
                className="bg-gray-300 text-gray-800 text-xs font-medium py-3 px-6 rounded-md hover:bg-gray-400"
              >
                {t.limpar}
              </button>

              <button
                type="button"
                onClick={() => {
                  document.querySelector<HTMLInputElement>('input[type="file"]')?.click();
                }}
                className="bg-blue-950 text-white text-xs font-medium py-3 px-6 rounded-md hover:bg-blue-800"
              >
                {t.anexar}
              </button>

              <button
                type="submit"
                className="bg-blue-950 text-white text-xs font-medium py-3 px-6 rounded-md hover:bg-blue-800"
              >
                {t.registrar}
              </button>

            </div>

          </form>

        </div>
      </div>

    </main>
  );
}
