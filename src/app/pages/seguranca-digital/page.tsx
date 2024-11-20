const SegurancaDigital = () => {
    return (
        <main className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
            {/* Content Section */}
            <section className="max-w-4xl bg-white shadow-lg rounded-lg mt-6 p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">SEGURANÇA DIGITAL</h2>
                <article className="text-gray-700 leading-relaxed space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">O que é firewall?</h3>
                    <p>
                        Os firewalls, para leigos, podem ser explicados como filtros entre atividades permitidas ou não da Web.
                        O termo faz alusão a paredes que têm a função de separar o usuário do “fogo” (que representam possíveis
                        ameaças como links, sites, softwares e/ou hardwares suspeitos). Esse sistema cria um estreitamento no
                        ambiente da internet para uma navegação em segurança, distanciando de caminhos que levam a sites mal-intencionados.
                    </p>

                    <h3 className="text-xl font-semibold text-blue-600">Como funciona o firewall?</h3>
                    <p>
                        O firewall funciona como uma monitoria de segurança ao tráfego de rede de entrada e saída, designando a permissão ou
                        o bloqueio de tráfego específicos diante das regras de segurança estabelecidas. Atuando como um filtro de coisas
                        boas e ruins, o que se pode confiar e o que não. Sendo assim, o firewall tem como objetivo proteger as redes privadas
                        e dispositivos de endpoints presentes no espaço virtual.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default SegurancaDigital;