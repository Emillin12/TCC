import {useState} from "react";
export function AlertasPendentes() {
  const menu = [
    {
      id : 1,
      nome : "Alertas Pendentes"
    },
    {
      id : 2,
      nome : "Anexo de Atestado"
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
      nome : "Início"
    },
    {
      id : 7,
      nome : "Registrar ocorrência"
    }
  ]
  const colunas = [
    {
      id : 1,
      nome : "Alunos"
    },
    {
      id : 2,
      nome : "Turma"
    },
    {
      id : 3,
      nome : "Tipo"
    },
    {
      id : 4,
      nome : "Quantidade"
    },
    {
      id : 5,
      nome : "Limite"
    },
    {
      id : 6,
      nome : "Status"
    },
    {
      id : 7,
      nome : "Ações"
    }
  ]

  
  const [alertas, setAlertas] = useState([
    {
      id : 1,
      aluno : "Maria Silva",
      turma : "9.1",
      tipo : "Atraso",
      quantidade : "3",
      limite : "3",
      status : "Alerta"
    },
    ...Array.from({ length: 6 }, (_, i) => ({
      id : i + 2,
      aluno : "",
      turma : "",
      tipo : "",
      quantidade : "",
      limite : "",
      status : ""
    }))
  ])

  
  function atualizar(id: number, campo: string, valor: string) {
    setAlertas(
      alertas.map((alerta) =>
        alerta.id === id ? { ...alerta, [campo]: valor } : alerta
      )
    )
  }

  
  function adicionarLinha() {
    const proximoId = Math.max(...alertas.map((alerta) => alerta.id)) + 1
    setAlertas([
      ...alertas,
      {
        id : proximoId,
        aluno : "",
        turma : "",
        tipo : "",
        quantidade : "",
        limite : "",
        status : ""
      }
    ])
  }

  const totalAlertas = alertas.filter((alerta) => alerta.status === "Alerta").length

  const campoTabela = "w-full bg-transparent px-2 py-2 text-xs text-gray-800 outline-none focus:bg-blue-50"

  return (
    <main className="flex min-h-screen bg-gray-100">
      <div className="bg-gradient-to-b from-blue-950 to-blue-500 text-white w-44 shrink-0 flex flex-col items-center py-3 px-2">
        <img
          className="rounded-full w-24 h-24 object-cover mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        {menu.map((item) => (
          <button
            key={item.id}
            className={`block w-full text-left text-xs px-2 py-2 mb-6 ${item.nome === "Alertas Pendentes" ? " rounded" : ""}`}
          >
            {item.nome}
          </button>
        ))}
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white border border-gray-300 rounded-md w-full min-h-screen p-8 flex flex-col">
          <div className="flex justify-between items-start mb-10">
            <div className="flex items-center gap-4">
              <span className="text-3xl" aria-hidden="true">🔔</span>
              <div>
                <h1 className="text-2xl text-gray-900">
                  Alertas Pendentes
                </h1>
                <p className="text-xs text-gray-800">
                  Atenção! Alunos com atrasos ou saídas antecipadas acima do limite permitido
                </p>
              </div>
            </div>

            <div className="bg-red-100 text-red-700 rounded px-4 py-2 text-center">
              <p className="text-xs font-bold">Total de alertas:</p>
              <p className="text-sm font-bold">{totalAlertas}</p>
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-300 rounded">
            <table className="w-full min-w-[800px] text-xs text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  {colunas.map((coluna) => (
                    <th
                      key={coluna.id}
                      className="border border-gray-300 px-3 py-2 font-semibold"
                    >
                      {coluna.nome}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {alertas.map((alerta) => (
                  <tr key={alerta.id}>
                    <td className="border border-gray-300 p-0">
                      <input
                        type="text"
                        value={alerta.aluno}
                        onChange={(e) => atualizar(alerta.id, "aluno", e.target.value)}
                        className={campoTabela}
                        aria-label="Aluno"
                      />
                    </td>
                    <td className="border border-gray-300 p-0 w-24">
                      <input
                        type="text"
                        value={alerta.turma}
                        onChange={(e) => atualizar(alerta.id, "turma", e.target.value)}
                        className={campoTabela}
                        aria-label="Turma"
                      />
                    </td>
                    <td className="border border-gray-300 p-0 w-40">
                      <select
                        value={alerta.tipo}
                        onChange={(e) => atualizar(alerta.id, "tipo", e.target.value)}
                        className={campoTabela}
                        aria-label="Tipo"
                      >
                        <option value=""></option>
                        <option value="Atraso">Atraso</option>
                        <option value="Saída Antecipada">Saída Antecipada</option>
                      </select>
                    </td>
                    <td className="border border-gray-300 p-0 w-28">
                      <input
                        type="number"
                        min="0"
                        value={alerta.quantidade}
                        onChange={(e) => atualizar(alerta.id, "quantidade", e.target.value)}
                        className={campoTabela}
                        aria-label="Quantidade"
                      />
                    </td>
                    <td className="border border-gray-300 p-0 w-24">
                      <input
                        type="number"
                        min="0"
                        value={alerta.limite}
                        onChange={(e) => atualizar(alerta.id, "limite", e.target.value)}
                        className={campoTabela}
                        aria-label="Limite"
                      />
                    </td>
                    <td className="border border-gray-300 p-0 w-32">
                      <select
                        value={alerta.status}
                        onChange={(e) => atualizar(alerta.id, "status", e.target.value)}
                        className={campoTabela}
                        aria-label="Status"
                      >
                        <option value=""></option>
                        <option value="Alerta">Alerta</option>
                        <option value="Resolvido">Resolvido</option>
                      </select>
                    </td>
                    <td className="border border-gray-300 bg-gray-200 px-3 py-2 w-40">
                      {alerta.aluno && (
                        <button className="text-xs text-blue-700 underline">
                          Histórico pessoal
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={adicionarLinha}
            className="self-start mt-4 px-4 py-2 text-xs text-white bg-blue-700 rounded hover:bg-blue-800"
          >
            + Adicionar linha
          </button>
        </div>
      </div>
    </main>
  )
}
