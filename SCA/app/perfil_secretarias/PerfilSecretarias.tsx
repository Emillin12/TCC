import { useState } from "react"
import {Link} from "react-router"

export function PerfilSecretaria() {
  const dadosPerfil = [
    {
      id : 1,
      nome : "Nome",
      valor : ""
    },
    {
      id : 2,
      nome : "MASP",
      valor : ""
    },
    {
      id : 3,
      nome : "Turno",
      valor : ""
    }
  ]
  const infoConta = [
    {
      id : 1,
      nome : "Nome do Usuário",
      valor : ""
    },
    {
      id : 2,
      nome : "Cargo",
      valor : "Secretaria"
    },
    {
      id : 3,
      nome : "Email Institucional",
      valor : ""
    }
  ]
  const preferencias = [
    {
      id : 1,
      icone : "☾",
      nome : "Tema",
      descricao : "Escolha o tema de sua preferência",
      opcoes : ["Claro", "Escuro"]
    },
    {
      id : 2,
      icone : "🌐",
      nome : "Idioma",
      descricao : "Selecione o idioma",
      opcoes : ["Português", "English", "Español"]
    }
  ]
  const contatos = [
    {
      id : 1,
      icone : "✉",
      valor : "suportesecretaria@gmail.com"
    },
    {
      id : 2,
      icone : "☎",
      valor : "(00) 00000-0000"
    }
  ]

  
  const [tema, setTema] = useState("Claro")
  const [idioma, setIdioma] = useState("Português")

  function mudarPreferencia(nome: string, valor: string) {
    if (nome === "Tema") setTema(valor)
    if (nome === "Idioma") setIdioma(valor)
  }

  
  const [valores, setValores] = useState<Record<string, string>>(
    Object.fromEntries([...dadosPerfil, ...infoConta].map((item) => [item.nome, item.valor]))
  )

  function digitar(nome: string, valor: string) {
    setValores({ ...valores, [nome]: valor })
  }

  
  const mensagem = "Por trás de uma escola organizada, acolhedora e eficiente, existe o trabalho dedicado de uma secretária escolar. Cada atendimento, cada documento e cada orientação refletem compromisso e cuidado. Nunca se esqueça: seu trabalho é essencial e sua dedicação transforma a rotina escolar todos os dias!"

  
  const traducoes: Record<string, Record<string, string>> = {
    English: {
      "Voltar": "Back",
      "Olá, Secretaria(o)!": "Hello, Secretary!",
      [mensagem]: "Behind an organized, welcoming and efficient school, there is the dedicated work of a school secretary. Every service, every document and every piece of guidance reflects commitment and care. Never forget: your work is essential and your dedication transforms the school routine every day!",
      "Meu Perfil": "My Profile",
      "Sair": "Log out",
      "Secretaria(o)": "Secretary",
      "Secretaria": "Secretary",
      "Nome": "Name",
      "Turno": "Shift",
      "Informações da conta": "Account information",
      "Nome do Usuário": "Username",
      "Cargo": "Position",
      "Email Institucional": "Institutional email",
      "Preferências": "Preferences",
      "Tema": "Theme",
      "Escolha o tema de sua preferência": "Choose your preferred theme",
      "Claro": "Light",
      "Escuro": "Dark",
      "Idioma": "Language",
      "Selecione o idioma": "Select the language",
      "Fale Conosco/Suporte": "Contact Us/Support"
    },
    Español: {
      "Voltar": "Volver",
      "Olá, Secretaria(o)!": "¡Hola, Secretaria(o)!",
      [mensagem]: "Detrás de una escuela organizada, acogedora y eficiente, está el trabajo dedicado de una secretaria escolar. Cada atención, cada documento y cada orientación reflejan compromiso y cuidado. ¡Nunca olvides: tu trabajo es esencial y tu dedicación transforma la rutina escolar todos los días!",
      "Meu Perfil": "Mi Perfil",
      "Sair": "Salir",
      "Nome": "Nombre",
      "Informações da conta": "Información de la cuenta",
      "Nome do Usuário": "Nombre de usuario",
      "Email Institucional": "Correo institucional",
      "Preferências": "Preferencias",
      "Escolha o tema de sua preferência": "Elige el tema de tu preferencia",
      "Escuro": "Oscuro",
      "Selecione o idioma": "Selecciona el idioma",
      "Fale Conosco/Suporte": "Contáctenos/Soporte"
    }
  }

 
  function t(texto: string) {
    return traducoes[idioma]?.[texto] ?? texto
  }

  
  const escuro = tema === "Escuro"
  const fundo = escuro ? "bg-gray-900" : "bg-gray-100"
  const painel = escuro ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
  const caixa = escuro ? "border-gray-600" : "border-gray-300"
  const textoForte = escuro ? "text-gray-100" : "text-gray-900"
  const textoMedio = escuro ? "text-gray-300" : "text-gray-700"
  const textoFraco = escuro ? "text-gray-400" : "text-gray-600"
  const campo = escuro ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-gray-300 text-gray-700"

  const rotas: Record<string, string> = {
    "Sair": "/login",
    "Voltar":"/login"
  }

  return (
    <main className={`flex min-h-screen ${fundo}`}>
      <div className=" bg-blue-950 to-blue-500 text-white w-64 shrink-0 flex flex-col py-4 px-4">
        <Link to={rotas["Voltar"]} className="self-start text-2xl mb-4" aria-label={t("Voltar")}>
          ↩
        </Link>

        <img
          className="rounded-full w-28 h-28 object-cover mx-auto mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        <h2 className="text-lg mb-8">
          {t("Olá, Secretaria(o)!")}
        </h2>

        <p className="text-sm leading-relaxed">
          {t(mensagem)}
        </p>
      </div>

      <div className="flex-1 p-6">
        <div className={`${painel} border rounded-md w-full min-h-screen p-8 flex flex-col`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-2xl ${textoForte}`}>
              {t("Meu Perfil")}
            </h1>
            <Link to={rotas["Sair"]} className="text-sm font-bold text-red-500">
              {t("Sair")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className={`flex items-center gap-6 border ${caixa} rounded-md p-6`}>
              
              <div className="flex-1">
                <h2 className={`text-lg ${textoForte} mb-4`}>
                  {t("Secretaria(o)")}
                </h2>
                {dadosPerfil.map((dado) => (
                  <label key={dado.id} className={`flex items-center gap-2 text-xs ${textoMedio} mb-3`}>
                    {t(dado.nome)}:
                    <input
                      type="text"
                      value={valores[dado.nome]}
                      onChange={(e) => digitar(dado.nome, e.target.value)}
                      className={`flex-1 h-7 px-2 border rounded text-xs ${campo}`}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className={`border ${caixa} rounded-md p-6`}>
              <h2 className={`text-sm font-bold ${textoForte} mb-4`}>
                {t("Informações da conta")}
              </h2>
              {infoConta.map((info) => (
                <label key={info.id} className={`flex items-center gap-2 text-xs ${textoMedio} mb-3`}>
                  {t(info.nome)}:
                  {info.nome === "Cargo" ? (
                    <span className={textoForte}>{t(valores[info.nome])}</span>
                  ) : (
                    <input
                      type={info.nome === "Email Institucional" ? "email" : "text"}
                      value={valores[info.nome]}
                      onChange={(e) => digitar(info.nome, e.target.value)}
                      className={`flex-1 h-7 px-2 border rounded text-xs ${campo}`}
                    />
                  )}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-10 max-w-xl">
            <h2 className={`text-sm font-bold ${textoForte} mb-4`}>
              {t("Preferências")}
            </h2>
            {preferencias.map((preferencia) => (
              <div
                key={preferencia.id}
                className="flex items-center justify-between gap-4 mb-6"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${textoMedio}`} aria-hidden="true">{preferencia.icone}</span>
                  <div>
                    <p className={`text-xs font-bold ${textoForte}`}>{t(preferencia.nome)}</p>
                    <p className={`text-xs ${textoFraco}`}>{t(preferencia.descricao)}</p>
                  </div>
                </div>
                <select
                  value={preferencia.nome === "Tema" ? tema : idioma}
                  onChange={(e) => mudarPreferencia(preferencia.nome, e.target.value)}
                  className={`w-36 h-9 px-2 border rounded text-xs ${campo}`}
                  aria-label={t(preferencia.nome)}
                >
                  {preferencia.opcoes.map((opcao) => (
                    <option key={opcao} value={opcao}>{t(opcao)}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div>
            <h2 className={`text-lg ${textoForte} mb-4`}>
              {t("Fale Conosco/Suporte")}
            </h2>
            <div className="flex gap-16">
              {contatos.map((contato) => (
                <div key={contato.id} className="flex flex-col items-center gap-2">
                  <span className={`text-3xl ${textoMedio}`} aria-hidden="true">{contato.icone}</span>
                  <p className={`text-xs ${textoFraco}`}>{contato.valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )

}