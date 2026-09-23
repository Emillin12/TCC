export function CadastroSecretarias() {
  
  const inicio = [
    {
      id: 1,
      titulo: "Dados do Usuário",
      descricao: "Cadastre e mantenha os dados das Secretárias atualizados.",
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
        <h2 className="text-xl font-bold mb-2">Bem Vindo!</h2>
        <p className="mb-2">Faça seu cadastro para acessar o Portal Escolar e aproveitar todos os recursos disponíveis.</p>
      </aside>

      <section className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-2xl bg-transparent font-bold mb-2">Cadastro de Secretários(as)</h1>
          <h1> Preencha os dados abaixo para criar sua conta</h1>
        </header>

        <div className=" w-300 h-300 ">
          {inicio.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-2 text-center mr-10 ml-5">{item.titulo}</h3>
              <p className="justify-between mr-25 ml-10"> Nome:  </p>
              <p className="justify-between mr-25 ml-10">MASP: </p>
              <p className="justify-between mr-25 ml-10">CPF: </p>
              <p className="justify-between mr-25 ml-10">Instituição: </p>
              <p className="justify-between mr-25 ml-10">E-mail Institucional: </p>
              <p className="justify-between mr-25 ml-10">Turno: </p>
              <p className="justify-between mr-25 ml-10">Senha: </p>
              <button className="rounded-full bg-blue-800 text-white w-10 h-15">Save Changes</button>

            </div>
          
          ))}
        </div>
      </section>
    </main>
  );
}
