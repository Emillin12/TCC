
import { useState } from "react"
import { Link } from "react-router"

export function AlertasPendentes() {
  const [tema, setTema] = useState("Claro")
  const [idioma, setIdioma] = useState("Português")

  const traducoes: Record<string, Record<string, string>> = {
    English: {
      "Alertas Pendentes": "Pending Alerts",
      "Anexo de Atestado": "Attach Certificate",
      "Cadastrar Aluno": "Register Student",
      "Histórico Mensal": "Monthly History",
      "Histórico Semanal": "Weekly History",
      "Início": "Home",
      "Perfil Secretarias": "Secretariat Profile",
      "Atenção! Alunos com atrasos ou saídas antecipadas acima do limite permitido":
        "Attention! Students with late arrivals or early departures above the allowed limit",
      "Total de alertas": "Total alerts",
      "Alunos": "Students",
      "Turma": "Class",
      "Tipo": "Type",
      "Quantidade": "Quantity",
      "Limite": "Limit",
      "Status": "Status",
      "Ações": "Actions",
      "Atraso": "Late Arrival",
      "Saída Antecipada": "Early Departure",
      "Alerta": "Alert",
      "Resolvido": "Resolved",
      "Histórico pessoal": "Personal History",
      "Adicionar linha": "Add row",
      "Tema": "Theme",
      "Claro": "Light",
      "Escuro": "Dark",
      "Idioma": "Language"
    },

    Español: {
      "Alertas Pendentes": "Alertas Pendientes",
      "Anexo de Atestado": "Adjuntar Certificado",
      "Cadastrar Aluno": "Registrar Alumno",
      "Histórico Mensal": "Historial Mensual",
      "Histórico Semanal": "Historial Semanal",
      "Início": "Inicio",
      "Perfil Secretarias": "Perfil de Secretaría",
      "Atenção! Alunos com atrasos ou saídas antecipadas acima do limite permitido":
        "¡Atención! Alumnos con retrasos o salidas anticipadas por encima del límite permitido",
      "Total de alertas": "Total de alertas",
      "Alunos": "Alumnos",
      "Turma": "Clase",
      "Tipo": "Tipo",
      "Quantidade": "Cantidad",
      "Limite": "Límite",
      "Status": "Estado",
      "Ações": "Acciones",
      "Atraso": "Retraso",
      "Saída Antecipada": "Salida Anticipada",
      "Alerta": "Alerta",
      "Resolvido": "Resuelto",
      "Histórico pessoal": "Historial personal",
      "Adicionar linha": "Agregar fila",
      "Tema": "Tema",
      "Claro": "Claro",
      "Escuro": "Oscuro",
      "Idioma": "Idioma"
    }
  }

  function t(texto: string) {
    return traducoes[idioma]?.[texto] ?? texto
  }

  const menu = [
    { id: 1, nome: "Alertas Pendentes" },
    { id: 2, nome: "Anexo de Atestado" },
    { id: 3, nome: "Cadastrar Aluno" },
    { id: 4, nome: "Histórico Mensal" },
    { id: 5, nome: "Histórico Semanal" },
    { id: 6, nome: "Início" },
    { id: 7, nome: "Perfil Secretarias" }
  ]

  const rotas: Record<string, string> = {
    "Alertas Pendentes": "/alertasPendentes",
    "Anexo de Atestado": "/anexoAtestados",
    "Cadastrar Aluno": "/cadastroalunos",
    "Histórico Mensal": "/historicoMensal",
    "Histórico Semanal": "/historicoSemanal",
    "Início": "/paginainicio",
    "Perfil Secretarias": "/perfilSecretarias"
  }

  const colunas = [
    { id: 1, nome: "Alunos" },
    { id: 2, nome: "Turma" },
    { id: 3, nome: "Tipo" },
    { id: 4, nome: "Quantidade" },
    { id: 5, nome: "Limite" },
    { id: 6, nome: "Status" },
    { id: 7, nome: "Ações" }
  ]

  const [alertas, setAlertas] = useState([
    {
      id: 1,
      aluno: "Maria Silva",
      turma: "9.1",
      tipo: "Atraso",
      quantidade: "3",
      limite: "3",
      status: "Alerta"
    },
    ...Array.from({ length: 6 }, (_, i) => ({
      id: i + 2,
      aluno: "",
      turma: "",
      tipo: "",
      quantidade: "",
      limite: "",
      status: ""
    }))
  ])

  const escuro = tema === "Escuro"

  const fundo = escuro ? "bg-gray-900" : "bg-gray-100"

  const painel = escuro
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-300"

  const textoForte = escuro ? "text-gray-100" : "text-gray-900"

  const textoMedio = escuro ? "text-gray-300" : "text-gray-700"

  const campo = escuro
    ? "bg-gray-700 border-gray-600 text-gray-100"
    : "bg-white border-gray-300 text-gray-700"

  const cabecalho = escuro
    ? "bg-gray-700 text-gray-200"
    : "bg-gray-100 text-gray-700"

  const borda = escuro ? "border-gray-600" : "border-gray-300"

  function atualizar(id: number, campo: string, valor: string) {
    setAlertas((anteriores) =>
      anteriores.map((alerta) =>
        alerta.id === id
          ? { ...alerta, [campo]: valor }
          : alerta
      )
    )
  }

  function adicionarLinha() {
    const proximoId =
      Math.max(...alertas.map((alerta) => alerta.id)) + 1

    setAlertas((anteriores) => [
      ...anteriores,
      {
        id: proximoId,
        aluno: "",
        turma: "",
        tipo: "",
        quantidade: "",
        limite: "",
        status: ""
      }
    ])
  }

  const totalAlertas = alertas.filter(
    (alerta) => alerta.status === "Alerta"
  ).length

  const campoTabela = `w-full ${escuro ? "bg-gray-800 text-gray-100 focus:bg-gray-700" : "bg-white text-gray-800 focus:bg-blue-50"} px-2 py-2 text-xs outline-none`

  return (
    <main className={`flex min-h-screen ${fundo}`}>
      {/* MENU LATERAL */}
      <div className="bg-blue-950 text-white w-44 shrink-0 flex flex-col items-center py-3 px-2">
        <img
          className="rounded-full w-24 h-24 object-cover mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        {menu.map((item) => (
          <Link
            key={item.id}
            to={rotas[item.nome]}
            className={`block w-full text-left text-xs px-2 py-2 mb-6 ${
              item.nome === "Alertas Pendentes"
                ? "rounded bg-blue-800"
                : ""
            }`}
          >
            {t(item.nome)}
          </Link>
        ))}
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-1 min-w-0 p-6">
        <div
          className={`${painel} border rounded-md w-full min-h-screen p-8 flex flex-col`}
        >
          {/* CABEÇALHO */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
            <div className="flex items-center gap-4">
              <span className="text-3xl" aria-hidden="true">
                🔔
              </span>

              <div>
                <h1 className={`text-2xl ${textoForte}`}>
                  {t("Alertas Pendentes")}
                </h1>

                <p className={`text-xs ${textoMedio}`}>
                  {t(
                    "Atenção! Alunos com atrasos ou saídas antecipadas acima do limite permitido"
                  )}
                </p>
              </div>
            </div>

            {/* TEMA E IDIOMA */}
            <div className="flex flex-wrap gap-3">
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

          {/* TOTAL DE ALERTAS */}
          <div className="flex justify-end mb-6">
            <div className="bg-red-100 text-red-700 rounded px-5 py-3 text-center">
              <p className="text-xs font-bold">
                {t("Total de alertas")}:
              </p>

              <p className="text-xl font-bold">
                {totalAlertas}
              </p>
            </div>
          </div>

          {/* TABELA */}
          <div className={`overflow-x-auto border ${borda} rounded`}>
            <table className={`w-full min-w-[700px] text-xs text-left border-collapse ${textoMedio}`}>
              <thead className={cabecalho}>
                <tr>
                  {colunas.map((coluna) => (
                    <th
                      key={coluna.id}
                      className={`border ${borda} px-3 py-2 font-semibold`}
                    >
                      {t(coluna.nome)}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {alertas.map((alerta) => (
                  <tr key={alerta.id}>
                    <td className={`border ${borda} p-0`}>
                      <input
                        type="text"
                        value={alerta.aluno}
                        onChange={(e) =>
                          atualizar(alerta.id, "aluno", e.target.value)
                        }
                        className={campoTabela}
                        aria-label="Aluno"
                      />
                    </td>

                    <td className={`border ${borda} p-0 w-24`}>
                      <input
                        type="text"
                        value={alerta.turma}
                        onChange={(e) =>
                          atualizar(alerta.id, "turma", e.target.value)
                        }
                        className={campoTabela}
                        aria-label="Turma"
                      />
                    </td>

                    <td className={`border ${borda} p-0 w-40`}>
                      <select
                        value={alerta.tipo}
                        onChange={(e) =>
                          atualizar(alerta.id, "tipo", e.target.value)
                        }
                        className={campoTabela}
                        aria-label="Tipo"
                      >
                        <option value=""></option>
                        <option value="Atraso">{t("Atraso")}</option>
                        <option value="Saída Antecipada">
                          {t("Saída Antecipada")}
                        </option>
                      </select>
                    </td>

                    <td className={`border ${borda} p-0 w-28`}>
                      <input
                        type="number"
                        min="0"
                        value={alerta.quantidade}
                        onChange={(e) =>
                          atualizar(alerta.id, "quantidade", e.target.value)
                        }
                        className={campoTabela}
                        aria-label="Quantidade"
                      />
                    </td>

                    <td className={`border ${borda} p-0 w-24`}>
                      <input
                        type="number"
                        min="0"
                        value={alerta.limite}
                        onChange={(e) =>
                          atualizar(alerta.id, "limite", e.target.value)
                        }
                        className={campoTabela}
                        aria-label="Limite"
                      />
                    </td>

                    <td className={`border ${borda} p-0 w-32`}>
                      <select
                        value={alerta.status}
                        onChange={(e) =>
                          atualizar(alerta.id, "status", e.target.value)
                        }
                        className={campoTabela}
                        aria-label="Status"
                      >
                        <option value=""></option>
                        <option value="Alerta">{t("Alerta")}</option>
                        <option value="Resolvido">{t("Resolvido")}</option>
                      </select>
                    </td>

                    <td className={`border ${borda} px-3 py-2 w-40 ${escuro ? "bg-gray-700" : "bg-gray-200"}`}>
                      {alerta.aluno && (
                        <button className="text-xs text-blue-500 underline">
                          {t("Histórico pessoal")}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ADICIONAR LINHA */}
          <button
            onClick={adicionarLinha}
            className="self-start mt-4 px-4 py-2 text-xs text-white bg-blue-700 rounded hover:bg-blue-800"
          >
            + {t("Adicionar linha")}
          </button>
        </div>
      </div>
    </main>
  )
}
