
export function Login() {
 const Login = [
  { 
      id: 25, 
      name: "Pikachu", 
      type: "Elétrico", 
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
    },
  ];

  const coresPokemons = {
    Planta: "bg-green-100",
    Fogo: "bg-red-200",
    Água: "bg-blue-100",
    Elétrico: "bg-yellow-100",
  };

  const coresTipos = {
    Elétrico: "bg-yellow-500",
    Fogo: "bg-red-500",
    Água: "bg-blue-500",
    Planta: "bg-green-500",
  };

  return (
    <main className="flex flex-col min-h-screen">
      
     
      <header className="flex justify-between bg-gradient-to-r from-red-500 to-yellow-500 p-4 shadow-md">
        <div className="p-1 flex gap-4 text-white text-2xl font-bold">
          <h1>Pokemon</h1>
        </div>
        <nav className="flex p-1 gap-4 text-white font-medium">
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/'}>
            Home
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/pokemons'}>
            Pokemons
          </span>
          <span className="cursor-pointer hover:underline" onClick={() => window.location.href = '/types'}>
            Tipos
          </span>
        </nav>
      </header>

     
      <div className="flex flex-col flex-1 bg-red-100 pb-10">

        
        <div className="flex h-20 items-center bg-white mx-10 my-10 rounded-lg px-5 shadow-md ">

            <form className="w-full relative">

              <input

              type="text"

              className="w-330 p-3 pb-1 pl-10 border-b border-gray-200 focus:outline-none  "/>



              <button className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 absolute right-2 cursor-pointer">Buscar</button>

            </form>

        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center px-6 mx-auto w-full max-w-6xl">

       
          {login.map((login) => (
            <div key={pokemon.id} className={`flex flex-col justify-between h-72 w-full max-w-64 text-center items-center rounded-xl p-5 shadow-lg border border-black/5 dark:bg-slate-800 dark:border-white/10 transition-transform duration-300 hover:scale-105 ${coresPokemons[pokemon.type]}`}>
              <img src={pokemon.image} alt={pokemon.name} className="w-30 h-30" />  
              <h2 className="text-lg font-semibold">{pokemon.name}</h2>
              <p className={`px-3 py-1 text-xs text-white font-semibold rounded-md ${coresTipos[pokemon.type]}`}>
                {pokemon.type}
              </p>
             
            </div>
          ))}
        </div>
      
          
            

        </div>
      

      {/* Footer */}
      <div className="bg-zinc-800 mt-auto">
        <h1 className="text-center text-sm text-white p-3">Pokédex - React + Tailwind</h1>
      </div>

    </main>
  );
}
