
export function AnexoAtestados() {
const menu = [
  {
    id : 1,
    nome :"Alertas pendentes"
  },
  {
    id : 2,
    nome :"Anexo de atestado"
  },
  {
    id : 3,
    nome :"Histórico mensal"
  },
  {
    id : 4,
    nome :"Histórico semanal"
  },
  {
    id : 5,
    nome :"Inicio"
  },
  {
    id : 6,
    nome :"Registrar ocorrencia"
  }

]



  return (
    <main className="flex ">
      <aside className="bg-blue-900 text-white h-screen w-64 p-6">
        <img className="rounded-full w-20 mb-4" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="Logo" />

        <button className="block text-left mb-2">{menu[0].nome}</button>
        <button className="block text-left mb-2">{menu[1].nome}</button>
        <button className="block text-left mb-2">{menu[2].nome}</button>
        <button className="block text-left mb-2">{menu[3].nome}</button>
        <button className="block text-left mb-2">{menu[4].nome}</button>
        <button className="block text-left mb-2">{menu[5].nome}</button>
      </aside>
      
    </main>
    
  );
}
