
export function HistoricoSemanal() {

  const menu = [
    { id: 1, nome: "Alertas Pendentes" },
    { id: 2, nome: "Anexo atestado" },
    { id: 3, nome: "Cadastrar Aluno" },
    { id: 4, nome: "Histórico Mensal" },
    { id: 5, nome: "Histórico Semanal" },
    { id: 6, nome: "inicio" },
    { id: 7, nome: "Registrar ocorrência" }
  ];

  const cards = [
    { id: 1, nome: "Alunos cadastrados" },
    { id: 2, nome: "Atrasos hoje" },
    { id: 3, nome: "Saidas antecipadas" },
    { id: 4, nome: "Alertas pendentes" }
  ];

  const filtros = [
    { id: 1, nome: "periodo" },
    { id: 2, nome: "tipo de registro" },
    { id: 3, nome: "turma" },
    { id: 4, nome: "alunos" }
  ];

  const tabelas = [
    { id: 1, nome: "data" },
    { id: 2, nome: "tipo" },
    { id: 3, nome: "Aluno" },
    { id: 4, nome: "turma" },
    { id: 5, nome: "Horário de chegada" },
    { id: 6, nome: "horário de saida" },
    { id: 7, nome: "responsavel pelo registro" },
    { id: 8, nome: "observação" }
  ];

  return (
    <main className="flex min-h-screen bg-gray-100">

      
      <div className="bg-blue-950 text-white w-44 shrink-0 flex flex-col items-center py-3 px-2">

        <img
          className="rounded-full w-24 h-24 object-cover mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        {menu.map((item) => (
          <button
            key={item.id}
            className={`block w-full text-left text-xs px-2 py-2 mb-6 ${
              item.nome === "Histórico Semanal"
                ? "bg-blue-700 rounded"
                : ""
            }`}
          >
            {item.nome}
          </button>
        ))}

      </div>

      
      <div className="flex-1 p-6">

        <div className="bg-white border border-gray-300 rounded-md w-full min-h-screen p-8 flex flex-col">

          
          <div className="mb-10">
            <h1 className="text-2xl text-gray-900">
              📘 Histórico Semanal
            </h1>

            <p className="text-xs text-gray-800">
              Acompanhe o histórico de atrasos e saídas antecipadas durante a semana.
            </p>
          </div>

          
          <div className="grid grid-cols-4 gap-6 max-w-4xl mb-8">

            <div className="bg-green-600 text-white rounded-lg p-3">
              <p className="text-xs font-bold">Alunos cadastrados</p>
              <p className="text-3xl font-bold text-center mt-3">500</p>
            </div>

            <div className="bg-yellow-500 text-white rounded-lg p-3">
              <p className="text-xs font-bold">Atrasos hoje</p>
              <p className="text-3xl font-bold text-center mt-3">7</p>
            </div>

            <div className="bg-blue-500 text-white rounded-lg p-3">
              <p className="text-xs font-bold">Saídas antecipadas</p>
              <p className="text-3xl font-bold text-center mt-3">10</p>
            </div>

            <div className="bg-red-500 text-white rounded-lg p-3">
              <p className="text-xs font-bold">Alertas pendentes</p>
              <p className="text-3xl font-bold text-center mt-3">4</p>
            </div>

          </div>

          
          <div className="flex gap-6 mb-8">

            <div>
              <p className="text-xs text-gray-700 mb-2">Período</p>

              <input
                type="date"
                className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
              />
            </div>

            <div>
              <p className="text-xs text-gray-700 mb-2">Tipo de registro</p>

              <select className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700">
                <option value="">Todos</option>
                <option value="saida">Saída Antecipada</option>
                <option value="atraso">Atraso</option>
              </select>
            </div>

            <div>
              <p className="text-xs text-gray-700 mb-2">Turma</p>

              <select className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700">
                <option value="">Todas</option>
                <option value="6">6° ano</option>
                <option value="7">7° ano</option>
                <option value="8">8° ano</option>
                <option value="9">9° ano</option>
                <option value="1 EMTI">1° ano EMTI</option>
                <option value="2 EMTI">2° ano EMTI</option>
                <option value="3 EMTI">3° ano EMTI</option>
                <option value="1 técnico">1° ano em ensino técnico</option>
                <option value="2 técnico">2° ano em ensino técnico</option>
                <option value="3 técnico">3° ano em ensino técnico</option>
              </select>
            </div>

            <div>
              <p className="text-xs text-gray-700 mb-2">Alunos</p>

              <input
                type="text"
                placeholder="Pesquisar aluno"
                className="w-full max-w-[220px] h-9 px-2 border border-gray-300 rounded bg-white text-xs text-gray-700"
              />
            </div>

          </div>

          
          <div>

            <h2 className="text-lg text-gray-900 mb-3">
              Registros
            </h2>

            <div className="overflow-x-auto border border-gray-300 rounded">

              <table className="w-full text-xs text-left border-collapse">

                <thead className="bg-gray-100 text-gray-700">

                  <tr>
                    {tabelas.map((tabela) => (
                      <th
                        key={tabela.id}
                        className="border border-gray-300 px-3 py-2 font-semibold capitalize"
                      >
                        {tabela.nome}
                      </th>
                    ))}
                  </tr>

                </thead>

                <tbody className="text-gray-800">

  
  <tr>
    <td contentEditable={true} className="border p-2">16/06/2026</td>
    <td contentEditable={true} className="border p-2">Atraso</td>
    <td contentEditable={true} className="border p-2">José</td>
    <td contentEditable={true} className="border p-2">9° ano</td>
    <td contentEditable={true} className="border p-2">8:10</td>
    <td contentEditable={true} className="border p-2">-</td>
    <td contentEditable={true} className="border p-2">Secretaria</td>
    <td contentEditable={true} className="border p-2">Consulta médica</td>
  </tr>

  
  <tr>
    <td contentEditable={true} className="border p-2">18/06/2026</td>
    <td contentEditable={true} className="border p-2">Saída Antecipada</td>
    <td contentEditable={true} className="border p-2">Lorena Maria</td>
    <td contentEditable={true} className="border p-2">-</td>
    <td contentEditable={true} className="border p-2">-</td>
    <td contentEditable={true} className="border p-2">-</td>
    <td contentEditable={true} className="border p-2">-</td>
    <td contentEditable={true} className="border p-2">-</td>
  </tr>

  
  {Array.from({ length: 10 }, (_, index) => (
    <tr key={index}>
      {tabelas.map((tabela) => (
        <td
          key={tabela.id}
          contentEditable={true}
          className="border p-2 h-9 min-w-[80px] focus:bg-yellow-50"
        ></td>
      ))}
    </tr>
  ))}

</tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
