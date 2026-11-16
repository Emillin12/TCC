export function Ajuda() {
  return (
    <main className="flex flex-col">
       
      {/* Cabeçalho alinhado e com ponte de navegação */}
      <div className="flex bg-blue-900 flex-row items-center justify-between w-full px-6 py-3 shadow-md">
        <div className="flex items-center gap-4">
          <img className="rounded-full w-16 h-16 object-cover" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="Logo" />
          <p className="text-white text-2xl font-semibold">Ajudas</p>
        </div>

        {/* Ponte entre páginas sem precisar de biblioteca */}
        <div className="flex items-center gap-3">
          <a 
            href="/sobre-nos" 
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/20"
          >
            Sobre Nós →
          </a>
        </div>
      </div>

      {/* Espaçamento superior reduzido para aproximar do cabeçalho */}
      <div className="pt-8 px-12 pb-6">
        <p>Bem-vindo à Central de Ajuda do Sistema de Controle de Atrasos e Saídas Antecipadas de Alunos. Este espaço foi desenvolvido para auxiliar os usuários na utilização das funcionalidades da plataforma, proporcionando uma experiência simples, segura e eficiente.
        Caso tenha dúvidas sobre o funcionamento do sistema, consulte as orientações abaixo:</p>
          <div className="m-9.5 space-y-2 mt-4">
            <p>°Cadastro de Alunos e Turmas: Permite registrar, atualizar e consultar informações dos estudantes e suas respectivas turmas.</p>
            <p>°Registro de Atrasos: Possibilita o lançamento de atrasos, inclusão de justificativas e consulta ao histórico de ocorrências.</p>
            <p>°Registro de Saídas Antecipadas: Permite registrar saídas antes do término das aulas, informando o motivo e anexando documentos comprobatórios, quando necessário.</p>
            <p>°Histórico e Relatórios: Disponibiliza a visualização completa das ocorrências registradas para cada aluno, facilitando o acompanhamento pela secretaria e coordenação.</p>
            <p>°Alertas do Sistema: O sistema emite notificações automáticas quando o número de atrasos ou saídas antecipadas ultrapassa os limites estabelecidos pela instituição.</p>
            <p>°Correção de Registros: Em caso de informações inseridas incorretamente, usuários autorizados poderão editar ou atualizar os dados cadastrados.</p>
          </div>
      </div>

      <div className="px-12 pb-12 pt-2">
        Em caso de dificuldades técnicas, falhas no acesso ou dúvidas adicionais, recomendamos entrar em contato com a equipe responsável pela administração do sistema. Para agilizar o atendimento, informe detalhes sobre o problema encontrado, incluindo a data, horário e a funcionalidade utilizada no momento da ocorrência.
        Nosso compromisso é oferecer uma plataforma confiável e acessível, garantindo suporte contínuo aos profissionais da educação e contribuindo para uma gestão escolar mais organizada, transparente e eficiente.
        Agradecemos por utilizar nosso sistema e permanecemos à disposição para auxiliá-lo sempre que necessário.
      </div>
        
    </main>
  );
}