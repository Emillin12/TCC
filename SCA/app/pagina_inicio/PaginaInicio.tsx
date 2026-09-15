<<<<<<< Updated upstream
import type { title } from "process";

export function PaginaInicio() {
  const inicio = [

     {
      id: 1,
      descricao: "Um sistema completo para facilitar  a organização de informações e fortalecer a comunicação entre a escola e os alunos.",
    },
    {
      id: 2,
      img: "",
      titulo: "Cadastro de Alunos",
      descricao: "Cadastre e mantenha os dados dos alunos sempre atualizados.",
    },
    {
      id: 3,
      img: "",
      titulo: "Registrar Saídas  ",
      title: " Antecipadas e Atrasos",
      descricao: "Registre e controle saidas antcipadas e atrasos dos alunos de forma organizada",
    },
    {
      id: 4,
      img: "",
      titulo: "Histórico Semanal",
      descricao: "Visualize e controle os registros e ocorências  de cada semana letiva.",
    },
    {
      id: 5,
      img: "",
      titulo: "Histórico Mensal",
      descricao: "Acompanhe de forma prática os registros mensais da escola",
    },
     {
      id: 6,
      img: "",
      titulo: "Alertas pendentes",
      descricao: "Verifique os alunos que estão com alertas pendentes",
    },
     {
      id: 7,
      img: "",
      titulo: "Anexo de Atestado",
      descricao: "Adicione atestados de registros já finalizados",
    },


   
=======
export function Welcome() {
  const Inicio = [
    { id: 1, 
      name: "Cadastro de Alunos", 
      type: "Cadastre e mantenha os dados dos aluos sempre atualizados.", 
      image: ""
   
    },
    { 
      id: 4, 
      name: "Registrar Saídas Antecipadas e Atrasos", 
      type: "Registre e controle saidas antcipadas e atrasos dos alunos de forma organizada", 
      image: "" 
    },
    { 
      id: 7, 
      name: "Histórico Semanalle", 
      type: "Visualize e controle os registros e ocorências  de cada semana letiva.", 
      image: "" 
    },
    { 
      id: 25, 
      name: "Histórico Mensal", 
      type: "Acompanhe de forma prática os registros mensais da escola.", 
      image: "" 
    },

    {
      id: 39,
      name: "Alertas pendentes",
      type: "Verifique os alunos que estão com alertas pendentes",
      image: ""
    },
    {
      id: 39,
      name: "Anexo de Atestado",
      type: "Adicione atestados de registros já finalizados",
      image: ""
    }
>>>>>>> Stashed changes
  ];

 

  const coresTipos = {
    
  };

  return (
<<<<<<< Updated upstream

      <section className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-2xl bg-transparent font-bold mb-2">Escola Estadual Sanico Teles </h1>
          
        </header>

        <div className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-2xl bg-transparent font-bold mb-2">Bem-vindo ao sistema de controle</h1>
           <h1 className="text-2xl bg-transparent font-bold mb-2"> De Saídas Antecipadas e Atrasos</h1>
        </header>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inicio.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow">
              {item.img && (
                <img src={item.img} alt={item.titulo} className="w-full h-32 object-cover rounded mb-4" />
              )}
              <h3 className="text-xl font-bold mb-2">{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    
=======
    <main className="flex flex-col min-h-screen">
      
     
      <header className="flex justify-between bg-gradient-to-r from-red-500 to-yellow-500 p-4 shadow-md">
        <div className="p-1 flex gap-4 text-white text-2xl font-bold">
          <h1>Sobre Nós</h1>
        </div>
        <nav className="flex p-1 gap-4 text-white font-medium">
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/Sobre Nós'}>
            Sobre Nós
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/Ajuda'}>
            
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/perfil'}>
            Perfil
          </span>
        </nav>
      </header>

     
      <div className="flex flex-col flex-1 bg-red-100 pb-10">

        
        <div className="flex h-20 items-center bg-blue-100 mx-10 my-10 rounded-lg px-5 shadow-md ">

            <form className="w-full relative">

              <input

              type="text"

              className="w-330 p-3 pb-1 pl-10 border-b border-gray-200 focus:outline-none  "/>



              <button className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 absolute right-2 cursor-pointer">Buscar</button>

            </form>

        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center px-6 mx-auto w-full max-w-6xl">

       
          {Inicio.map((Inicio) => (
            <div key={Inicio.id} className={"flex flex-col justify-between h-72 w-full max-w-64 text-center items-center rounded-xl p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105 ${coresPokemons[Inicio.type]}"}>
              <img src={Inicio.image} alt={Inicio.name} className="w-30 h-30" />  
              <h2 className="text-lg font-semibold">{Inicio.name}</h2>
              <p className= {"px-3 py-1 text-xs text-white font-semibold rounded-md ${coresTipos[Inicio.type]}"}>
                {Inicio.type}
              </p>
             
            </div>
          ))}
        </div>
      
          
            

        </div>
      

      {/* Footer */}
      <div className="bg-zinc-800 mt-auto">
        <h1 className="text-center text-sm text-white p-3">Pokédex - React + Tailwind</h1>
      </div>

    </main>
>>>>>>> Stashed changes
  );
};