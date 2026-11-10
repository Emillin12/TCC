
export function PerfilSecretaria() {
  const dadosperfil =[
    {
      id:1,
      nome:"Nome",
      valor:""

    },
    {
      id:2,
      nome:"MASP",
      valor:""

    },
    {
      id:3,
      nome:"Turno",
      valor:""

    },

  ]
  const infoconta =[
    {
      id:1,
      nome:"Nome do usuário",
      valor:""
    },
    {
      id:2,
      nome:"cargo",
      valor:"Secretária"
    },
    {
      id:3,
      nome:"Email institucional",
      valor:""
    }
  ]

  const preferemcias=[
    {
      id:1,
      nome:"Tema",
      descrição:"Escolha o tema de sua preferência",
      opções:["Claro","Escuro"]
    },
    {
      id:2,
      nome:"Idioma",
      descrição:"Escolha o idioma de sua preferência",
      opções:["Português","Inglês"]
    }
  ]
  const contatos=[
    {
      id:1,
      valor:"suportesecretaria@gmail.com"
    },
    {
      id:2,
      valor:"(35)99000000"
    }
  ]
  return (
    <main className="flex min-h-screen bg-gray-100">
      <div className="bg-blue-950 from-blue-950 to-blue-500 text-white w-64 shrink-0 flex flex-col py-4 px-4">
        <button className="self-start text-2x1 mb-4" aria-label="voltar">
          voltar
        </button>
        <img
          className="rounded-full w-28 h-28 object-cover mx-auto mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        <h2 className="text_lg mb-8">
          Olá, Secretaria(o)!
        </h2>

        <h3 className="text-lg mb-2">
          Por trás de uma escola organizada, acolhedora e eficiente, existe o trabalho dedicado de uma secretária escolar. Cada atendimento, cada documento e cada orientação refletem compromisso e cuidado. Nunca se esqueça: seu trabalho é essencial e sua dedicação transforma a rotina escolar todos os dias!
        </h3>
      </div>
      
      <div className="flex-1 p-6">
        <div className="bg-white border border-gray-300 rounded-md w-full min-h-screen p-8 flex flex-col">
          <div className="flex-justify-between items-center mb-8">
            <h1 className="text-2xl text-gray-900">
              Meu perfil
            </h1>
          </div>
          <button className=" test-sm font-bold text-red-600 justify-end">
            Sair
          </button>
        </div>

        <div className="">

        </div>
      </div>
      
    </main>
  );
}
