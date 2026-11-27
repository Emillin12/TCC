
import { useState } from "react"
import { Link, useNavigate } from "react-router"

export function AnexoAtestados() {
  const [tema, setTema] = useState("Claro")
  const [idioma, setIdioma] = useState("Português")
  const navigate = useNavigate()

  const traducoes: Record<string, Record<string, string>> = {
    English: {
      "Alertas Pendentes": "Pending Alerts",
      "Anexo de Atestado": "Attach Certificate",
      "Cadastrar Aluno": "Register Student",
      "Histórico Mensal": "Monthly History",
      "Histórico Semanal": "Weekly History",
      "Início": "Home",
      "Perfil Secretarias": "Secretariat Profile",
      "Anexe o atestado médico ou justificativa do aluno": "Attach the student's medical certificate or justification",
      "Nome do Aluno": "Student Name",
      "Data do Atestado": "Certificate Date",
      "Período do Atestado": "Certificate Period",
      "Horário de início": "Start Time",
      "Horário final": "End Time",
      "Tipo de Atestado": "Certificate Type",
      "Selecione": "Select",
      "Atestado médico": "Medical Certificate",
      "Declaração": "Statement",
      "Anexo": "Attachment",
      "Clique para anexar o arquivo": "Click to attach the file",
      "Observações": "Notes",
      "Limpar": "Clear",
      "Salvar atestado": "Save Certificate",
      "Tema": "Theme",
      "Claro": "Light",
      "Escuro": "Dark"
    },

    Español: {
      "Alertas Pendentes": "Alertas Pendientes",
      "Anexo de Atestado": "Adjuntar Certificado",
      "Cadastrar Aluno": "Registrar Alumno",
      "Histórico Mensal": "Historial Mensual",
      "Histórico Semanal": "Historial Semanal",
      "Início": "Inicio",
      "Perfil Secretarias": "Perfil de Secretaría",
      "Anexe o atestado médico ou justificativa do aluno": "Adjunte el certificado médico o justificación del alumno",
      "Nome do Aluno": "Nombre del Alumno",
      "Data do Atestado": "Fecha del Certificado",
      "Período do Atestado": "Período del Certificado",
      "Horário de início": "Hora de inicio",
      "Horário final": "Hora final",
      "Tipo de Atestado": "Tipo de Certificado",
      "Selecione": "Seleccione",
      "Atestado médico": "Certificado médico",
      "Declaração": "Declaración",
      "Anexo": "Adjunto",
      "Clique para anexar o arquivo": "Haga clic para adjuntar el archivo",
      "Observações": "Observaciones",
      "Limpar": "Limpiar",
      "Salvar atestado": "Guardar certificado",
      "Tema": "Tema",
      "Claro": "Claro",
      "Escuro": "Oscuro"
    }
  }

  function t(texto: string) {
    return traducoes[idioma]?.[texto] ?? texto
  }

  const menu = [
    { id: 1, nome: "Alertas Pendentes", rota: "/alertasPendentes" },
    { id: 3, nome: "Histórico Mensal", rota: "/historicoMensal" },
    { id: 4, nome: "Histórico Semanal", rota: "/historicoSemanal" },
    { id: 5, nome: "Início", rota: "/paginainicio" },
    { id: 6, nome: "Perfil Secretarias", rota: "/perfilSecretarias" },
    { id: 7, nome: "Login", rota: "/login" },
  ]

  const escuro = tema === "Escuro"

  const fundo = escuro ? "bg-gray-900" : "bg-gray-100"

  const painel = escuro
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-300"

  const textoForte = escuro ? "text-gray-100" : "text-gray-900"

  const textoMedio = escuro ? "text-gray-300" : "text-gray-700"

  const campo = escuro
    ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
    : "bg-white border-gray-300 text-gray-700 placeholder-gray-400"

  const borda = escuro ? "border-gray-600" : "border-gray-300"

  const [nomeAluno, setNomeAluno] = useState("")
  const [dataAtestado, setDataAtestado] = useState("")
  const [horarioInicio, setHorarioInicio] = useState("")
  const [horarioFinal, setHorarioFinal] = useState("")
  const [tipoAtestado, setTipoAtestado] = useState("")
  const [observacoes, setObservacoes] = useState("")
  const [arquivo, setArquivo] = useState<File | null>(null)

  function limparFormulario() {
    setNomeAluno("")
    setDataAtestado("")
    setHorarioInicio("")
    setHorarioFinal("")
    setTipoAtestado("")
    setObservacoes("")
    setArquivo(null)

    const inputArquivo = document.getElementById("arquivo-atestado") as HTMLInputElement | null
    if (inputArquivo) inputArquivo.value = ""
  }

  return (
    <main className={`flex min-h-screen ${fundo}`}>

      
      <aside className="bg-blue-950 text-white w-44 shrink-0 flex flex-col items-center py-3 px-2">

        <button
          onClick={() => navigate(-1)}
          className="self-start text-2xl mb-4"
          aria-label={t("Voltar")}
        >
          ↩
        </button>
        <img
          className="rounded-full w-24 h-24 object-cover mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        {menu.map((item) => (
          <Link
            key={item.id}
            to={item.rota}
            className={`block w-full text-left text-xs px-2 py-2 mb-6 ${
              item.nome === "Anexo de Atestado"
                ? "rounded bg-blue-800"
                : ""
            }`}
          >
            {t(item.nome)}
          </Link>
        ))}
      </aside>

      
      <section className="flex-1 min-w-0 p-6">
        <div className={`${painel} border rounded-md w-full min-h-screen p-8 flex flex-col`}>

          
          <header className="flex flex-wrap justify-between items-start gap-4 mb-10">

            <div>
              <h1 className={`text-2xl ${textoForte}`}>
                {t("Anexo de Atestado")}
              </h1>

              <p className={`text-xs ${textoMedio}`}>
                {t("Anexe o atestado médico ou justificativa do aluno")}
              </p>
            </div>

            
            <div className="flex gap-3">

              <label className={`text-xs ${textoMedio}`}>
                {t("Tema")}

                <select
                  value={tema}
                  onChange={(e) => setTema(e.target.value)}
                  className={`block w-28 h-8 px-2 mt-1 border rounded text-xs ${campo}`}
                >
                  <option value="Claro">{t("Claro")}</option>
                  <option value="Escuro">{t("Escuro")}</option>
                </select>
              </label>

              <label className={`text-xs ${textoMedio}`}>
                {t("Idioma")}

                <select
                  value={idioma}
                  onChange={(e) => setIdioma(e.target.value)}
                  className={`block w-28 h-8 px-2 mt-1 border rounded text-xs ${campo}`}
                >
                  <option value="Português">Português</option>
                  <option value="English">English</option>
                  <option value="Español">Español</option>
                </select>
              </label>

            </div>
          </header>

          {/* FORMULÁRIO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 flex-1">

            <div className="md:col-span-2">
              <p className={`text-xs mb-2 ${textoMedio}`}>
                {t("Nome do Aluno")}
              </p>

              <input
                type="text"
                value={nomeAluno}
                onChange={(e) => setNomeAluno(e.target.value)}
                placeholder={t("Nome do Aluno")}
                className={`w-full h-9 px-2 border rounded text-xs ${campo}`}
              />
            </div>

            <div>
              <p className={`text-xs mb-2 ${textoMedio}`}>
                {t("Data do Atestado")}
              </p>

              <input
                type="date"
                value={dataAtestado}
                onChange={(e) => setDataAtestado(e.target.value)}
                className={`w-full h-9 px-2 border rounded text-xs ${campo}`}
              />
            </div>

            <div className="md:col-span-2">
              <p className={`text-base mb-4 mt-6 ${textoForte}`}>
                {t("Período do Atestado")}
              </p>

              <div className="flex flex-wrap gap-8">

                <div className="w-44">
                  <p className={`text-xs mb-2 ${textoMedio}`}>
                    {t("Horário de início")}
                  </p>

                  <input
                    type="time"
                    step="1"
                    value={horarioInicio}
                    onChange={(e) => setHorarioInicio(e.target.value)}
                    className={`w-full h-9 px-2 border rounded text-xs ${campo}`}
                  />
                </div>

                <div className="w-44">
                  <p className={`text-xs mb-2 ${textoMedio}`}>
                    {t("Horário final")}
                  </p>

                  <input
                    type="time"
                    step="1"
                    value={horarioFinal}
                    onChange={(e) => setHorarioFinal(e.target.value)}
                    className={`w-full h-9 px-2 border rounded text-xs ${campo}`}
                  />
                </div>

              </div>
            </div>

            <div className="mt-4">
              <p className={`text-xs mb-2 ${textoMedio}`}>
                {t("Tipo de Atestado")}
              </p>

              <select
                value={tipoAtestado}
                onChange={(e) => setTipoAtestado(e.target.value)}
                className={`w-full h-9 px-2 border rounded text-xs ${campo}`}
              >
                <option value="">{t("Selecione")}</option>
                <option value="medico">{t("Atestado médico")}</option>
                <option value="declaracao">{t("Declaração")}</option>
              </select>
            </div>

            
            <div className="md:col-span-3">
              <p className={`text-xs mb-3 ${textoMedio}`}>
                {t("Anexo")}
              </p>

              <label className={`flex flex-col items-center justify-center w-full max-w-3xl h-28 border ${borda} rounded ${escuro ? "bg-gray-700" : "bg-white"} text-xs ${textoMedio} cursor-pointer`}>
                {arquivo ? arquivo.name : t("Clique para anexar o arquivo")}

                <input
                  id="arquivo-atestado"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => setArquivo(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>

            
            <div className="md:col-span-3">
              <p className={`text-xs mb-3 ${textoMedio}`}>
                {t("Observações")}
              </p>

              <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                placeholder={t("Observações")}
                className={`w-full max-w-md h-44 p-2 border rounded text-xs resize-none ${campo}`}
              />
            </div>

          </div>

          
          <div className="flex flex-wrap justify-end gap-4 mt-6">

            <button
              type="button"
              onClick={limparFormulario}
              className="bg-blue-900 text-white text-xs py-2 w-32 rounded-sm hover:bg-blue-800"
            >
              {t("Limpar")}
            </button>

            <button
              type="button"
              onClick={() => alert("Atestado preenchido!")}
              className="bg-blue-900 text-white text-xs py-2 w-32 rounded-sm hover:bg-blue-800"
            >
              {t("Salvar atestado")}
            </button>

          </div>

        </div>
      </section>
    </main>
  )
}
