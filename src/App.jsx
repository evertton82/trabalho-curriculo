import Cabecalho from "./components/cabecalho";
import Secao from "./components/secao";

function App() {
  return (
    <div className="border col-5 container">
      <Cabecalho className="text-center" titulo={"Éverton Coelho"}/>

      <Secao title="Sobre">
        <p>
         Sou estudante de Sistemas de Informação e atuo como Product Owner, liderando projetos voltados para integrações de APIs REST, gestão estratégica de backlog e entrega de soluções inovadoras e de alto impacto.
         Minha principal responsabilidade é atuar como ponte entre stakeholders e equipes de desenvolvimento,
         utilizando metodologias ágeis para assegurar entregas alinhadas aos objetivos do negócio, maximizando eficiência e minimizando os impactos.
        </p>
      </Secao>

      <Secao title="Experiência Profissional">
        <p><strong>Product Owner</strong> - Processa Sistemas (Janeiro 2012 - Atual)</p>
        <li> Gestão e Priorização de Backlog: Defino, organizo e priorizo os itens do backlog para maximizar o valor entregue ao negócio.</li>
        <li>Alinhamento com Stakeholders: Sirvo como elo entre as partes interessadas e o time de desenvolvimento, garantindo clareza nos requisitos e objetivos.</li>
        <li>Acompanhamento de Entregas: Monitoro o progresso do time, assegurando que os requisitos e critérios de aceite sejam cumpridos.</li>
        <li>Definição de Valor: Alinho as prioridades e metas do produto às necessidades do negócio e dos clientes, sempre buscando maior impacto e eficiência.</li>
        <li>Critérios de Aceite e Validação: Colaboro na definição de critérios claros e acompanho a validação das entregas para garantir conformidade e qualidade.</li>
      </Secao>

      <Secao title="Formação Acadêmica">
        <p><strong>Bacharelado - Sistemas de Informação</strong></p>
        <p>UniAcademia - Centro Universitário (2024 - 2028)</p>
      </Secao>

      <Secao title="Habilidades e Competências">
        <ul>
          <li>Product Owner</li>
          <li>Analista de Negócios</li>
          <li>Analista de Implantação</li>
        </ul>
      </Secao>

      <Secao title="Informações Adicionais">
        <p>Idiomas: Português (Nativo), Inglês (Básico)</p>
      </Secao>
    </div>
  );
}

export default App;