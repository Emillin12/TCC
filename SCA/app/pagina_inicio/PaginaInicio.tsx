
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


   



  ];

  const coresTipos = {
    
  };

 
  return (
    <main className="flex">
      <aside className="bg-blue-900 text-white h-screen w-64 p-6">
        <img
          className="rounded-full w-20 mb-4"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />
        <h2 className="text-xl font-bold mb-2">Bem Vindo!</h2>
        <p className="mb-2">Faça seu cadastro para acessar o Portal Escolar e aproveitar todos os recursos disponíveis.</p>
      </aside>

      <section className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-2xl bg-transparent font-bold mb-2">Escola Estadual Sanico Teles </h1>
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
}

