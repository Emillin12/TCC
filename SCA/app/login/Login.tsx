
import { useState } from "react"
import { Link } from "react-router"

export function Login() {
  const [tema, setTema] = useState("Claro")
  const [idioma, setIdioma] = useState("Português")

  const traducoes: Record<string, Record<string, string>> = {
    English: {
      "Voltar": "Back",
      "Bem-Vindo(a) de Volta!": "Welcome Back!",
      "Acesse sua conta para continuar conectado ao portal e aproveitar todos os recursos disponíveis.": "Access your account to stay connected to the portal and enjoy all available features.",
      "Acesse sua conta": "Access your account",
      "Informe as suas credenciais para entrar": "Enter your credentials to log in",
      "Email institucional": "Institutional email",
      "Digite seu email institucional": "Enter your institutional email",
      "Senha": "Password",
      "Digite sua senha": "Enter your password",
      "Entrar": "Login",
      "Preferências": "Preferences",
      "Tema": "Theme",
      "Escolha o tema de sua preferência": "Choose your preferred theme",
      "Claro": "Light",
      "Escuro": "Dark",
      "Idioma": "Language",
      "Selecione o idioma": "Select the language"
    },
    Español: {
      "Voltar": "Volver",
      "Bem-Vindo(a) de Volta!": "¡Bienvenido(a) de nuevo!",
      "Acesse sua conta para continuar conectado ao portal e aproveitar todos os recursos disponíveis.": "Accede a tu cuenta para continuar conectado al portal y disfrutar de todas las funciones disponibles.",
      "Acesse sua conta": "Accede a tu cuenta",
      "Informe as suas credenciais para entrar": "Introduce tus credenciales para entrar",
      "Email institucional": "Correo institucional",
      "Digite seu email institucional": "Introduce tu correo institucional",
      "Senha": "Contraseña",
      "Digite sua senha": "Introduce tu contraseña",
      "Entrar": "Entrar",
      "Preferências": "Preferencias",
      "Tema": "Tema",
      "Escolha o tema de sua preferência": "Elige el tema de tu preferencia",
      "Claro": "Claro",
      "Escuro": "Oscuro",
      "Idioma": "Idioma",
      "Selecione o idioma": "Selecciona el idioma"
    }
  }

  function t(texto: string) {
    return traducoes[idioma]?.[texto] ?? texto
  }

  function mudarPreferencia(nome: string, valor: string) {
    if (nome === "Tema") setTema(valor)
    if (nome === "Idioma") setIdioma(valor)
  }

  const escuro = tema === "Escuro"

  const fundo = escuro ? "bg-gray-900" : "bg-gray-100"
  const painel = escuro ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
  const textoForte = escuro ? "text-gray-100" : "text-gray-900"
  const textoMedio = escuro ? "text-gray-300" : "text-gray-700"
  const campo = escuro
    ? "bg-gray-700 border-gray-600 text-gray-100"
    : "bg-white border-gray-300 text-gray-700"

  const preferencias = [
    {
      id: 1,
      icone: "☾",
      nome: "Tema",
      descricao: "Escolha o tema de sua preferência",
      opcoes: ["Claro", "Escuro"]
    },
    {
      id: 2,
      icone: "🌐",
      nome: "Idioma",
      descricao: "Selecione o idioma",
      opcoes: ["Português", "English", "Español"]
    }
  ]

  const rotas: Record<string, string> = {
    Entrar: "/perfilSecretarias",
    Voltar: "/"
  }

  return (
    <main className={`flex min-h-screen ${fundo} transition-colors duration-300`}>

      <aside className="bg-blue-950 text-white w-64 shrink-0 flex flex-col py-4 px-4">

        {/* Seta para voltar */}
        <Link
          to={rotas["Voltar"]}
          className="self-start text-2xl mb-4"
          aria-label={t("Voltar")}
        >
          ↩
        </Link>

        <img
          className="rounded-full w-28 h-28 object-cover mx-auto mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        <h2 className="text-lg mb-4">
          {t("Bem-Vindo(a) de Volta!")}
        </h2>

        <p className="text-sm leading-relaxed">
          {t("Acesse sua conta para continuar conectado ao portal e aproveitar todos os recursos disponíveis.")}
        </p>
      </aside>

      <section className="flex-1 p-6">

        <div className={`${painel} border rounded-md w-full min-h-screen p-8`}>

          <header className="mb-8 text-center">
            <h1 className={`text-2xl font-bold mb-2 ${textoForte}`}>
              {t("Acesse sua conta")}
            </h1>

            <p className={textoMedio}>
              {t("Informe as suas credenciais para entrar")}
            </p>
          </header>

          {/* Campos de login */}
          <div className="max-w-xl mx-auto">

            <div className="mb-6">
              <p className={`font-medium mb-2 ${textoMedio}`}>
                {t("Email institucional")}
              </p>

              <input
                type="email"
                placeholder={t("Digite seu email institucional")}
                className={`w-full border rounded-md p-3 ${campo}`}
              />
            </div>

            <div className="mb-6">
              <p className={`font-medium mb-2 ${textoMedio}`}>
                {t("Senha")}
              </p>

              <input
                type="password"
                placeholder={t("Digite sua senha")}
                className={`w-full border rounded-md p-3 ${campo}`}
              />
            </div>

            <button className="bg-blue-900 text-white font-medium py-2 px-8 rounded-md hover:bg-blue-800">
              <Link to={rotas["Entrar"]}>
                {t("Entrar")}
              </Link>
            </button>

          </div>

          {/* Preferências */}
          <div className="mt-12 max-w-xl">

            <h2 className={`text-sm font-bold ${textoForte} mb-4`}>
              {t("Preferências")}
            </h2>

            {preferencias.map((preferencia) => (
              <div
                key={preferencia.id}
                className="flex items-center justify-between gap-4 mb-6"
              >
                <div className="flex items-center gap-3">

                  <span className={`text-lg ${textoMedio}`}>
                    {preferencia.icone}
                  </span>

                  <div>
                    <p className={`text-xs font-bold ${textoForte}`}>
                      {t(preferencia.nome)}
                    </p>

                    <p className={`text-xs ${textoMedio}`}>
                      {t(preferencia.descricao)}
                    </p>
                  </div>

                </div>

                <select
                  value={preferencia.nome === "Tema" ? tema : idioma}
                  onChange={(e) =>
                    mudarPreferencia(preferencia.nome, e.target.value)
                  }
                  className={`w-36 h-9 px-2 border rounded text-xs ${campo}`}
                  aria-label={t(preferencia.nome)}
                >
                  {preferencia.opcoes.map((opcao) => (
                    <option key={opcao} value={opcao}>
                      {t(opcao)}
                    </option>
                  ))}
                </select>

              </div>
            ))}

          </div>

        </div>
      </section>
    </main>
  )
}
