export function Seguranca() {
  return (
    <main className="flex">
      <div>
        <img
          className="mask-left , rounded-full , w-32 , flex"
          src="https://valeindependente.com.br/wp-content/uploads/2016/04/logo-oficial-sanico.jpg"
          alt=""
        />
     
          <div className="flex flex-col">
          <div className="font-semibold">
            <p>Políticas de Privacidade e Cookies </p>
          </div>
          <div>Sua privacidade é importante para nós.Está página explica como coletamos , usamos e protegemos suas informações e como cookis para melhoarar sua experiência em nossa plataforma.</div>
        </div>

        <div className="flex flex-col">
          <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-slate-100 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div>
              <div className="text-xl font-medium text-black dark:text-white">Políticas de Privacidade</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>1. Informaôes que coletamos:</p>
            <p>Coletamos informaçôes que você nos forneça diretamente como nome,e-mail e dados de cadastro</p>
          </div>
          <div>
            <p>2. Como usamos suas informações:</p>
            <p>Utilizamos suas informações para fornecer e melhorar nossos serviços , personalizar sua experiência , enviar comunicações iumportantes e garantir a segurança da plataforma.</p>
          </div>
          <div>
            <p>3. Compatilhamento de informações:</p>
            <p>Não vendemos sua informação sem a sua autorização e pode ser crime ou infração grave</p>
          </div>
          <div>
            <p>4. Segurança de Dados:</p>
            <p>Adotamos medidas técnicas e organizacionais adequeadas para proteger suas informações contra o acesso não autorizado,alterações indevidas , divulgações ou detruição.</p>
          </div>
          <div>
            <p>5. Seus Direitos:</p>
            <p>Você pode solicitar o acesso ,correção ou exclusão de seus dados pessoais a qualquer momento, entrando em contato conosco pelos canais disponíveis mo site.</p>
          </div>
          <div>
            <p>6. Contato:</p>
            <p>Em caso de dúvidas sobre estás Políticas de Privacidade , entre em contato conosco pelo e-mail: suportesecretaria@gmail.com</p>
          </div>
        </div>
      </div>

      <div>
  <div className="flex flex-col">
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-slate-100 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div>
        <div className="text-xl font-medium text-black dark:text-white">Políticas de Cookie</div>
      </div>
    </div>
  </div>
  <div>
    <p>1. O que são cookies?</p>
    <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visitar um site. Eles ajudam a melhorar sua experiência , permitindo que o site lembre de suas ações e preferências(por exemplo login,idiomas e outras configurações de exibição) durante um período de tempo.</p>
  </div>
  <div>
    <p>2. Como utilizamos cookies?</p>
    <p>Utilizamos cookies para diferentes finalidades ,como garantia de funcionamento adequado do site ,entender como você utiliza nossa plataforma,personlizar conteúdos e anúncios e melhorar nosso serviço.</p>
  </div>

  {/* Tabela adicionada ao final */}
  <div className="mt-6 overflow-x-auto">
    <table className="w-full border-collapse border border-slate-300 text-left text-sm dark:border-slate-600">
      <thead className="bg-slate-100 dark:bg-slate-800">
        <tr>
          <th className="border border-slate-300 p-3 dark:border-slate-600">Tipo de Cookie</th>
          <th className="border border-slate-300 p-3 dark:border-slate-600">Finalidade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-300 p-3 dark:border-slate-600">Cookies essenciais</td>
          <td className="border border-slate-300 p-3 dark:border-slate-600">Necessários para o funcionamento adequado do site.</td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-3 dark:border-slate-600">Cookies de desempenho</td>
          <td className="border border-slate-300 p-3 dark:border-slate-600">Ajudam a compreender como os usuários interagem com a plataforma.</td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-3 dark:border-slate-600">Cookies de funcionalidade</td>
          <td className="border border-slate-300 p-3 dark:border-slate-600">Armazenam preferências para melhorar a experiência do usuário.</td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-3 dark:border-slate-600">Cookies de publicidade</td>
          <td className="border border-slate-300 p-3 dark:border-slate-600">Permitem personalizar conteúdos e anúncios.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

     



    
        
      

    </main>
  );
}
