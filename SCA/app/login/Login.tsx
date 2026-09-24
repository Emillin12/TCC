export function Login() {
  const login = [
    {
      id : 1,
      img: "https://via.placeholder.com/300x150",
      titulo:"",
      descrição:" "
    },
    {
      id : 2,
      img: "https://via.placeholder.com/300x150",
      titulo:"",
      descrição:" "
    }
  ];
  const preencimento = [
    {
      id : 1,
      nome: "Email institucional",
      tipo:"Email",
      senha:"Senha"
    },
    {
      id : 2,
      nome:"Senha",
      tipo:"Senha",
      senha:"Digite sua senha"
    }
  ]
  


  return (
    <main className="flex">
      <aside className="bg-blue-900 text-white h-screen w-64 p-6">
        <img className="rounded-full w-20 mb-4" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="Logo" />
        <h2 className="text-xl font-bold mb-2">Bem-Vindo(a) de Volta!</h2>
        <p className="mb-2">Acesse sua conta para continuar conectado ao portal e aproveitar todos os recursos disponíveis.</p>
        <img className ="w-32 mt-16" src="https://via.placeholder.com/300x150" alt="imagem da escola"/>

      </aside>

      <section className="flex-1 p-8">
        <header className="mb-6 text-center">
          <h1 className="text-2xl bg-transparent font-bold mb-2">Acesse sua conta</h1>
          <p className="mb-6">Informe as suas credenciais para entrar</p>
        </header>

        <div>
          <p className="font-medium mb-1">Email institucional</p>
          <input type="email" placeholder="Digite seu email institucional" className="w-2/5 border border-gray-300 rounded p-2" />
          
        </div>

        <div className="mt-25">
          <p className="block font-medium mb-1">Senha</p>
          <input type="password" placeholder="Digite sua senha" className="w-2/5 border border-gray-300 rounded p-2" />
          
          
        </div>
      </section>
    </main>
  )
  
}
