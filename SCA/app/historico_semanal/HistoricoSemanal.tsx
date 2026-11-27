
import { useState } from "react";
import { Link , useNavigate} from "react-router";

export function HistoricoSemanal() {
  const [tema, setTema] = useState("Claro");
  const [idioma, setIdioma] = useState("Português");
  const navegar = useNavigate();

  const traducoes: Record<string, Record<string, string>> = {
    English: {
      "Alertas Pendentes": "Pending Alerts",
      "Anexo atestado": "Attach Certificate",
      "Cadastrar Aluno": "Register Student",
      "Histórico Mensal": "Monthly History",
      "Perfil Secretarias": "Secretaries Profile",
      "Histórico Semanal": "Weekly History",
      "inicio": "Home",
      "Alunos cadastrados": "Registered Students",
      "Atrasos hoje": "Late Arrivals Today",
      "Saídas antecipadas": "Early Departures",
      "Alertas pendentes": "Pending Alerts",
      
      "Acompanhe o histórico de atrasos e saídas antecipadas durante a semana.": "Track late arrivals and early departures during the week.",
      "Período": "Period",
      "Tipo de registro": "Record Type",
      "Turma": "Class",
      "Alunos": "Students",
      "Pesquisar aluno": "Search student",
      "Todos": "All",
      "Todas": "All",
      "Saída Antecipada": "Early Departure",
      "Atraso": "Late Arrival",
      "Registros": "Records",
      "data": "Date",
      "tipo": "Type",
      "Aluno": "Student",
      "turma": "Class",
      "Horário de chegada": "Arrival Time",
      "horário de saida": "Departure Time",
      "responsavel pelo registro": "Record Responsible",
      "observação": "Observation",
      "Tema": "Theme",
      "Claro": "Light",
      "Escuro": "Dark",
      "Idioma": "Language"
    },
    Español: {
      "Alertas Pendentes": "Alertas Pendientes",
      "Anexo atestado": "Adjuntar Certificado",
      "Cadastrar Aluno": "Registrar Alumno",
      "Histórico Mensal": "Historial Mensual",
      "Perfil Secretarias": "Perfil de Secretarías",
      "Histórico Semanal": "Historial Semanal",
      "inicio": "Inicio",
      "Alunos cadastrados": "Alumnos Registrados",
      "Atrasos hoje": "Retrasos de Hoy",
      "Saídas antecipadas": "Salidas Anticipadas",
      "Alertas pendentes": "Alertas Pendientes",
      "Acompanhe o histórico de atrasos e saídas antecipadas durante a semana.": "Siga el historial de retrasos y salidas anticipadas durante la semana.",
      "Período": "Período",
      "Tipo de registro": "Tipo de Registro",
      "Turma": "Clase",
      "Alunos": "Alumnos",
      "Pesquisar aluno": "Buscar alumno",
      "Todos": "Todos",
      "Todas": "Todas",
      "Saída Antecipada": "Salida Anticipada",
      "Atraso": "Retraso",
      "Registros": "Registros",
      "data": "Fecha",
      "tipo": "Tipo",
      "Aluno": "Alumno",
      "turma": "Clase",
      "Horário de chegada": "Hora de Llegada",
      "horário de saida": "Hora de Salida",
      "responsavel pelo registro": "Responsable del Registro",
      "observação": "Observación",
      "Tema": "Tema",
      "Claro": "Claro",
      "Escuro": "Oscuro",
      "Idioma": "Idioma"
    }
  };

  function t(texto: string) {
    return traducoes[idioma]?.[texto] ?? texto;
  }

  const escuro = tema === "Escuro";

  const fundo = escuro ? "bg-gray-900" : "bg-gray-100";
  const painel = escuro
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-300";
  const textoForte = escuro ? "text-gray-100" : "text-gray-900";
  const textoMedio = escuro ? "text-gray-300" : "text-gray-700";
  const campo = escuro
    ? "bg-gray-700 border-gray-600 text-gray-100"
    : "bg-white border-gray-300 text-gray-700";
  const cabecalho = escuro
    ? "bg-gray-700 text-gray-200"
    : "bg-gray-100 text-gray-700";
  const borda = escuro ? "border-gray-600" : "border-gray-300";

  const menu = [
    { id: 1, nome: "Alertas Pendentes" },
    { id: 2, nome: "Anexo atestado" },
    { id: 3, nome: "Cadastrar Aluno" },
    { id: 4, nome: "Histórico Mensal" },
    { id: 5, nome:"Perfil Secretarias"},
    { id: 6, nome: "inicio" },
    { id: 7, nome:"Login"}
  ];

  const rotas: Record<string, string> = {
    "Alertas Pendentes": "/alertasPendentes",
    "Anexo atestado": "/anexoAtestados",
    "Cadastrar Aluno": "/cadastroalunos",
    "Histórico Mensal": "/historicoMensal",
    "Perfil Secretarias": "/perfilSecretarias",
    "inicio": "/paginainicio",
    "Login": "/login"
  };

  const tabelas = [
    { id: 1, nome: "data" },
    { id: 2, nome: "tipo" },
    { id: 3, nome: "Aluno" },
    { id: 4, nome: "turma" },
    { id: 5, nome: "Horário de chegada" },
    { id: 6, nome: "horário de saida" },
    { id: 7, nome: "responsavel pelo registro" },
    { id: 8, nome: "observação" },
  ];

  return (
    <main className={`flex min-h-screen ${fundo}`}>

      <div className="bg-blue-950 text-white w-44 shrink-0 flex flex-col items-center py-3 px-2">

        <button
          onClick={() => navegar(-1)}
          className="self-start text-2xl mb-4"
          aria-label={t("Voltar")}
        >
          ↩
        </button>
        <img
          className="rounded-full w-24 h-24 object-cover mb-6"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt="Logo"
        />

        {menu.map((item) => (
          <Link
            to={rotas[item.nome]}
            key={item.id}
            className={`block w-full text-left text-xs px-2 py-2 mb-6 ${
              item.nome === "Histórico Semanal" ? "rounded bg-blue-800" : ""
            }`}
          >
            {t(item.nome)}
          </Link>
        ))}
      </div>

      <div className="flex-1 p-6">
        <div className={`${painel} border rounded-md w-full min-h-screen p-8 flex flex-col`}>

          
          <div className="flex justify-end gap-4 mb-6">

            <div>
              <label className={`text-xs ${textoMedio}`}>
                {t("Tema")}
              </label>
              <select
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                className={`${campo} border rounded p-2 text-xs ml-2`}
              >
                <option value="Claro">{t("Claro")}</option>
                <option value="Escuro">{t("Escuro")}</option>
              </select>
            </div>

            <div>
              <label className={`text-xs ${textoMedio}`}>
                {t("Idioma")}
              </label>
              <select
                value={idioma}
                onChange={(e) => setIdioma(e.target.value)}
                className={`${campo} border rounded p-2 text-xs ml-2`}
              >
                <option value="Português">Português</option>
                <option value="English">English</option>
                <option value="Español">Español</option>
              </select>
            </div>

          </div>

          <div className="mb-10">
            <h1 className={`text-2xl ${textoForte}`}>
              📘 {t("Histórico Semanal")}
            </h1>

            <p className={`text-xs ${textoMedio}`}>
              {t("Acompanhe o histórico de atrasos e saídas antecipadas durante a semana.")}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 max-w-4xl mb-8">

            <div className="bg-green-600 text-white rounded-lg p-3">
              <p className="text-xs font-bold">{t("Alunos cadastrados")}</p>
              <p className="text-3xl font-bold text-center mt-3">500</p>
            </div>

            <div className="bg-yellow-500 text-white rounded-lg p-3">
              <p className="text-xs font-bold">{t("Atrasos hoje")}</p>
              <p className="text-3xl font-bold text-center mt-3">7</p>
            </div>

            <div className="bg-blue-500 text-white rounded-lg p-3">
              <p className="text-xs font-bold">{t("Saídas antecipadas")}</p>
              <p className="text-3xl font-bold text-center mt-3">10</p>
            </div>

            <div className="bg-red-500 text-white rounded-lg p-3">
              <p className="text-xs font-bold">{t("Alertas pendentes")}</p>
              <p className="text-3xl font-bold text-center mt-3">4</p>
            </div>

          </div>

          <div className="flex gap-6 mb-8">

            <div>
              <p className={`text-xs ${textoMedio} mb-2`}>{t("Período")}</p>
              <input
                type="date"
                className={`w-full h-9 px-2 border ${borda} rounded ${campo} text-xs`}
              />
            </div>

            <div>
              <p className={`text-xs ${textoMedio} mb-2`}>{t("Tipo de registro")}</p>
              <select className={`w-full h-9 px-2 border ${borda} rounded ${campo} text-xs`}>
                <option value="">{t("Todos")}</option>
                <option value="saida">{t("Saída Antecipada")}</option>
                <option value="atraso">{t("Atraso")}</option>
              </select>
            </div>

            <div>
              <p className={`text-xs ${textoMedio} mb-2`}>{t("Turma")}</p>
              <select className={`w-full h-9 px-2 border ${borda} rounded ${campo} text-xs`}>
                <option value="">{t("Todas")}</option>
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
              <p className={`text-xs ${textoMedio} mb-2`}>{t("Alunos")}</p>
              <input
                type="text"
                placeholder={t("Pesquisar aluno")}
                className={`w-full h-9 px-2 border ${borda} rounded ${campo} text-xs`}
              />
            </div>

          </div>

          <div>
            <h2 className={`text-lg ${textoForte} mb-3`}>
              {t("Registros")}
            </h2>

            <div className={`overflow-x-auto border ${borda} rounded`}>
              <table className="w-full text-xs text-left border-collapse">

                <thead className={cabecalho}>
                  <tr>
                    {tabelas.map((tabela) => (
                      <th
                        key={tabela.id}
                        className={`border ${borda} px-3 py-2 font-semibold capitalize`}
                      >
                        {t(tabela.nome)}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className={textoForte}>

                  <tr>
                    <td contentEditable={true} className={`border ${borda} p-2`}>16/06/2026</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>Atraso</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>José</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>9° ano</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>8:10</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>-</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>Secretaria</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>Consulta médica</td>
                  </tr>

                  <tr>
                    <td contentEditable={true} className={`border ${borda} p-2`}>18/06/2026</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>Saída Antecipada</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>Lorena Maria</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>-</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>-</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>-</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>-</td>
                    <td contentEditable={true} className={`border ${borda} p-2`}>-</td>
                  </tr>

                  {Array.from({ length: 10 }, (_, index) => (
                    <tr key={index}>
                      {tabelas.map((tabela) => (
                        <td
                          key={tabela.id}
                          contentEditable={true}
                          className={`border ${borda} p-2 h-9 min-w-80px ${
                            escuro ? "focus:bg-gray-600" : "focus:bg-yellow-50"
                          }`}
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
