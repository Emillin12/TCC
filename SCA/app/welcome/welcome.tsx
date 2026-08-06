import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main >
      <div className="bg-blue-900 text-white">
          <img className="mask-left , rounded-full , w-20 , flex , justify-between" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="" />
          <p>Escola Sanico Teles</p>
      </div>

          <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <div className="text-xl font-medium text-black dark:text-white">Cadastro</div>
                    <p className="text-gray-500 dark:text-gray-400">Cadastre-se, e mantenha os dados sempre atualizados.</p>
            </div>
          </div>

          <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <div className="text-xl font-medium text-black dark:text-white">Login</div>
                    <p className="text-gray-500 dark:text-gray-400">Acesse sua conta com segurança e privacidade.</p>
            </div>
          </div>
    </main>
  );
}

