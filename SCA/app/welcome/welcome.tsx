import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="bg-blue-900 text-white">
      <div>
          <img className="mask-left , rounded-full , w-20 , flex , justify-between" src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg" alt="" />
          <h1>Escola Sanico Teles</h1>
      </div>
    </main>
  );
}

