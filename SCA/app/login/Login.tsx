export function Login() {
  const login = [
    {
      id : 1,
      img: "https://via.placeholder.com/300x150",
      titulo:"",
      descrição:" "
    }
  ];
  const campo = [
    {
      id : 1,
      nome: "Email institucional",
      tipo: "email",
      senha: "Digite seu email institucional"
    },
    {
      id :2,
      nome:"Senha",
      tipo: "password",
      senha: "Digite sua senha"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
        </div>
      </section>
    </main>
  )
  
}
