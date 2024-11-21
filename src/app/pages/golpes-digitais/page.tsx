const GolpesDigitais = () => {
    return (
        <main className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
    
          <section className="max-w-4xl bg-white shadow-lg rounded-lg mt-6 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">GOLPES</h2>
            <article className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Nem tudo na internet é confiável. Golpes digitais são esquemas fraudulentos realizados no ambiente online com o objetivo de enganar as pessoas para obter informações pessoais, financeiras ou outros benefícios ilícitos. Com o aumento da tecnologia, esse tipo de atividade tem aumentado cada vez mais.
              </p>
    
              <h3 className="text-xl font-semibold text-green-600">Principais tipos de golpes digitais:</h3>
    
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">1. Phishing</h4>
                  <p>
                    É um golpe que visa capturar informações e dados pessoais por meio de mensagens eletrônicas que atraem a atenção dos usuários e os induzem a acessar links maliciosos ou instalar malwares com a finalidade de roubar dados.
                  </p>
                  <p><strong>Como funciona:</strong> O fraudador cria uma mensagem que imita uma empresa confiável (bancos, lojas ou órgãos públicos). A mensagem contém links que levam a sites falsos, onde a vítima insere seus dados.</p>
                  <p><strong>Exemplo:</strong> "Atualize seus dados bancários agora para evitar o bloqueio da sua conta."</p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">2. Ransomware</h4>
                  <p>
                    Um tipo de malware que bloqueia o acesso a dados ou sistemas da vítima, exigindo pagamento (geralmente em criptomoedas) para desbloqueá-los.
                  </p>
                  <p><strong>Como funciona:</strong> O ransomware é instalado ao abrir arquivos infectados ou clicar em links maliciosos. Uma mensagem aparece informando que os dados foram criptografados e só serão liberados após o pagamento.</p>
                  <p><strong>Exemplo:</strong> Uma tela com o aviso "Seus dados foram criptografados. Pague X bitcoins para recuperá-los."</p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">3. Clonagem de Aplicativos</h4>
                  <p>
                    O fraudador assume o controle de algum aplicativo da vítima para pedir dinheiro aos contatos.
                  </p>
                  <p><strong>Como funciona:</strong> O criminoso engana a vítima para fornecer o código de verificação enviado por SMS. Após obter o código, ele acessa o aplicativo em outro dispositivo.</p>
                  <p><strong>Exemplo:</strong> Mensagem como "Você recebeu um código por SMS? Envie para mim, é urgente!"</p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">4. Golpes do Pix e Transferências Bancárias</h4>
                  <p>
                    Fraudadores fingem ser conhecidos ou representantes de empresas, solicitando transferências via Pix ou outros meios.
                  </p>
                  <p><strong>Como funciona:</strong> Usam mensagens para convencer a vítima a realizar a transação. Muitas vezes, criam perfis falsos nas redes sociais ou passam por familiares.</p>
                  <p><strong>Exemplo:</strong> "Oi, é seu amigo! Troquei meu celular e estou usando outro número. Pode me ajudar com um Pix? Estou precisando para um exame urgente aqui, depois te devolvo."</p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">5. Golpes em E-commerce (Lojas Falsas)</h4>
                  <p>
                    Sites ou vendedores fraudulentos oferecem produtos inexistentes ou falsos.
                  </p>
                  <p><strong>Como funciona:</strong> A vítima faz a compra e o pagamento, mas nunca recebe o produto, geralmente em sites falsos que imitam lojas confiáveis.</p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">6. Spyware</h4>
                  <p>
                    Programas que monitoram e coletam informações do usuário sem seu conhecimento.
                  </p>
                  <p><strong>Como funciona:</strong> Pode ser instalado ao baixar softwares de fontes não confiáveis. O fraudador espia atividades como senhas digitadas e histórico de navegação.</p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">7. Links Maliciosos</h4>
                  <p>
                    Links enviados, geralmente por mensagens, que direcionam a sites infectados ou falsos.
                  </p>
                  <p><strong>Como funciona:</strong> O link atrai a vítima com promessas, como "Veja quem visitou seu perfil”. Ao clicar, a vítima é redirecionada para páginas que roubam informações ou instalam malwares.</p>
                </div>
    
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">8. Engenharia Social</h4>
                  <p>
                    Técnica usada por criminosos para induzir usuários a fornecerem, de forma direta ou indireta, dados confidenciais.
                  </p>
                  <p><strong>Como funciona:</strong> O fraudador se passa por alguém confiável (suporte técnico, amigo, empresa ou funcionário) e pede informações confidenciais.</p>
                  <p><strong>Exemplo:</strong> "Sou do suporte do banco. Preciso do seu CPF e senha para resolver um problema na sua conta."</p>
                </div>
              </div>
            </article>
          </section>
        </main>
      );    
}

export default GolpesDigitais;