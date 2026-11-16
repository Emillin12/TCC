import { useState } from "react";

export function SobreNos() {
  // Controla qual balão está aberto pelo índice (0 a 5). null = todos fechados
  const [balaoAberto, setBalaoAberto] = useState<number | null>(null);

  const toggleBalao = (index: number) => {
    setBalaoAberto(balaoAberto === index ? null : index);
  };

  return (
    <main className="flex flex-col ">

      <div className="flex bg-blue-900 flex-row w-screen ">
        <div>
          <img className="rounded-full w-20 mb-4" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="Logo" />
        </div>
        <div className="w-full text-2xl flex justify-center">
          <p className="text-white ">Sobre Nós</p>
        </div> 
      </div>

      {/* Container dos balões com espaçamento */}
      <div className="flex flex-col gap-4 p-6 max-w-4xl mx-auto w-full">

        {/* Balão 0: Quem Somos? */}
        <div 
          onClick={() => toggleBalao(0)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 0 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">Quem Somos?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 0 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 0 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Somos uma equipe dedicada ao desenvolvimento de soluções tecnológicas voltadas à modernização, organização e aprimoramento da gestão escolar.Nosso trabalho tem como propósito oferecer ferramentas digitais que contribuam para tornar os processos administrativos e pedagógicos das instituições de ensino mais eficientes, organizados, transparentes e acessíveis.
              Acreditamos que a tecnologia deve atuar como uma aliada da educação, proporcionando recursos que facilitem o trabalho dos profissionais da escola e contribuam para uma gestão mais precisa e responsável.</p>
            </div>
          </div>
        </div>

        {/* Balão 1: Nossa Solução */}
        <div 
          onClick={() => toggleBalao(1)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 1 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">Nossa Solução</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 1 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 1 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Desenvolvemos o Sistema de Controle de Atrasos e Saídas Antecipadas de Alunos, uma solução destinada ao apoio das atividades da secretária e da coordenação escolar. A plataforma foi concebida para proporcionar um acompanhamento mais organizado da rotina dos estudantes, permitindo o registro, controle e consulta de ocorrências relacionadas à entrada e à saída dos alunos. Dessa forma, a instituição dispõe de um recurso centralizado para auxiliar no acompanhamento da frequência e da movimentação dos estudantes.</p>
            </div>
          </div>
        </div>

        {/* Balão 2: Nossa Visão */}
        <div 
          onClick={() => toggleBalao(2)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 2 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">Nossa Visão</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 2 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 2 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Ser uma referência no desenvolvimento de soluções tecnológicas para a gestão escolar, promovendo inovação, eficiência e melhoria contínua nos processos administrativos das instituições de ensino.
              Pretendemos contribuir para uma transformação digital responsável, na qual a tecnologia esteja verdadeiramente a serviço da educação e das pessoas que fazem parte da comunidade escolar.</p>
            </div>
          </div>
        </div>

        {/* Balão 3: Compromisso com a Gestão Escolar */}
        <div 
          onClick={() => toggleBalao(3)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 3 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">Compromisso com a Gestão Escolar</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 3 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 3 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Entendemos que uma gestão escolar eficiente depende de organização, informação e acompanhamento adequado dos processos.
              Nesse sentido, nossa solução foi desenvolvida para apoiar os profissionais responsáveis pela administração da rotina dos estudantes, proporcionando maior controle sobre os registros e facilitando a consulta das informações.
              Nosso compromisso é oferecer uma ferramenta que seja prática, confiável e adequada à realidade das instituições de ensino.</p>
            </div>
          </div>
        </div>

        {/* Balão 4: Segurança e Responsabilidade */}
        <div 
          onClick={() => toggleBalao(4)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 4 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">Segurança e Responsabilidade</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 4 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 4 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">A utilização de sistemas destinados ao ambiente escolar exige atenção especial à segurança, privacidade e proteção das informações.
              Por esse motivo, consideramos a responsabilidade no tratamento das informações um princípio fundamental do desenvolvimento da plataforma, buscando proporcionar um ambiente adequado para o gerenciamento dos registros escolares.</p>
            </div>
          </div>
        </div>

        {/* Balão 5: Em Síntese */}
        <div 
          onClick={() => toggleBalao(5)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 5 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">Em Síntese</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 5 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 5 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Nosso projeto representa a união entre tecnologia, organização e educação, oferecendo uma solução desenvolvida para atender às necessidades da rotina escolar.
              Por meio do Sistema de Controle de Atrasos e Saídas Antecipadas de Alunos, buscamos proporcionar às instituições de ensino maior controle, praticidade e transparência no acompanhamento das ocorrências relacionadas aos estudantes.
              Nosso propósito é utilizar a tecnologia para tornar a gestão escolar mais eficiente, organizada e preparada para os desafios do presente e do futuro.</p>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}