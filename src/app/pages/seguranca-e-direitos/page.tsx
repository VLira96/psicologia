const SegurancaEDireitos = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <section className="max-w-4xl bg-white shadow-lg rounded-lg mt-6 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Segurança Digital e Direitos Humanos</h2>
        <article className="text-gray-700 leading-relaxed space-y-4">
          <p>
            No contexto dos direitos humanos, a segurança digital é de extrema importância, uma vez que a proteção à privacidade e à segurança digital estão diretamente relacionadas à preservação dos direitos fundamentais.
          </p>

          <p>
            Com o avanço da tecnologia, a vida online se tornou uma extensão da vida cotidiana, o que fez com que a segurança no ambiente digital passasse a ser tratada como um direito essencial. A <strong>Declaração Universal dos Direitos Humanos</strong>, adotada pela ONU, estabelece em seu artigo 12 que:
          </p>
          <blockquote className="bg-gray-100 border-l-4 border-green-600 px-4 py-2 text-gray-800 italic">
            "Ninguém será sujeito a interferências arbitrárias em sua vida privada, família, domicílio ou correspondência, nem a ataques à sua honra e reputação."
          </blockquote>
          <p>
            No contexto digital, isso inclui o direito à proteção de dados pessoais e à segurança nas interações realizadas na internet.
          </p>

          <h3 className="text-xl font-semibold text-green-600">
            Legislações Relacionadas
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              A <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, representada no Brasil pela Lei n.º 13.709/2018, regula como empresas e organizações devem lidar com os dados pessoais dos indivíduos. Seu objetivo é proteger os direitos à privacidade e à liberdade, além de garantir a livre formação da personalidade.
            </li>
            <li>
              A <strong>Lei 14.811/2024</strong> incluiu o cyberbullying no Código Penal e atribuiu punições para quem o comete, com penas de reclusão de dois a quatro anos e multa.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600">
            Crimes Cibernéticos e Direitos Humanos
          </h3>
          <p>
            A segurança na internet também abrange o combate a crimes cibernéticos, incluindo o roubo de identidade, fraudes, cyberbullying e assédio online. Esses crimes não apenas violam a privacidade das vítimas, mas também podem causar danos físicos e psicológicos severos.
          </p>
          <p>
            A incapacidade de garantir a segurança no meio digital pode resultar na violação de direitos humanos fundamentais, como o direito à integridade física e psicológica. Crimes virtuais têm impactos devastadores no bem-estar das vítimas, tornando a segurança digital uma prioridade no campo dos direitos humanos.
          </p>
        </article>
      </section>
    </main>
  );
}

export default SegurancaEDireitos;