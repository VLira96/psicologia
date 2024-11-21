const SegurancaDigital = () => {
    return (
        <main className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
          <section className="max-w-4xl bg-white shadow-lg rounded-lg mt-6 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">SEGURANÇA DIGITAL</h2>
            <article className="text-gray-700 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-green-600">O que é segurança digital?</h3>
              <p>
                Segurança digital é um conjunto de práticas, ferramentas e medidas previstas para proteger sistemas, redes, 
                dispositivos e dados contra ataques, acessos não autorizados, roubos ou danos. Através dela, é possível 
                desenvolver estratégias para proteger atividades e transações online contra ameaças como vírus e invasões. 
                A garantia de um ambiente digital seguro é essencial para que as pessoas possam exercer plenamente os seus direitos.
              </p>
    
              <h3 className="text-xl font-semibold text-green-600">Qual sua importância?</h3>
              <p>
                A incapacidade de garantir segurança no ambiente digital pode resultar na violação de direitos humanos fundamentais, 
                como o direito à integridade física e psicológica, uma vez que crimes virtuais podem ter impactos devastadores no 
                bem-estar das vítimas.
              </p>
              <p>
                A segurança digital é essencial atualmente, pois protege as pessoas, empresas e governos contra uma série de ameaças 
                que podem comprometer informações confidenciais, recursos financeiros e privacidade. Sua importância é cada vez maior 
                devido ao crescente uso de tecnologias e à quantidade de dados gerados e compartilhados diariamente.
              </p>
    
              <h3 className="text-xl font-semibold text-green-600">Benefícios da segurança digital</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>A proteção de dados sensíveis.</li>
                <li>Prevenção de perdas financeiras.</li>
                <li>Preservação da privacidade.</li>
                <li>Defesa contra ameaças cibernéticas.</li>
                <li>Garantia da execução das leis e regulamentações no meio digital.</li>
              </ul>
    
              <h3 className="text-xl font-semibold text-green-600">Conceitos importantes no meio digital</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Cookies</h4>
                  <p>
                    Cookies são pequenos arquivos de texto que os sites salvam no seu dispositivo (computador, celular, tablet) ao 
                    serem acessados. Eles são específicos para armazenar informações sobre você e suas interações com o site, 
                    ajudando a melhorar sua experiência de navegação e permitindo que os sites funcionem de forma mais eficiente.
                  </p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Firewall</h4>
                  <p>
                    Um firewall é uma ferramenta de segurança de rede que monitora e controla o tráfego de dados entre dispositivos 
                    e redes, bloqueando ou permitindo conexões com base em um conjunto de regras predefinidas. Ele atua como uma 
                    barreira de proteção entre o computador (ou uma rede interna) e fontes externas, como a internet, protegendo 
                    contra acessos não autorizados e possíveis ataques.
                  </p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Cyberbullying</h4>
                  <p>
                    Cyberbullying é uma forma de intimidação, humilhação ou agressão psicológica praticada no ambiente digital, como 
                    redes sociais, aplicativos de mensagens, jogos online e e-mails. Isso ocorre quando uma pessoa ou grupo usa a 
                    tecnologia para assediar, ameaçar, humilhar ou ofender outra pessoa de forma repetitiva e intencional.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </main>
      );
    
}

export default SegurancaDigital;