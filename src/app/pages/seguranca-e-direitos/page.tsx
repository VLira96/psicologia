const SegurancaEDireitos = () => {
    return (
        <main className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
    
          <section className="max-w-4xl bg-white shadow-lg rounded-lg mt-6 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">DIREITOS HUMANOS</h2>
            <article className="text-gray-700 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">O que é LGPD?</h3>
              <p>
                A Lei Geral de Proteção de Dados foi criada com o objetivo de regulamentar o uso de dados das pessoas físicas, 
                para proteger os direitos fundamentais de liberdade e de privacidade.
              </p>
    
              <h3 className="text-xl font-semibold text-blue-600">O que a LGPD garante?</h3>
              <p>
                Garante a proteção dos direitos básicos relacionados à liberdade e à privacidade das pessoas nos meios online.
              </p>
    
              <h3 className="text-xl font-semibold text-blue-600">
                Qual a ligação com os direitos humanos?
              </h3>
              <p>
                Os direitos digitais são uma extensão dos direitos presentes na Declaração Universal dos Direitos Humanos da ONU, 
                aplicados ao mundo online. Seu principal objetivo é garantir o acesso à internet, combater a exclusão digital e 
                assegurar que a rede seja usada como um bem comum. No entanto, a falta de consenso internacional resultou na 
                criação de Cartas de Direitos Digitais distintas em cada país.
              </p>
              <p>
                A internet, embora promova direitos humanos, também pode ser usada para violá-los. Os principais direitos digitais incluem:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Direito à Privacidade Online:</strong> Proteção de dados e comunicações pessoais.</li>
                <li><strong>Liberdade de Expressão:</strong> Direito de publicar e acessar conteúdo online, respeitando os limites legais.</li>
                <li><strong>Acesso à Informação:</strong> Garantia de acesso equitativo à internet e suas informações.</li>
                <li><strong>Direito ao Esquecimento:</strong> Possibilidade de remover informações prejudiciais ou irrelevantes online.</li>
                <li><strong>Neutralidade da Rede:</strong> Tratamento igualitário de todos os dados transmitidos pela internet.</li>
                <li><strong>Propriedade Intelectual:</strong> Proteção contra pirataria e uso indevido de direitos autorais.</li>
                <li><strong>Segurança Digital:</strong> Proteção contra crimes cibernéticos, como hacking e fraudes.</li>
                <li><strong>Acesso Universal:</strong> Inclusão de pessoas com limitações no uso de tecnologias digitais.</li>
              </ul>
              <p>
                O documento da ONU defende que os direitos offline devem ser garantidos também online, com destaque à liberdade de expressão, 
                e incentiva a cooperação internacional para facilitar o acesso às tecnologias, essenciais para o exercício dos direitos humanos.
              </p>
    
              <h3 className="text-xl font-semibold text-blue-600">
                Qual a diferença entre LGPD e RGPD?
              </h3>
              <p>
                Enquanto a LGPD é válida no Brasil, a RGPD é aplicada na União Europeia.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>LGPD:</strong> regula a transferência dos dados pessoais para fora do Brasil.</li>
                <li><strong>RGPD:</strong> impõe restrições às transferências internacionais de dados.</li>
              </ul>
              <p>
                Ambas as leis garantem transparência quanto ao uso de dados e exigem que a venda de dados pessoais seja feita com base legal.
              </p>
            </article>
          </section>

        </main>
      );
    
}

export default SegurancaEDireitos;