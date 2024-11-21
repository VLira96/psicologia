const FicaADica = () => {
    return (
        <main className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
            <section className="max-w-4xl bg-white shadow-lg rounded-lg mt-6 p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Garantindo sua Segurança Online</h2>
                <article className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                        Pensando nas adversidades que podem surgir no meio digital, é essencial adotar práticas que garantam sua proteção. A seguir, confira algumas recomendações para navegar na internet com maior segurança:
                    </p>

                    <h3 className="text-xl font-semibold text-green-600">Principais Recomendações:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Evite o uso de links que não são confiáveis.</li>
                        <li>
                            Utilize senhas fortes e diversificadas, incluindo números, letras maiúsculas e caracteres especiais, e troque-as regularmente.
                        </li>
                        <li>Evite usar dados pessoais comuns na criação de senhas.</li>
                        <li>
                            Escolha navegadores com cuidado e sempre personalize as preferências de cookies para maior controle sobre os dados compartilhados.
                        </li>
                        <li>Mantenha seus firewalls e antivírus atualizados.</li>
                        <li>Minimize o compartilhamento excessivo de informações pessoais.</li>
                        <li>Habilite a verificação em duas etapas nos aplicativos.</li>
                        <li>
                            Confirme a autenticidade de solicitações antes de compartilhar informações ou realizar ações em nome de empresas ou contatos confiáveis.
                        </li>
                        <li>Feche as sessões ao sair de e-mails, redes sociais e sites que exigem senhas.</li>
                        <li>Desconfie de ofertas muito boas para serem verdadeiras ou promoções urgentes.</li>
                        <li>Seja criterioso ao baixar aplicativos e procure fontes confiáveis.</li>
                        <li>Mantenha-se informado sobre práticas de segurança e, em caso de dúvida, sempre desconfie.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-green-600">Atenção aos Cookies:</h3>
                    <p>
                        Personalizar as preferências de cookies é uma prática fundamental para proteger sua privacidade. Muitos sites oferecem opções de configuração que permitem controlar quais tipos de cookies você aceita. Ao fazer isso, você pode evitar rastreamento desnecessário ou invasivo durante sua navegação.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default FicaADica;