
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
    <main className="flex h-screen">
      <aside className=" bg-blue-900 text-white h-screen w-64 p-6 ">
        <img className="rounded-full w-20 mb-4" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="Logo" />

        <button className="block text-left mb-2">Alertas Pendentes</button>
        <button className="block text-left mb-2">Anexo de Atestado</button>
        <button className="block text-left mb-2">Cadastrar Aluno(a)</button>
        <button className="block text-left mb-2">Histórico Mensal</button>
        <button className="block text-left mb-2">Histórico Semanal</button>
        <button className="block text-left mb-2">Inicio</button>
        <button className="block text-left mb-2">Registrar Ocorrencia</button>
      </aside>

      <div className="flex m-10 w-300 justify-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          
        <div>
          <div className="text-xl font-medium text-black dark:text-white">Cadastro do Aluno</div>
          <p className="text-gray-500 dark:text-gray-400">Preencha os dados abaixo para cadastrar o novo aluno</p>
        </div>


        <section className="flex p-8 justify-between">
      

        <div className="flex gap-8 flex-col">
          
          <div className="flex flex-row">
            <p className="font-medium mb-1">Nome do aluno</p>
            <input type="text" placeholder="Nome do aluno" className="w-50 border border-gray-300 rounded p-2" />
            
              <p>Data de Nascimento</p>
              <input type="date" className="w-1/2 border border-gray-300 rounded p-2"/>
            

          </div>
            

      

          
            <div className="flex flex-col">
              <p className="font-medium mb-1">CPF do aluno</p>
              <input type="text" placeholder="Nome do aluno" className="w-2/5 border border-gray-300 rounded p-2" />
               
              <p className="font-medium mb-1">Instituição de Ensino</p>
              <input type="text" placeholder="Nome do aluno" className="w-2/5 border border-gray-300 rounded p-2" />
            
            </div>


           

            <div className="flex flex-row">
              <p className="font-medium mb-1">Turma</p>
              
              <select className="w-1/2 border border-gray-300 rounded p-2">
                <option value="opções">Selecione</option>
                <option value="opções">Atestado médico</option>
                <option value="opções">Declaração</option>
              </select>
              <p className="font-medium mb-1">Turno</p>
              
              <select className="w-1/2 border border-gray-300 rounded p-2">
                
                <option value="opções">Atestado médico</option>
                <option value="opções">Declaração</option>
              </select>

              
            </div>

            <div>
              <p className="font-medium mb-1">E-mail(opicional)</p>
                <input type="text" placeholder="Nome do aluno" className="w-2/5 border border-gray-300 rounded p-2" />

                <p className="font-medium mb-1">Enderço</p>
                <input type="text" placeholder="Nome do aluno" className="w-2/5 border border-gray-300 rounded p-2" />

            </div>

            <div className="flex flex-row">
              <p className="font-medium mb-1">Responsável</p>
                <input type="text" placeholder="Nome do aluno" className="w-2/5 border border-gray-300 rounded p-2" />
              
              <p className="font-medium mb-1">Telefone do Responsável</p>
                <input type="text" placeholder="Nome do aluno" className="w-2/5 border border-gray-300 rounded p-2" />
            </div>
                  
            
            <div>
              <div className="mt-6 flex justify-end gap-4 flex-row justify-">
                <button className="bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md hover:bg-blue-300 cursor-pointer">Limpar Cadastro </button>
                <button className="bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md hover:bg-blue-300 cursor-pointer">Cadastrar Aluno</button>
              </div>

              
                
              

            </div>

            
          
        </div>
      </section>



      </div>
    </main>
  );
}
