
export function HistoricoSemanal() {
  const menu = [
    {
      id : 1,
      nome : "Alertas Pendentes"
    },
    {
      id : 2,
      nome : "Anexo de atestado"
    },
    {
      id : 3,
      nome : "Cadastrar Aluno"
    },
    {
      id : 4,
      nome : "Histórico Mensal"
    },
    {
      id : 5,
      nome : "Histórico Semanal"
    },
    {
      id : 6,
      nome : "Inicio"
    },
    {
      id : 7,
      nome : "Registrar ocorrência"
    }

  ]

  const cards = [
    {
      id : 1,
      nome : "Alunos Cadastrados",
      valor : 500
    },
    {
      id : 2,
      nome : "Atrasos Hoje",
      valor : 7
    },
    {
      id : 3,
      nome : "Saídas Antecipadas",
      valor : 10
    },
    {
      id : 4,
      nome : "Alertas Pendentes",
      valor : 4
    }
  ]

  const filtros = [
    {
      id : 1,
      nome : "Período"
    },
    {
      id : 2,
      nome : "Tipo de Registro"
    },
    {
      id : 3,
      nome : "Turma"
    },
    {
      id : 4,
      nome : "Alunos"
    }
  ]

  const colunas = [
    {
      id : 1,
      nome : "Data"
    },
    {
      id : 2,
      nome : "Tipo"
    },
    {
      id : 3,
      nome : "Aluno"
    },
    {
      id : 4,
      nome : "Turma"
    },
    {
      id : 5,
      nome : "Horário de Chegada"
    },
    {
      id : 6,
      nome : "Horário de Saída"
    },
    {
      id : 7,
      nome : "Responsável pelo Registro"
    },
    {
      id : 8,
      nome : "Observação"
    }
  ]

  const registros = [
    {
      id : 1,
      data : "16/06/2026",
      tipo : "Atraso",
      aluno : "José",
      turma : "9º ano1",
      chegada : "8:10",
      saida : "-",
      responsavel : "Secretaria",
      observacao : "Consulta Médica"
    },
    {
      id : 2,
      data : "18/06/2026",
      tipo : "Saída Antecipada",
      aluno : "Lorena Maria",
      turma : "",
      chegada : "",
      saida : "",
      responsavel : "",
      observacao : ""
    }
  ]
}
