import { useState } from "react";

export function Perguntas_Frequentes() {
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
          <p className="text-white ">Perguntas Frequentes</p>
        </div> 
      </div>

      {/* Container dos balões com espaçamento */}
      <div className="flex flex-col gap-4 p-6 max-w-4xl mx-auto w-full">

        {/* Balão 0: Como registrar um atraso? */}
        <div 
          onClick={() => toggleBalao(0)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 0 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">1. Como registrar um atraso?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 0 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 0 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Para registrar um atraso, acesse o menu "Atrasos", selecione o aluno desejado, informe a data, o horário de chegada e, se necessário, adicione uma justificativa ou observação. Após conferir os dados, clique em "Salvar".</p>
            </div>
          </div>
        </div>

        {/* Balão 1: Como registrar uma saída antecipada? */}
        <div 
          onClick={() => toggleBalao(1)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 1 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">2. Como registrar uma saída antecipada?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 1 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 1 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">No menu "Saídas Antecipadas", selecione o aluno, informe o horário da saída e o motivo correspondente (trabalho, curso, consulta médica ou outro). Caso exista documentação comprobatória, ela poderá ser anexada ao registro.</p>
            </div>
          </div>
        </div>

        {/* Balão 2: Quem pode utilizar o sistema? */}
        <div 
          onClick={() => toggleBalao(2)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 2 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">3. Quem pode utilizar o sistema?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 2 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 2 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">O sistema foi desenvolvido para ser utilizado pelos profissionais autorizados da instituição, especialmente membros da Secretaria Escolar e da Coordenação Pedagógica, responsáveis pelo acompanhamento da frequência e do histórico dos estudantes.</p>
            </div>
          </div>
        </div>

        {/* Balão 3: O que acontece quando um aluno ultrapassa o limite de atrasos? */}
        <div 
          onClick={() => toggleBalao(3)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 3 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">4. O que acontece quando um aluno ultrapassa o limite de atrasos?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 3 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 3 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Sempre que um aluno atingir ou ultrapassar o limite de atrasos definido pela instituição, o sistema emitirá um alerta automático para que a secretaria e a coordenação possam tomar as medidas cabíveis.</p>
            </div>
          </div>
        </div>

        {/* Balão 4: É possível justificar atrasos e saídas antecipadas? */}
        <div 
          onClick={() => toggleBalao(4)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 4 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">5. É possível justificar atrasos e saídas antecipadas?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 4 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 4 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Sim. O sistema permite registrar justificativas e anexar documentos comprobatórios, como atestados médicos, declarações ou outros documentos aceitos pela instituição.</p>
            </div>
          </div>
        </div>

        {/* Balão 5: Posso corrigir um registro realizado incorretamente? */}
        <div 
          onClick={() => toggleBalao(5)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 5 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">6. Posso corrigir um registro realizado incorretamente?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 5 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 5 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Sim. Usuários com as permissões adequadas podem editar ou corrigir informações registradas, garantindo a integridade e a atualização dos dados.</p>
            </div>
          </div>
        </div>
         {/* Balão 6: Como consultar o histórico de um aluno? */}
        <div 
          onClick={() => toggleBalao(6)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 6 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">7. Como consultar o histórico de um aluno?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 6 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 6 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Acesse o perfil do aluno no sistema atráves da página de alertas pendentes  e selecione a opção "Histórico Pessoal" do aluno desejado. Nessa seção, será possível visualizar todos os registros de atrasos, saídas antecipadas, justificativas  e observações associadas ao estudante.</p>
            </div>
          </div>
        </div>
         {/* Balão 7:  O sistema é seguro?*/}
        <div 
          onClick={() => toggleBalao(7)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 7 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">9. O sistema é seguro?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 7 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 7 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Sim. O sistema utiliza mecanismos de autenticação e controle de acesso para proteger as informações dos usuários e garantir a confidencialidade dos dados armazenados.</p>
            </div>
          </div>
        </div>
        {/* Balão 8: Como entrar em contato com o suporte? */}
        <div 
          onClick={() => toggleBalao(8)}
          className={`cursor-pointer rounded-3xl border-2 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
            balaoAberto === 8 ? "border-blue-900 bg-blue-50/50" : "border-gray-200 bg-white hover:border-blue-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-blue-950">10. Como entrar em contato com o suporte?</p>
            <span className={`text-blue-900 transition-transform duration-300 ${balaoAberto === 8 ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>
          <div className={`grid transition-all duration-300 ease-in-out ${
            balaoAberto === 8 ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-blue-200" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <p className="text-gray-700 leading-relaxed">Em caso de dúvidas, sugestões ou problemas técnicos, entre em contato com a equipe responsável pelo sistema por meio dos canais de atendimento disponibilizados pela instituição.Caso sua dúvida não esteja listada nesta seção, recomendamos entrar em contato com o administrador do sistema para obter suporte adicional. Nosso objetivo é proporcionar uma experiência segura, eficiente e transparente para todos os usuários.</p>
            </div>
          </div>
        </div>

       



      </div>

    </main>
  );
}