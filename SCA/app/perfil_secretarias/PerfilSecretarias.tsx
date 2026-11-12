
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
      valor : "email@exemplo.com"
    },
    {
      id : 2,
      icone : "☎",
      valor : "(00) 00000-0000"
    }
  ]

  return (
    <main className="flex min-h-screen bg-gray-100">
      <div className="bg-blue-950 text-white w-64 shrink-0 flex flex-col py-4 px-4">
        <button className="self-start text-2xl mb-4" aria-label="Voltar">
          ↩
        </button>

        <img
          className="rounded-full w-28 h-28 object-cover mx-auto mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        <h2 className="text-lg mb-8">
          Olá, Secretaria(o)!
        </h2>

        <p className="text-sm leading-relaxed">
          Por trás de uma escola organizada, acolhedora e eficiente, existe o trabalho dedicado de uma secretária escolar. Cada atendimento, cada documento e cada orientação refletem compromisso e cuidado. Nunca se esqueça: seu trabalho é essencial e sua dedicação transforma a rotina escolar todos os dias!
        </p>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white border border-gray-300 rounded-md w-full min-h-screen p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl text-gray-900">
              Meu Perfil
            </h1>
            <button className="text-sm font-bold text-red-600">
              Sair
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-6 border border-gray-300 rounded-md p-6">
              <span className="text-5xl text-gray-800" aria-hidden="true">👤</span>
              <div className="flex-1">
                <h2 className="text-lg text-gray-900 mb-4">
                  Secretaria(o)
                </h2>
                {dadosPerfil.map((dado) => (
                  <p key={dado.id} className="text-xs text-gray-700 mb-3">
                    {dado.nome}: <span className="text-gray-900">{dado.valor || "-"}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="border border-gray-300 rounded-md p-6">
              <h2 className="text-sm font-bold text-gray-900 mb-4">
                Informações da conta
              </h2>
              {infoConta.map((info) => (
                <p key={info.id} className="text-xs text-gray-700 mb-3">
                  {info.nome}: <span className="text-gray-900">{info.valor || "-"}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="mb-10 max-w-xl">
            <h2 className="text-sm font-bold text-gray-900 mb-4">
              Preferências
            </h2>
            {preferencias.map((preferencia) => (
              <div
                key={preferencia.id}
                className="flex items-center justify-between gap-4 mb-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg text-gray-700" aria-hidden="true">{preferencia.icone}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{preferencia.nome}</p>
                    <p className="text-xs text-gray-600">{preferencia.descricao}</p>
                  </div>
                </div>
                <select
                  className="w-36 h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
                  aria-label={preferencia.nome}
                >
                  {preferencia.opcoes.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg text-gray-900 mb-4">
              Fale Conosco/Suporte
            </h2>
            <div className="flex gap-16">
              {contatos.map((contato) => (
                <div key={contato.id} className="flex flex-col items-center gap-2">
                  <span className="text-3xl text-gray-800" aria-hidden="true">{contato.icone}</span>
                  <p className="text-xs text-gray-600">{contato.valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
