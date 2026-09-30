
export function AnexoAtestado() {
  const menu = [
    {
      id : 1,
      nome :"Alertas pendentes"
    },
    {
      id : 2,
      nome :"Anexo de atestado"
    },
    {
      id : 3,
      nome :"Histórico mensal"
    },
    {
      id : 4,
      nome :"Histórico semanal"
    },
    {
      id : 5,
      nome :"Inicio"
    },
    {
      id : 6,
      nome :"Registrar ocorrencia"
    }

  ]



  return (
    <main className="flex ">
      <aside className="bg-blue-900 text-white h-screen w-64 p-6">
        <img className="rounded-full w-20 mb-4" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="Logo" />

        <button className="block text-left mb-2">Alertas Pendentes</button>
        <button className="block text-left mb-2">Anexo de Atestado</button>
        <button className="block text-left mb-2">Histórico Mensal</button>
        <button className="block text-left mb-2">Histórico Semanal</button>
        <button className="block text-left mb-2">Inicio</button>
        <button className="block text-left mb-2">Registrar Ocorrencia</button>
      </aside>

      <section className="flex-1 p-8">
        <header className="mb-6 text-center gap-4">
          <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a4 4 0 100-8 4 4 0 000 8zM6 20a6 6 0 0112 0" />
          </svg>
          <div>
            <h1 className="text-2xl font-bold">Anexo de Atestado</h1>
            <p>Anexe o atestado médico ou justificativa do aluno</p>
          </div>
        </header>

        <div className="flex gap-8">
          <div className="flex-1">
            <p className="font-medium mb-1">Nome do aluno</p>
            <input type="text" placeholder="Nome do aluno" className="w-full border border-gray-300 mb-4 rounded p-2" />
          </div>
        </div>
      </section>
      
    </main>
    
  );
}
