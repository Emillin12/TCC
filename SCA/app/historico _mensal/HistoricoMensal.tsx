import { useState } from "react"
import {Link, useNavigate} from "react-router"

export function HistoricoMensal() {
  const navegar = useNavigate()
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
      id : 5,
      nome : "Histórico Semanal"
    },
    {
      id : 6,
      nome : "Inicio"
    },
    
  ]
  const cards = [
    {
      id : 1,
      nome : "Atrasos no mês",
      valor : 40,
      rodape : "Total de Atrasos",
      cor : "bg-blue-300",
      
    },
    {
      id : 2,
      nome : "Total de registros",
      valor : 86,
      rodape : "",
      cor : "bg-green-300",
      corEscura : "bg-green-800"
    },
    {
      id : 3,
      nome : "Média de registros por dia",
      valor : 2,
      rodape : "",
      cor : "bg-yellow-200",
      corEscura : "bg-yellow-700"
    }
  ]
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]
  const colunas = [
    {
      id : 1,
      nome : "Data",
      campo : "data"
    },
    {
      id : 2,
      nome : "Tipo",
      campo : "tipo"
    },
    {
      id : 3,
      nome : "Aluno",
      campo : "aluno"
    },
    {
      id : 4,
      nome : "Turma",
      campo : "turma"
    },
    {
      id : 5,
      nome : "Horário previsto",
      campo : "previsto"
    },
    {
      id : 6,
      nome : "Horário real",
      campo : "real"
    },
    {
      id : 7,
      nome : "Atraso/Antecipação",
      campo : "situacao"
    },
    {
      id : 8,
      nome : "Observação",
      campo : "observacao"
    }
  ]
  const registros = [
    {
      id : 1,
      data : "14/05/2026",
      tipo : "Atraso",
      aluno : "José Augusto",
      turma : "6.1",
      previsto : "12:30",
      real : "13:00",
      situacao : "Atraso",
      observacao : "Transporte"
    }
  ]
  const tabelaFundamental = [
    { id : 1, turma : "6.1", atrasos : "1", saidas : "0" },
    { id : 2, turma : "6.2", atrasos : "", saidas : "" },
    { id : 3, turma : "7.1", atrasos : "", saidas : "" },
    { id : 4, turma : "7.2", atrasos : "", saidas : "" },
    { id : 5, turma : "8.1", atrasos : "", saidas : "" },
    { id : 6, turma : "8.2", atrasos : "", saidas : "" },
    { id : 7, turma : "9.1", atrasos : "", saidas : "" },
    { id : 8, turma : "9.2", atrasos : "", saidas : "" }
  ]
  const tabelaMedio = [
    { id : 1, turma : "1.1", atrasos : "", saidas : "" },
    { id : 2, turma : "1.2", atrasos : "", saidas : "" },
    { id : 3, turma : "1 Técnico", atrasos : "", saidas : "" },
    { id : 4, turma : "2.1", atrasos : "", saidas : "" },
    { id : 5, turma : "2.2", atrasos : "", saidas : "" },
    { id : 6, turma : "2 Técnico", atrasos : "", saidas : "" },
    { id : 7, turma : "3.1", atrasos : "", saidas : "" },
    { id : 8, turma : "3.2", atrasos : "", saidas : "" },
    { id : 9, turma : "3 Técnico", atrasos : "", saidas : "" }
  ]
  const turmas = [...tabelaFundamental, ...tabelaMedio].map((linha) => linha.turma)
  const tabelasLaterais = [
    {
      id : 1,
      linhas : tabelaFundamental
    },
    {
      id : 2,
      linhas : tabelaMedio
    }
  ]

 
  const [tema, setTema] = useState("Claro")
  const [idioma, setIdioma] = useState("Português")
  const [filtroMes, setFiltroMes] = useState("Maio")
  const [filtroTurma, setFiltroTurma] = useState("")

  
  const traducoes: Record<string, Record<string, string>> = {
    English: {
      "Alertas Pendentes": "Pending Alerts",
      "Anexo de atestado": "Medical certificate",
      "Cadastrar Aluno": "Register Student",
      "Histórico Mensal": "Monthly History",
      "Histórico Semanal": "Weekly History",
      "Inicio": "Home",
      "Registrar ocorrência": "Log Incident",
      "Histórico Mensal de Atrasos e Saídas Antecipadas": "Monthly History of Late Arrivals and Early Departures",
      "Acompanhe os atrasos e saídas antecipadas dos alunos no mês": "Track students' late arrivals and early departures during the month",
      "Atrasos no mês": "Late arrivals this month",
      "Total de Atrasos": "Total late arrivals",
      "Total de registros": "Total records",
      "Média de registros por dia": "Average records per day",
      "Mês": "Month",
      "Turma": "Class",
      "Janeiro": "January",
      "Fevereiro": "February",
      "Março": "March",
      "Abril": "April",
      "Maio": "May",
      "Junho": "June",
      "Julho": "July",
      "Agosto": "August",
      "Setembro": "September",
      "Outubro": "October",
      "Novembro": "November",
      "Dezembro": "December",
      "Data": "Date",
      "Tipo": "Type",
      "Aluno": "Student",
      "Horário previsto": "Scheduled time",
      "Horário real": "Actual time",
      "Atraso/Antecipação": "Late/Early",
      "Observação": "Notes",
      "Atraso": "Late arrival",
      "Saída Antecipada": "Early departure",
      "Transporte": "Transportation",
      "Atrasos": "Late arrivals",
      "Saídas antecipadas": "Early departures",
      "1 Técnico": "1 Technical",
      "2 Técnico": "2 Technical",
      "3 Técnico": "3 Technical",
      "Nenhum registro encontrado.": "No records found.",
      "Tema": "Theme",
      "Claro": "Light",
      "Escuro": "Dark",
      "Idioma": "Language"
    },
    Español: {
      "Alertas Pendentes": "Alertas Pendientes",
      "Anexo de atestado": "Adjuntar certificado",
      "Cadastrar Aluno": "Registrar Alumno",
      "Histórico Mensal": "Historial Mensual",
      "Histórico Semanal": "Historial Semanal",
      "Registrar ocorrência": "Registrar incidencia",
      "Histórico Mensal de Atrasos e Saídas Antecipadas": "Historial Mensual de Retrasos y Salidas Anticipadas",
      "Acompanhe os atrasos e saídas antecipadas dos alunos no mês": "Sigue los retrasos y salidas anticipadas de los alumnos en el mes",
      "Atrasos no mês": "Retrasos en el mes",
      "Total de Atrasos": "Total de retrasos",
      "Média de registros por dia": "Promedio de registros por día",
      "Mês": "Mes",
      "Turma": "Clase",
      "Janeiro": "Enero",
      "Fevereiro": "Febrero",
      "Março": "Marzo",
      "Abril": "Abril",
      "Maio": "Mayo",
      "Junho": "Junio",
      "Julho": "Julio",
      "Agosto": "Agosto",
      "Setembro": "Septiembre",
      "Outubro": "Octubre",
      "Novembro": "Noviembre",
      "Dezembro": "Diciembre",
      "Data": "Fecha",
      "Aluno": "Alumno",
      "Horário previsto": "Hora prevista",
      "Horário real": "Hora real",
      "Atraso/Antecipação": "Retraso/Anticipación",
      "Observação": "Observación",
      "Atraso": "Retraso",
      "Saída Antecipada": "Salida anticipada",
      "Atrasos": "Retrasos",
      "Saídas antecipadas": "Salidas anticipadas",
      "Nenhum registro encontrado.": "No se encontraron registros.",
      "Escuro": "Oscuro"
    }
  }

  const rotas: Record<string, string> = {
    "Alertas Pendentes" : "/alertasPendentes",
    "Anexo de Atestado" : "/anexoAtestados",
    "Cadastrar Aluno" : "/cadastroalunos",
    "Histórico Mensal" : "/historicoMensal",
    "Histórico Semanal" : "/historicoSemanal",
    "Início" : "/paginainicio",
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

  
  const registrosFiltrados = registros.filter((registro) => {
    const mesDoRegistro = meses[Number(registro.data.split("/")[1]) - 1]
    const mesOk = filtroMes === "" || mesDoRegistro === filtroMes
    const turmaOk = filtroTurma === "" || registro.turma === filtroTurma
    return mesOk && turmaOk
  })

  return (
    <main className={`flex min-h-screen ${fundo}`}>
      <div className="bg-blue-950 text-white w-44 shrink-0 flex flex-col items-center py-3 px-2">

        <button
          onClick={() => navegar(-1)}
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
            to={rotas[item.nome]}
            className={`block w-full text-left text-xs px-2 py-2 mb-6 ${item.nome === "Histórico Mensal" ? " rounded" : ""}`}
          >
            {t(item.nome)}
          </Link>
        ))}
      </div>

      <div className="flex-1 min-w-0 p-6">
        <div className={`${painel} border rounded-md w-full min-h-screen p-8 flex flex-col`}>
          <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
            <div className="flex items-center gap-4">
              <span className="text-3xl" aria-hidden="true">📅</span>
              <div>
                <h1 className={`text-2xl ${textoForte}`}>
                  {t("Histórico Mensal de Atrasos e Saídas Antecipadas")}
                </h1>
                <p className={`text-xs ${textoMedio}`}>
                  {t("Acompanhe os atrasos e saídas antecipadas dos alunos no mês")}
                </p>
              </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mb-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`${escuro ? card.corEscura : card.cor} ${escuro ? "text-white" : "text-gray-800"} rounded-lg p-3 min-h-32 flex flex-col justify-between`}
              >
                <p className="text-xs">{t(card.nome)}</p>
                <p className="text-4xl text-center">{card.valor}</p>
                <p className="text-xs h-4">{card.rodape && t(card.rodape)}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 mb-8">
            <select
              value={filtroMes}
              onChange={(e) => setFiltroMes(e.target.value)}
              className={`w-full max-w-220px h-9 px-2 border rounded text-xs ${campo}`}
              aria-label={t("Mês")}
            >
              <option value="">{t("Mês")}</option>
              {meses.map((mes) => (
                <option key={mes} value={mes}>{t(mes)}</option>
              ))}
            </select>

            <select
              value={filtroTurma}
              onChange={(e) => setFiltroTurma(e.target.value)}
              className={`w-full max-w-220px h-9 px-2 border rounded text-xs ${campo}`}
              aria-label={t("Turma")}
            >
              <option value="">{t("Turma")}</option>
              {turmas.map((turma) => (
                <option key={turma} value={turma}>{t(turma)}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            <div className={`flex-1 min-w-0 overflow-x-auto border ${caixa} rounded self-start`}>
              <table className={`w-full min-w-(700px) text-xs text-left border-collapse ${textoMedio}`}>
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
                  {registrosFiltrados.length === 0 ? (
                    <tr>
                      <td
                        colSpan={colunas.length}
                        className="px-3 py-8 text-center"
                      >
                        {t("Nenhum registro encontrado.")}
                      </td>
                    </tr>
                  ) : (
                    registrosFiltrados.map((registro) => (
                      <tr key={registro.id}>
                        {colunas.map((coluna) => (
                          <td
                            key={coluna.id}
                            className={`border ${caixa} px-3 py-2`}
                          >
                            {t(String(registro[coluna.campo as keyof typeof registro]))}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            

            <div className="flex flex-col gap-6 xl:w-80 shrink-0">
              {tabelasLaterais.map((tabela) => (
                <div key={tabela.id} className={`border ${caixa} rounded overflow-hidden`}>
                  <table className={`w-full text-xs text-left border-collapse ${textoMedio}`}>
                    <thead className={cabecalho}>
                      <tr>
                        <th className={`border ${caixa} px-3 py-2 font-semibold`}>{t("Turma")}</th>
                        <th className={`border ${caixa} px-3 py-2 font-semibold`}>{t("Atrasos")}</th>
                        <th className={`border ${caixa} px-3 py-2 font-semibold`}>{t("Saídas antecipadas")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabela.linhas.map((linha) => (
                        <tr key={linha.id}>
                          <td className={`border ${caixa} px-3 py-2`}>{t(linha.turma)}</td>
                          <td className={`border ${caixa} px-3 py-2`}>{linha.atrasos || "-"}</td>
                          <td className={`border ${caixa} px-3 py-2`}>{linha.saidas || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )

}