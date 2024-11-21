export default function Home() {
  return (
    <main className="bg-gray-100 min-h-[85vh] p-6 flex flex-col items-center">
      <section className="max-w-4xl bg-white shadow-lg rounded-lg mt-6 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quem Somos</h2>
        <article className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Esse site é o resultado de uma atividade acadêmica desenvolvida no Curso de Psicologia da
            <span className="font-semibold"> Ulbra Palmas</span>, criado pelas alunas:{" "}
            <span className="font-semibold">
              Ludmylla Lucindo, Marianne Batista, Izadora Pelizari, Carol Andrade, Bianca Nolêto e Ana Clara Souza.
            </span>
          </p>

          <p>
            Este projeto foi realizado no âmbito da disciplina de <span className="font-semibold">Direitos Humanos e Cidadania</span>, sob a orientação da
            <span className="font-semibold"> Dra. Ruth Cabral</span>.
          </p>

          <p>
            Nosso principal objetivo é promover a conscientização e a cidadania digital, explorando temas como segurança digital, golpes digitais e práticas de proteção no ambiente online.
          </p>
        </article>
      </section>
    </main>
  );
}
