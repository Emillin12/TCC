export function PaginaInicio() {
  const inicio = [
    {
      id: 2,
      img: "",
      titulo: " Cadastro de Alunos",
      descricao: "Cadastre e mantenha os dados dos alunos sempre atualizados.",
    },
    {
      id: 3,
      img: "",
      titulo: "Registrar Saídas Antecipadas e Atrasos",
      descricao:
        "Registre e controle saídas antecipadas e atrasos dos alunos de forma organizada.",
    },
    {
      id: 4,
      img: "",
      titulo: "Registros Semanais",
      descricao:
        "Visualize e controle os registros e ocorrências de cada semana letiva.",
    },
    {
      id: 5,
      img: "",
      titulo: "Histórico Mensal",
      descricao:
        "Acompanhe de forma prática os registros mensais da escola.",
    },
    {
      id: 6,
      img: "",
      titulo: "Alertas Pendentes",
      descricao:
        "Verifique os alunos que estão com alertas pendentes.",
    },
    {
      id: 7,
      img: "",
      titulo: "Atestados",
      descricao:
        "Adicione atestados de registros já finalizados.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      
      
      <header className="flex justify-between items-center bg-gradient-to-r    p-4 shadow-md">
        
        <div className="flex items-center gap-4text-2xl font-extrabold box-content  p-4 ">
          <h1>Escola Estadual Sanico Teles</h1>
        </div>

        <nav className="flex gap-4 text-blue-500 font-medium">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/")}
          >
            Sobre Nós
          </span>

          <span
            className="cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/Ajuda")}
          >
            Ajuda
          </span>

          <span
            className="cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/Perfil")}
          >
            Perfil
          </span>

          <span
            className="cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/")}
          >
            Sair
          </span>
        </nav>
      </header>

     
      <div className="flex flex-col flex-1 pb-10">

        </div>
        <main className="flex">

          
          <aside className="text-black p-6">
            <img
              className="rounded-full w-20 mb-4"
              src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
              alt="Logo da Escola Estadual Sanico Teles"
            />
          </aside>

         
          <section className="flex-1 p-8  size-100">

            <header className="mb-6">
              <h1 className="text-2xl font-bold mb-2  justify-self-start ">
                Escola Estadual Sanico Teles
              </h1>

              <h2 className="text-xl font-bold mb-2">
                Bem-vindo ao SCSA - Sistema de Controle de Saidas Antecipadas e Atrasos 
              </h2>

              <p className="mb-2 box-decoration-clone">
                Um sistema completo para facilitar a organização de
                informações e fortalecer a comunicação entre a escola e os
                alunos.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {inicio.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
                >

                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.titulo}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                  )}

                  <h3 className="text-xl font-bold mb-2">
                    {item.titulo}
                  </h3>

                  <p>
                    {item.descricao}
                  </p>

                </div>
              ))}

            </div>
          </section>

        </main>
      
    </main>
  );
}
