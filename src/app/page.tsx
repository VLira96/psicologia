export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col">
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-6 p-6 flex-grow pt-14">
        <h2 className="text-2xl font-semibold text-gray-800 justify-self-center	">Sobre o Projeto</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Esse site é produto de uma atividade desenvolvida no Curso de
          Psicologia da Ulbra Palmas, pelas alunas{" "}
          <span className="font-medium">
            Ludmylla Lucindo, Marianne Batista, Izadora Pelizari, Carol Ribeiro,
            Bianca Luz
          </span>{" "}
          e <span className="font-medium">Ana Clara Souza</span>.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Este projeto foi realizado no âmbito da disciplina de Direitos Humanos
          e Cidadania, sob orientação da{" "}
          <span className="font-medium">Dra. Ruth Cabral</span>. Nosso objetivo é
          explorar temas relacionados à segurança digital, golpes digitais, e
          práticas de segurança, promovendo conscientização e cidadania digital.
        </p>
      </section>
    </main>
  );
}
