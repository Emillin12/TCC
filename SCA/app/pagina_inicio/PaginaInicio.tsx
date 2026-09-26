
import type { title } from "process";

export function PaginaInicio() {
  const inicio = [

     
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5FCmxPC6YhJzijgGLQJ8aYrCjoF46EdgInkUP3CR_g&s=10",
      descricao: "Cadastre e mantenha os dados dos alunos sempre atualizados.",
    },
    {
      id: 3,
      img: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fpt.pngtree.com%2Ffree-png-vectors%2Fsa%25C3%25ADda&ved=0CBYQjRxqFwoTCJD_i_WrjZcDFQAAAAAdAAAAABA4&opi=89978449",
      titulo: "Registrar Saídas  ",
      title: " Antecipadas e Atrasos",
      descricao: "Registre e controle saidas antcipadas e atrasos dos alunos de forma organizada",
    },
    {
      id: 4,
      img: "https://www.google.com/imgres?q=img%20calendario%20semanal%20preto%20e%20blanco&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcalendar-o-%25C3%25ADcone-calend%25C3%25A1rio-preto-e-branco-do-143078128.jpg&imgrefurl=https%3A%2F%2Fpt.dreamstime.com%2Fcalendar-o-%25C3%25ADcone-calend%25C3%25A1rio-preto-e-branco-do-image143078128&docid=PcjyZM-gdxV2GM&tbnid=j1DAzP_YZKPV5M&w=800&h=800&hcb=2",
      titulo: "Histórico Semanal",
      descricao: "Visualize e controle os registros e ocorências  de cada semana letiva.",
    },
    {
      id: 5,
      img: "https://www.google.com/imgres?q=img%20calendario&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcalendar-o-%25C3%25ADcone-calend%25C3%25A1rio-na-parede-ilustra%25C3%25A7%25C3%25A3o-do-vetor-isolada-no-fundo-branco-139907045.jpg&imgrefurl=https%3A%2F%2Fpt.dreamstime.com%2Fcalendar-o-%25C3%25ADcone-calend%25C3%25A1rio-na-parede-image125910667&docid=62un-4us-HQ-SM&tbnid=4hEfM83rO8oKAM&w=800&h=800&hcb=2",
      titulo: "Histórico Mensal",
      descricao: "Acompanhe de forma prática os registros mensais da escola",
    },
     {
      id: 6,
      img: "https://www.google.com/imgres?q=img%20alertas%20pendent&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Fvetor-gratis%2Fp1%2F74523088-calendario-icone-mostrando-pendente-evento-atencao-ou-alerta-vetor.jpg&imgrefurl=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F74523088-calendario-icone-mostrando-pendente-evento-atencao-ou-alerta&docid=THepZhTfiAJ4zM&tbnid=AIliOlBcDno9lM&w=980&h=980&hcb=2&itg=1",
      titulo: "Alertas pendentes",
      descricao: "Verifique os alunos que estão com alertas pendentes",
    },
     {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9Sp53Mc4jHnK51EX3Ic1W3gn4a5HnDPzVmsz5tNI-g&s=10",
      titulo: "Anexo de Atestado",
      descricao: "Adicione atestados de registros já finalizados",
    },
  ];

    <main className="flex flex-col min-h-screen">
      
     
      <header className="flex justify-between bg-gradient-to-r from-blue-500 to-blue-500 p-4 shadow-md">
        <div className="p-1 flex gap-4 text-blue text-2xl font-bold">
          <h1>Escola Estadual Sanico Teles</h1>
        </div>
        <nav className="flex p-1 gap-4 text-black font-medium">
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/'}>
             Sobre Nós
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/Sobre Nós'}>
           Ajuda
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/Ajuda'}>
            Perfil
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/Perfil'}>
            Sair
          </span>
        </nav>
      </header>

     
      <div className="flex flex-col flex-1 bg-gray-300-100pb-10">

        
        <div className="flex h-20 items-center bg-white mx-10 my-10 rounded-lg px-5 shadow-md ">

            <form className="w-full relative">

              <input

              type="text"

              className="w-330 p-3 pb-1 pl-10 border-b border-gray-200 focus:outline-none  "/>



              <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600 absolute right-2 cursor-pointer">Buscar</button>

            </form>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center px-6 mx-auto w-full max-w-6xl"></div>
    


 
  return (
    <main className="flex">
      <aside className="text-black h-screenw-0 p-6">
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
     
};