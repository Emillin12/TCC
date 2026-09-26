
import type { title } from "process";

export function PaginaInicio() {
  const inicio = [

     
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


   



  ];

  
     return (
    <main className="flex flex-col min-h-screen">
      
     
      <header className="flex justify-between bg-gradient-to-r from-red-500 to-yellow-500 p-4 shadow-md">
        <div className="p-1 flex gap-4 text-white text-2xl font-bold">
          <h1>Pokemon</h1>
        </div>
        <nav className="flex p-1 gap-4 text-white font-medium">
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/'}>
            Home
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/pokemons'}>
            Pokemons
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/types'}>
            Tipos
          </span>
        </nav>
      </header>

     
      <div className="flex flex-col flex-1 bg-red-100 pb-10">

        
        <div className="flex h-20 items-center bg-white mx-10 my-10 rounded-lg px-5 shadow-md ">

            <form className="w-full relative">

              <input

              type="text"

              className="w-330 p-3 pb-1 pl-10 border-b border-gray-200 focus:outline-none  "/>



              <button className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 absolute right-2 cursor-pointer">Buscar</button>

            </form>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center px-6 mx-auto w-full max-w-6xl"></div>
    


 
  return (
    <main className="flex">
      <aside className="text-white h-screenw-0 p-6">
        <img
          className="rounded-full w-20 mb-4"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />
      
      </aside>

      <section className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-2xl bg-transparent font-bold mb-2">Escola Estadual Sanico Teles </h1>
           <h2 className="text-xl font-bold mb-2">Bem Vindo! </h2>
           <p className="mb-2">Um sistema completo para facilitar  a organização de informações e fortalecer a comunicação entre a escola e os alunos. </p>
        </header>

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
    </main>
  );

</div>
</main>
     )
};