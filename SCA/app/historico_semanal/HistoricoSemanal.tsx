
export function HistoricoSemanal() {
  const menu = [
    {
      id : 1,
      nome : "Alertas Pendentes"
    },
    {
      id : 2,
      nome: "Anexo atestado"
    },
    {
      id : 3,
      nome: "Cadastrar Aluno"
    },
    {
      id :4,
      nome: "Histórico Mensal"
    },
    {
      id : 5,
      nome: "Histórico Semanal"
    },
    {
      id :6,
      nome:"inicio"
    },
    {
      id :7,
      nome:"Registrar ocorrência"
    }

  ]
  const cards = [
    {
      id : 1,
      nome: "Alunos cadastrados"
    },
    {
      id :2,
      nome: "Atrasos hoje"
    },
    {
      id : 3,
      nome:"Saidas antecipadas"
    },
    {
      id : 4,
      nome:"Alertas pendentes"
    }
  ]
  const filtros = [
    {
      id:1,
      nome:"periodo"
    },
    {
      id:2,
      nome:"tipo de registro"
    },
    {
      id:3,
     nome:"turma"
    },
    {
      id:4,
      nome:"alunos"
    }
  ]
  const tabelas = [
    {
      id:1,
      nome:"data"
    },
    {
      id:2,
      nome:"tipo"
    },
    {
      id:3,
      nome:"Aluno"
    },
    {
      id:4,
      nome:"turma"
    },
    {
      id:5,
      nome:"Horário de chegada"
    },
    {
      id:6,
      nome:"horário de saida"
    },
    {
      id:7,
      nome:"responsavel pelo registro"
    },
    {
      id:8,
      nome:"observação"
    },
  ]

  return (
    <main className="flex min-h-screen bg-gray-100">
      <div className="bg-blue-950 text-white w-44 shrink-0 flex flex-col items-center py-3 px-2">
        <img
          className="rounded-full w-24 h-24 object-cover mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Alertas Pendentes
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Anexo de atestado
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Cadastrar Aluno
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Histórico Mensal
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Histórico Semanal
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Inicio
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6 ">
          Registrar ocorrência
        </button>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white border border-gray-300 rounded-md w-full min-h-screen p-8 flex flex-col">
          <div className="mb-10">
            <h1 className="text-2xl text-gray-900">
              Histórico Semanal
            </h1>
            <p className="text-xs text-gray-800">
              Acompanhe o histórico de atrasos e saídas antecipadas durante a semana.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6  max-w-4xl mb-8">
          <div className="bg-green-600 text-white rounded-lg p-3">
            <p className="text-xs font-bold">Alunos cadastrados</p>
          </div>

          <div className="bg-yellow-500 text-white rounded-lg p-3">
            <p className="text-xs font-bold">Atrasos hoje</p>
          </div>

          <div className="bg-blue-500 text-white rounded-lg p-3">
            <p className="text-xs font-bold">Saidas antecipadas</p>
          </div>

          <div className="bg-red-500 text-white rounded-lg p-3">
            <p className="text-xs font-bold">Alertas pendentes</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-700 mb-2">Periodo</p>
              <input
                type="date"
                className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
                
                
              />
        </div>

        <div>
          <p className="text-xs text-gray-700 mb-2">Tipo de registro</p>
              <select className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700">
                <option value="">Select</option>
                <option value="manha">Saida Antecipada</option>
                <option value="tarde">Atraso</option>
              </select>
        </div>

        <div>
          <p className="text-xs text-gray-700 mb-2">Turma</p>
              <select className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700">
                <option value="">Select</option>
                <option value="manha">6° ano</option>
                <option value="tarde">7° ano</option>
                <option value="manha">8° ano</option>
                <option value="tarde">9° ano</option>
                <option value="manha">1° ano ensino medio</option>
                <option value="tarde">2° ano ensino medio</option>
                <option value="manha">3° ano ensino medio</option>
                
              </select>
        </div>
      </div>
    </main>
  )

}
