export function CadastroSecretarias() {
      const lado = [
    {
      id: 1,
      img: "https://via.placeholder.com/300x150",
      titulo: "Cadastro de Secretáias",
      descricao: "Cadastre e mantenha os dados dos secretários sempre atualizados.",
    },

    {
      id:2,
      img:"https://thumbs.dreamstime.com/b/%C3%ADcone-do-vetor-da-escola-isolado-no-fundo-transparente-sc-linear-130109780.jpg"
    }
  ];

  return (
    <main className="flex">
      <aside className="bg-blue-900 text-white h-screen w-64 p-6">
        <img
          className="rounded-full w-20 mb-4"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />
        <h2 className="text-xl font-bold m-10">Bem Vindo!</h2>
        <p className="mb-2">Faça seu cadastro para acessar o Portal Escolar e aproveitar todos os recursos disponíveis.</p>
      </aside>

      <section className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-2xl bg-transparent font-bold mb-2">Cadastro de Usuário</h1>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lado.map((item) => (
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
