import { useState } from "react"
import { Link, useNavigate } from "react-router"

export function ExibicaoAluno() {
  const menu = [
    {
      id : 1,
      nome : "Alertas Pendentes"
    },
    {
      id : 2,
      nome : "Anexo de atestado"
    },
    {
      id : 3,
      nome : "Cadastrar Aluno"
    },
    {
      id : 4,
      nome : "Histórico Mensal"
    },
    {
      id : 5,
      nome : "Histórico Semanal"
    },
    {
      id : 6,
      nome : "Inicio"
    }
  ]
  const aluno = {
    nome : "Maria Silva",
    codigo : "000000",
    turma : "9º ano 1",
    atrasos : 4,
    saidas : 0,
    limite : 3
  }
  const cartoes = [
    {
      id : 1,
      nome : "Atrasos",
      valor : aluno.atrasos,
      rodape : "Limite semanal",
      cor : "bg-red-200",
      corEscura : "bg-red-900"
    },
    {
      id : 2,
      nome : "Saídas Antecipadas",
      valor : aluno.saidas,
      rodape : "",
      cor : "bg-yellow-200",
      corEscura : "bg-yellow-700"
    }
  ]
  const colunas = [
    {
      id : 1,
      nome : "Data",
      campo : "data"
    },
    {
      id : 2,
      nome : "Horário",
      campo : "horario"
    },
    {
      id : 3,
      nome : "Status",
      campo : "status"
    },
    {
      id : 4,
      nome : "Justificativas",
      campo : "justificativa"
    },
    {
      id : 5,
      nome : "Observações",
      campo : "observacao"
    }
  ]
  const atrasos = [
    {
      id : 1,
      data : "12/05/2026",
      horario : "7:00 às 8:00",
      status : "Justificado",
      justificativa : "Atestado Médico",
      observacao : ""
    }
  ]
  const saidasAntecipadas: typeof atrasos = []
  const tabelas = [
    {
      id : 1,
      titulo : "Histórico de Atrasos",
      linhas : atrasos
    },
    {
      id : 2,
      titulo : "Histórico de Saídas Antecipadas",
      linhas : saidasAntecipadas
    }
  ]
  const atestados = [
    {
      id : 1
    },
    {
      id : 2
    },
    {
      id : 3
    }
  ]

  const navigate = useNavigate()

  
  const [tema, setTema] = useState("Claro")
  const [idioma, setIdioma] = useState("Português")

  
  const traducoes: Record<string, Record<string, string>> = {
    English: {
      "Voltar": "Back",
      "Alertas Pendentes": "Pending Alerts",
      "Anexo de atestado": "Medical certificate",
      "Cadastrar Aluno": "Register Student",
      "Histórico Mensal": "Monthly History",
      "Histórico Semanal": "Weekly History",
      "Inicio": "Home",
      "Registrar ocorrência": "Log Incident",
      "Exibição do Aluno Específico": "Individual Student View",
      "Análise sobre as ações dos alunos": "Analysis of student actions",
      "ID": "ID",
      "Turma": "Class",
      "Alerta: Limite excedido": "Alert: Limit exceeded",
      "Atrasos": "Late arrivals",
      "Limite semanal": "Weekly limit",
      "Saídas Antecipadas": "Early departures",
      "Histórico de Atrasos": "Late Arrivals History",
      "Histórico de Saídas Antecipadas": "Early Departures History",
      "Atestados Médicos": "Medical Certificates",
      "Data": "Date",
      "Horário": "Time",
      "Justificativas": "Justifications",
      "Observações": "Notes",
      "7:00 às 8:00": "7:00 to 8:00",
      "Justificado": "Justified",
      "Atestado Médico": "Medical certificate",
      "9º ano 1": "9th grade 1",
      "Nenhum registro encontrado.": "No records found.",
      "Tema": "Theme",
      "Claro": "Light",
      "Escuro": "Dark",
      "Idioma": "Language"
    },
    Español: {
      "Voltar": "Volver",
      "Alertas Pendentes": "Alertas Pendientes",
      "Anexo de atestado": "Adjuntar certificado",
      "Cadastrar Aluno": "Registrar Alumno",
      "Histórico Mensal": "Historial Mensual",
      "Histórico Semanal": "Historial Semanal",
      "Registrar ocorrência": "Registrar incidencia",
      "Exibição do Aluno Específico": "Vista del Alumno Específico",
      "Análise sobre as ações dos alunos": "Análisis sobre las acciones de los alumnos",
      "Turma": "Clase",
      "Alerta: Limite excedido": "Alerta: Límite excedido",
      "Atrasos": "Retrasos",
      "Limite semanal": "Límite semanal",
      "Saídas Antecipadas": "Salidas anticipadas",
      "Histórico de Atrasos": "Historial de Retrasos",
      "Histórico de Saídas Antecipadas": "Historial de Salidas Anticipadas",
      "Atestados Médicos": "Certificados Médicos",
      "Data": "Fecha",
      "Status": "Estado",
      "Justificativas": "Justificaciones",
      "Observações": "Observaciones",
      "7:00 às 8:00": "7:00 a 8:00",
      "Atestado Médico": "Certificado médico",
      "9º ano 1": "9.º año 1",
      "Nenhum registro encontrado.": "No se encontraron registros.",
      "Escuro": "Oscuro"
    }
  }

  function t(texto: string) {
    return traducoes[idioma]?.[texto] ?? texto
  }

  
  const escuro = tema === "Escuro"
  const fundo = escuro ? "bg-gray-900" : "bg-gray-100"
  const painel = escuro ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
  const caixa = escuro ? "border-gray-600" : "border-gray-300"
  const cabecalho = escuro ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
  const textoForte = escuro ? "text-gray-100" : "text-gray-900"
  const textoMedio = escuro ? "text-gray-300" : "text-gray-700"
  const campo = escuro ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300 text-gray-700"
  const imagemVazia = escuro ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-400"

 
  const rotas: Record<string, string> = {
    "Alertas Pendentes": "/alertasPendentes",
    "Anexo de atestado": "/AnexoAtestados",
    "Cadastrar Aluno": "/CadastroAlunos",
    "Histórico Mensal": "/HistoricoMensal",
    "Histórico Semanal": "/HistoricoSemanal",
    "Inicio": "/PaginaInicio",
    "Registrar ocorrência": "/SaidaAntecipada"
  }

  return (
    <main className={`flex min-h-screen ${fundo}`}>
      <div className="bg-blue-950 from-blue-950 to-blue-500 text-white w-44 shrink-0 flex flex-col items-center py-3 px-2">
        <button
          onClick={() => navigate(-1)}
          className="self-start text-2xl mb-3 px-2"
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
            to={rotas[item.nome]}
            className="block w-full text-left text-xs px-2 py-2 mb-6"
          >
            {t(item.nome)}
          </Link>
        ))}
      </div>

      <div className="flex-1 min-w-0 p-6">
        <div className={`${painel} border rounded-md w-full min-h-screen p-8 flex flex-col`}>
          <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
            <div>
              <h1 className={`text-2xl ${textoForte}`}>
                {t("Exibição do Aluno Específico")}
              </h1>
              <p className={`text-xs ${textoMedio}`}>
                {t("Análise sobre as ações dos alunos")}
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
          </div>

          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="flex items-center gap-6">
              <span className={`text-7xl ${textoForte}`} aria-hidden="true">👤</span>
              <div>
                <h2 className={`text-xl ${textoForte} mb-1`}>
                  {aluno.nome}
                </h2>
                <p className={`text-xs ${textoMedio}`}>{t("ID")}: {aluno.codigo}</p>
                <p className={`text-xs ${textoMedio} mb-3`}>{t("Turma")}: {t(aluno.turma)}</p>
                {aluno.atrasos > aluno.limite && (
                  <span className={`inline-block rounded px-3 py-1 text-xs font-bold ${escuro ? "bg-red-900 text-red-200" : "bg-red-200 text-red-700"}`}>
                    {t("Alerta: Limite excedido")}
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-6">
              {cartoes.map((cartao) => (
                <div
                  key={cartao.id}
                  className={`${escuro ? cartao.corEscura : cartao.cor} ${escuro ? "text-white" : "text-gray-800"} rounded-lg p-3 w-44 min-h-28 flex flex-col justify-between`}
                >
                  <p className="text-xs text-center">{t(cartao.nome)}</p>
                  <p className="text-3xl text-center">{cartao.valor}</p>
                  <p className="text-xs h-4">
                    {cartao.rodape && `${t(cartao.rodape)}: ${aluno.limite}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {tabelas.map((tabela) => (
            <div key={tabela.id} className="mb-10">
              <h2 className={`border ${caixa} rounded text-center text-sm ${textoForte} py-1 mb-3`}>
                {t(tabela.titulo)}
              </h2>
              <div className={`overflow-x-auto border ${caixa} rounded`}>
                <table className={`w-full min-w[600px text-xs text-left border-collapse ${textoMedio}`}>
                  <thead className={cabecalho}>
                    <tr>
                      {colunas.map((coluna) => (
                        <th
                          key={coluna.id}
                          className={`border ${caixa} px-3 py-2 font-semibold`}
                        >
                          {t(coluna.nome)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tabela.linhas.length === 0 ? (
                      <tr>
                        <td
                          colSpan={colunas.length}
                          className="px-3 py-8 text-center"
                        >
                          {t("Nenhum registro encontrado.")}
                        </td>
                      </tr>
                    ) : (
                      tabela.linhas.map((linha) => (
                        <tr key={linha.id}>
                          {colunas.map((coluna) => (
                            <td
                              key={coluna.id}
                              className={`border ${caixa} px-3 py-2`}
                            >
                              {t(String(linha[coluna.campo as keyof typeof linha])) || "-"}
                            </td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div>
            <h2 className={`border ${caixa} rounded text-center text-sm ${textoForte} py-1 mb-6`}>
              {t("Atestados Médicos")}
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {atestados.map((atestado) => (
                <div
                  key={atestado.id}
                  className={`${imagemVazia} rounded w-40 h-28 flex items-center justify-center text-4xl`}
                  aria-label={`${t("Atestados Médicos")} ${atestado.id}`}
                >
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )

}