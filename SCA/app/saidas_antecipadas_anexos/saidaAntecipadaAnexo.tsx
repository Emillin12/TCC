
export function SaidaAntecipadaAnexo() {
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
    },
    {
      id : 7,
      nome : "Registrar ocorrência"
    }
  ]

  const campos = [
    {
      id : 1,
      nome : "Aluno"
    },
    {
      id : 2,
      nome : "Tipo da Ocorrência"
    },
    {
      id : 3,
      nome : "Período"
    },
    {
      id : 4,
      nome : "Data da Ocorrência"
    },
    {
      id : 5,
      nome : "Turma"
    },
    {
      id : 6,
      nome : "Horário de chegada"
    },
    {
      id : 7,
      nome : "Responsável (Quem autorizou/ Recebeu)"
    },
    {
      id : 8,
      nome : "Horário de saída"
    },
    {
      id : 9,
      nome : "Motivo/ observações"
    },
    {
      id : 10,
      nome : "Atestado"
    }
  ]

  const botoes = [
    {
      id : 1,
      nome : "Anexar Atestado"
    },
    {
      id : 2,
      nome : "Registrar Ocorrência"
    }
  ]

  return (
    <main className="flex min-h-screen bg-gray-100">
      
      <div className="bg-blue-950 text-white w-44 flex-shrink-0 flex flex-col items-center py-3 px-2">
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
        <button className="block w-full text-left text-xs px-2 py-2 mb-6 bg-blue-700 rounded">
          Registrar ocorrência
        </button>
      </div>

      
      <div className="flex-1">
        <div className="bg-white border border-gray-300 rounded-md w-full min-h-screen p-8 flex flex-col">
          
          <div className="mb-10">
            <h1 className="text-2xl text-gray-900">
              Registrar Saída Antecipada/ Atraso
            </h1>
            <p className="text-xs text-gray-800">
              Preencha os dados abaixo para registrar a ocorrência do aluno
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            
            <div>
              <p className="text-xs text-gray-700 mb-2">Aluno</p>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
              />
            </div>
            <div>
              <p className="text-xs text-gray-700 mb-2">Tipo da Ocorrência</p>
              <select className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700">
                <option value="">Select</option>
                <option value="saida">Saída antecipada</option>
                <option value="atraso">Atraso</option>
              </select>
            </div>

            
            <div>
              <p className="text-xs text-gray-700 mb-2">Período</p>
              <select className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700">
                <option value="">Select</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
              </select>
            </div>
            <div>
              <p className="text-xs text-gray-700 mb-2">Data da Ocorrência</p>
              <input
                type="date"
                className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
              />
            </div>

            
            <div>
              <p className="text-xs text-gray-700 mb-2">Turma</p>
              <select className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700">
                <option value="">Turma</option>
              </select>
            </div>
            <div>
              <p className="text-xs text-gray-700 mb-2">Horário de chegada</p>
              <input
                type="time"
                className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
              />
            </div>

            
            <div>
              <p className="text-xs text-gray-700 mb-2">
                Responsável (Quem autorizou/ Recebeu)
              </p>
              <input
                type="text"
                placeholder="Nome do responsável"
                className="w-full max-w-sm h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
              />
            </div>
            <div>
              <p className="text-xs text-gray-700 mb-2">Horário de saída</p>
              <input
                type="time"
                className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
              />
            </div>

            
            <div className="col-span-2">
              <p className="text-xs text-gray-700 mb-2">Motivo/ observações</p>
              <textarea
                placeholder="Informe o motivo da saída antecipada ou do atraso"
                className="w-full h-20 p-2 border border-gray-300 rounded bg-white text-xs text-gray-700 resize-none"
              />
            </div>

            
            <div className="col-span-2">
              <p className="text-xs text-gray-700 mb-2">Atestado</p>
              <label className="flex items-center justify-center w-72 h-48 bg-gray-200 text-gray-400 cursor-pointer">
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="17" cy="7" r="2.5" />
                  <path d="M2 20l7-11 5 8 3-4 5 7z" />
                </svg>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>

          
          <div className="flex justify-end gap-6 mt-8">
            <button className="bg-blue-950 text-white text-xs py-2 px-5 rounded-sm">
              Anexar Atestado
            </button>
            <button className="bg-blue-950 text-white text-xs py-2 px-5 rounded-sm">
              Registrar Ocorrência
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
