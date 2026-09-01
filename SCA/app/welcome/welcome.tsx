import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import SanicoImage from "./sanicoo em desenho.png";
export function Welcome() {
  return (
    <main>
      <div className="bg-blue-900 text-white columns-2 text-2xl flex justify-start">
        <img
          className="mask-left , rounded-full , w-20 , flex"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt=""
        />
        <p>Escola Estadual Sanico Teles</p>
      </div>

      <div className="flex m-20 justify-between ">
        <div className=" mr-10 ml-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 justify-between flex">
          <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
              <div className="text-xl font-medium text-black dark:text-white cursor-pointer">
                Cadastro
              </div>
              <p className="text-gray-500 dark:text-gray-400 cursor-pointer">
                Cadastre-se e mantenha os dados sempre atualizados.
              </p>
            </div>
          </div>
      </div>

        <div className=" mr-10 ml-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 justify-between flex">
          <div className=" mr-10 ml-10 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
              <div className="text-xl font-medium text-black dark:text-white cursor-pointer">
                Login
              </div>
              <p className="text-gray-500 dark:text-gray-400 cursor-pointer">
                Acesse sua conta com segurança e privacidade.
              </p>
            </div>
          </div>
        </div>

          <div className=" mr-10 ml-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 justify-between flex">
          <div className=" mr-10 ml-10 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
              <div className="text-xl font-medium text-black dark:text-white cursor-pointer">
              </div>
              <p className="text-gray-500 dark:text-gray-400 cursor-pointer">
                Segurança e privacidade em primeiro lugar.
              </p>
            </div>
          </div>
        </div>

      </div>



        
    

      <div>
          <img src={SanicoImage}></img>
        </div>
    </main>
  );
}
