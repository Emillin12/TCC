export function AnexoAtestados() {
  const anexoAtestados = [
    {
      id : 1,
      nome : "alerta pendencias"

    },
    {
      id : 2,
      nome : "anexo de atestado"

    },
    {
      id : 3,
      nome : "historico mensal"

    },
    {
      id : 4,
      nome : "historico semanal"

    },
    {
      id : 5,
      nome : "inicio"

    },
    {
      id : 6,
      nome : "registrar ocorrencia"

    },
  ]
  return (
    <main className="flex min-h-screen bg-gray-100">
      
      <aside className="bg-blue-950 text-white w-44 flex-shrink-0 flex flex-col items-center py-3 px-2">
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
          Histórico Mensal
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Histórico Semanal
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Inicio
        </button>
        <button className="block w-full text-left text-xs px-2 py-2 mb-6">
          Registrar ocorrência
        </button>
      </aside>

      
      <section className="flex-1 p-0">
        <div className="bg-white border border-gray-300 rounded-md w-full min-h-screen p-8 flex flex-col">
          
          <header className="flex items-center gap-6 mb-10">
            
            <div>
              <h1 className="text-2xl text-gray-900">Anexo de Atestado</h1>
              <p className="text-xs text-gray-800">
                Anexe o atestado médico ou justificativa do aluno
              </p>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-x-8 gap-y-6 flex-1">
            
            <div className="col-span-2">
              <p className="text-xs text-gray-700 mb-2">Nome do Aluno</p>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
              />
            </div>

            
            <div>
              <p className="text-xs text-gray-700 mb-2">Data do Atestado</p>
              <input type="date" className="w-full h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700 max-w-[180px]" />
            </div>

            
            <div className="col-span-2">
              <p className="text-base text-gray-800 mb-4 mt-6">
                Periodo do Atestado
              </p>
              <div className="flex gap-8">
                <div className="w-44">
                  <p className="text-xs text-gray-700 mb-2">Horario de inicio</p>
                  <input type="time" step="1" className="w-full h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700" />
                </div>
                <div className="w-44">
                  <p className="text-xs text-gray-700 mb-2">Horario final</p>
                  <input type="time" step="1" className="w-full h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700" />
                </div>
              </div>
            </div>

            
            <div className="-mt-2">
              <p className="text-xs text-gray-700 mb-2">Tipo de Atestado</p>
              <select className="w-full h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700 max-w-[180px]">
                <option value="">Select</option>
                <option value="medico">Atestado médico</option>
                <option value="declaracao">Declaração</option>
              </select>
            </div>

            
            <div className="col-span-3">
              <p className="text-xs text-gray-700 mb-3">Anexo de Atestado</p>
              <label className="flex items-center justify-center w-full max-w-3xl h-28 border border-gray-300 bg-white text-xs text-gray-500 cursor-pointer">
                Clique para anexar o arquivo
                <input type="file" className="hidden" />
              </label>
            </div>

            
            <div className="col-span-3">
              <p className="text-xs text-gray-700 mb-3">Observações</p>
              <textarea
                placeholder="Observações"
                className="w-full max-w-md h-44 p-2 border border-gray-300 text-xs resize-none"
              />
            </div>
          </div>

          
          <div className="flex justify-end gap-8 mt-6">
            <button className="bg-blue-900 text-white text-xs py-2 w-32 rounded-sm">
              Limpar
            </button>
            <button className="bg-blue-900 text-white text-xs py-2 w-32 rounded-sm">
              Salvar atestado
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
