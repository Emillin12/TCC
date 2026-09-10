export function PaginaInicio() {
    const inicio ={
        {  id: 1;
            <img src=""  />
            titulo: "Cadastro de Alunos";
            descricao: "Cadastre e mantenha os dados dos aluos sempre atualizados."; 

    }
    }




     return (
    <div className=" flex-col items-center  ">
      <header className="flex flex-col items-center justify-between w-full h-full">
        <h1 className="text-2xl bg-blue-500 font-bold mb-8">Bem-vindo ao sistema de controle </h1>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PaginaInicio.map((PaginaInicio) => (
            <div key={PaginaInicio.id} className="bg-white  rounded-lg p-6">
     <h1 className="text-xl font-bold mb-2">{PaginaInicio.titulo}</h1>
           <p>{PaginaInicio.descricao}</p>
           </div>
         ))}
       </div>
      </header>
   </div>
  );
   

}

