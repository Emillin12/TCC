
export function CadastroAlunos() {

   
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
    <main className="flex  ">
      <aside className="bg-blue-900 text-white h-screen w-64 p-6 ">
        <img className="rounded-full w-20 mb-4" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="Logo" />

        <button className="block text-left mb-2">Alertas Pendentes</button>
        <button className="block text-left mb-2">Anexo de Atestado</button>
        <button className="block text-left mb-2">Histórico Mensal</button>
        <button className="block text-left mb-2">Histórico Semanal</button>
        <button className="block text-left mb-2">Inicio</button>
        <button className="block text-left mb-2">Registrar Ocorrencia</button>
      </aside>

      <div className="flex m-10 w-300 justify-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          
        <div>
          <div className="text-xl font-medium text-black dark:text-white">Registrar Saídas Antecipadas/Atraso</div>
          <p className="text-gray-500 dark:text-gray-400">Preencha os dados abaixo par registrar a ocorrência</p>
        </div>


         <section className="flex-1 p-8">
        <header className="mb-6 text-center gap-4">
          
          <div>
            <h1 className="text-2xl font-bold">Anexo de Atestado</h1>
            <p>Anexe o atestado médico ou justificativa do aluno</p>
          </div>
        </header>

        <div className="flex gap-8">
          <div className="flex-1">
            <p className="font-medium mb-1">Nome do aluno</p>
            <input type="text" placeholder="Nome do aluno" className="w-2/5 border border-gray-300 rounded p-2" />

            <p className="font-medium mb-2 ">Periodo do atestado</p>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <p className="font-medium mb-1">Horário de inicio</p>
                <input type="time" className="w-1/2 border border-gray-300 rounded p-2" />
              </div>

              <div className="flex-1">
                <p className="font-medium mb-1">Horário final</p>
                <input type="time" className="w-1/2 border border-gray-300 rounded p-2" />
              </div>

            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <p className="font-medium mb-1">Data do atestado</p>
                <input type="date" className="w-1/2 border border-gray-300 rounded p-2"/>
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Tipo de atestado</p>
                
                <select className="w-1/2 border border-gray-300 rounded p-2">
                  
                  <option value="opções">Atestado médico</option>
                  <option value="opções">Declaração</option>
                </select>
              </div>
            </div>

            
          </div>
        </div>
      </section>


      </div>
    </main>
  );
}
