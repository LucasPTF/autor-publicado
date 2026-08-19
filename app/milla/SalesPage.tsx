type Angle = "a1" | "a2" | "a3";

const heroByAngle: Record<Angle, { tag: string; title: string; body: string; cta: string }> = {
  a1: {
    tag: "DOR + NOVA SAÍDA",
    title: "Você não precisa perder mais dinheiro para descobrir se o digital funciona pra você.",
    body: "Você já tentou anúncio, criativo e estratégia. Talvez o problema não tenha sido sua capacidade — mas começar por uma rota que cobra enquanto você ainda está testando.",
    cta: "QUERO CONHECER ESSA OUTRA ROTA",
  },
  a2: {
    tag: "A VERDADE QUE NINGUÉM CONTA",
    title: "Tráfego pago não deveria ser o primeiro teste da sua capacidade de vender.",
    body: "Milla passou meses tentando anúncios sem o retorno que precisava. Quando mudou a forma de chegar até possíveis clientes, encontrou nas automações uma nova rota.",
    cta: "QUERO VER COMO FUNCIONA",
  },
  a3: {
    tag: "RESULTADO + QUEBRA DE OBJEÇÃO",
    title: "Saia com Robô de Leads + IA Funcionária + uma rota de Tráfego Livre.",
    body: "Em até 2 horas, entenda a estrutura, veja os robôs funcionando e aprenda como começar uma prospecção segmentada — sem tráfego pago, sem aparecer e sem conteúdo em massa.",
    cta: "QUERO ATIVAR O SISTEMA",
  },
};

const discoveries = [
  ["01", "Por que mudar a ordem", "Entenda por que tráfego pago pode funcionar e, ainda assim, não ser o melhor primeiro passo quando o caixa está curto."],
  ["02", "Como chegar ao público", "Veja como uma prospecção segmentada leva sua oferta até quem já pode precisar do produto — sem depender de alcance orgânico."],
  ["03", "Onde os robôs entram", "Descubra como automações assumem tarefas repetitivas para você focar em oferta, conversa e decisão."],
  ["04", "Como aplicar a rota", "Saia com as ferramentas iniciais e a lógica para começar a testar a estrutura no seu contexto."],
];

const faqs = [
  ["Preciso investir em tráfego pago?", "Não. A aula foi criada para mostrar uma estrutura inicial que não depende de verba em anúncios."],
  ["Preciso aparecer nas redes sociais?", "Não. A estratégia não exige que você produza conteúdo pessoal ou apareça para começar."],
  ["Nunca usei robôs. Vou conseguir?", "A proposta é trabalhar com ferramentas já preparadas e mostrar, de forma simples, onde cada uma entra na estrutura."],
  ["Só tenho celular. Consigo acompanhar?", "Você consegue entender e iniciar a rota pelo celular. Dependendo da automação, o computador pode oferecer mais conforto na operação."],
  ["Isso garante que eu vou vender?", "Não existe garantia de resultado. Você recebe estratégia, ferramentas e direção; o resultado depende de público, oferta e execução."],
  ["E se eu perceber que não é para mim?", "Você conta com 7 dias de garantia e pode solicitar a devolução integral dentro desse prazo."],
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export function SalesPage({ angle }: { angle: Angle }) {
  const hero = heroByAngle[angle];

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Ativação SD — início">
          <span className="brand-orbit">SD</span>
          <span><strong>ATIVAÇÃO</strong><small>SISTEMA DESTRAVE</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#experiencia">A experiência</a>
          <a href="#milla">Milla Souza</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="mini-cta" href="#oferta">ATIVAR AGORA <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker"><i /> AULA AO VIVO · ROBÔS · IA <span>{hero.tag}</span></p>
          <h1>{hero.title}</h1>
          <p className="hero-body">{hero.body}</p>
          <a className="primary-cta" href="#oferta"><span>{hero.cta}</span><Arrow /></a>
          <div className="hero-notes">
            <span><b>AO VIVO</b> até 2 horas</span>
            <span><b>ACESSO</b> replay por 3 dias</span>
            <span><b>INVESTIMENTO</b> a partir de R$ 27</span>
          </div>
        </div>
        <div className="hero-portrait">
          <img src="/milla/milla-hero.png" alt="Milla Souza em um estúdio de tecnologia e automação" />
          <div className="portrait-caption"><span>MILLA SOUZA</span><small>Especialista em automações</small></div>
        </div>
        <a className="scroll" href="#experiencia">DESCUBRA A ROTA <span>↓</span></a>
      </section>

      <section className="proof-ribbon" aria-label="Indicadores de experiência">
        <div className="proof-intro"><span>EXPERIÊNCIA<br />EM CAMPO</span><p>Não nasceu de uma teoria.<br />Nasceu de uma virada real.</p></div>
        <div className="proof-stat"><strong>3</strong><span>anos aplicando<br />a metodologia</span></div>
        <div className="proof-stat"><strong>+5 mil</strong><span>alunos usando<br />seus robôs</span></div>
        <div className="proof-stat"><strong>~R$ 1 mi</strong><span>faturamento digital<br />relatado por Milla</span></div>
      </section>

      <section className="shift section" id="experiencia">
        <div className="section-label"><span>01</span> UMA NOVA LEITURA</div>
        <div className="shift-heading">
          <h2>Talvez o problema<br />nunca tenha sido <em>você.</em></h2>
          <p>Você entrou no digital com esperança. Seguiu a rota que parecia óbvia. Comprou curso, montou criativo, subiu campanha — e viu dinheiro sair antes de entender o que precisava validar.</p>
        </div>
        <div className="before-after">
          <article className="before">
            <span>ANTES</span>
            <p>“Talvez eu não consiga.”</p>
            <small>Mais teste. Mais dinheiro saindo. A mesma dúvida voltando.</small>
          </article>
          <div className="switch-line"><i /><b>MUDE A ORDEM</b><i /></div>
          <article className="after">
            <span>DEPOIS</span>
            <p>“Agora eu sei o que testar primeiro.”</p>
            <small>Uma rota mais leve para aprender, aplicar e recuperar o controle.</small>
          </article>
        </div>
      </section>

      <section className="discover section">
        <div className="section-label light"><span>02</span> O QUE VOCÊ VAI DESCOBRIR</div>
        <div className="discover-head"><h2>Menos aposta.<br /><em>Mais sistema.</em></h2><p>Não é mais um curso para assistir e esquecer. É uma aula estruturada para enxergar, entender e ativar um primeiro movimento.</p></div>
        <div className="discover-cards">
          {discoveries.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <div className="node" aria-hidden="true"><i /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="system section">
        <div className="section-label"><span>03</span> ATIVAÇÃO SD</div>
        <div className="system-intro">
          <div><p className="eyebrow">O SISTEMA DESTRAVE</p><h2>Uma rota inicial que combina <em>Tráfego Livre + Robôs + IA.</em></h2></div>
          <p>A Ativação SD é uma aula ao vivo de até 2 horas para quem já tentou vender no digital e precisa de uma forma diferente de chegar a possíveis clientes — sem transformar anúncios em obrigação.</p>
        </div>
        <div className="pipeline" aria-label="O sistema em quatro movimentos">
          <article><span>01</span><b>PÚBLICO CERTO</b><small>Encontre quem já pode precisar da oferta.</small></article>
          <i aria-hidden="true">→</i>
          <article><span>02</span><b>ROBÔ DE LEADS</b><small>Apoie a busca e organização de contatos B2B.</small></article>
          <i aria-hidden="true">→</i>
          <article><span>03</span><b>OFERTA DIRETA</b><small>Leve uma mensagem relevante até o público.</small></article>
          <i aria-hidden="true">→</i>
          <article><span>04</span><b>OPORTUNIDADE</b><small>Transforme conversas em chances reais de venda.</small></article>
        </div>
      </section>

      <section className="deliverables section">
        <div className="deliverable-aside">
          <div className="section-label light"><span>04</span> O QUE VOCÊ RECEBE</div>
          <h2>Você não sai só com <em>informação.</em></h2>
          <p>Você sai com as primeiras ferramentas para enxergar o sistema funcionando e começar a aplicação.</p>
        </div>
        <div className="deliverable-list">
          <article><span>01</span><div><small>EXPERIÊNCIA PRINCIPAL</small><h3>Aula ao vivo de até 2 horas</h3><p>Entenda a rota completa, veja a demonstração e conecte público, oferta, automação e execução.</p></div><b>AO VIVO</b></article>
          <article><span>02</span><div><small>PRESENTE EXCLUSIVO</small><h3>Robô de Leads B2B</h3><p>Uma ferramenta inicial para apoiar a busca e a organização de possíveis clientes empresariais.</p></div><b>INCLUSO</b></article>
          <article><span>03</span><div><small>PRESENTE EXCLUSIVO</small><h3>IA Funcionária</h3><p>Uma inteligência treinada para apoiar tarefas da operação e reduzir parte do trabalho manual.</p></div><b>INCLUSO</b></article>
          <article><span>04</span><div><small>PARA REVER COM CALMA</small><h3>Replay por 3 dias</h3><p>Volte aos pontos mais importantes e organize os próximos passos no seu ritmo.</p></div><b>72 HORAS</b></article>
        </div>
      </section>

      <section className="milla section" id="milla">
        <div className="milla-photo">
          <img src="/milla/milla-apresentacao.png" alt="Retrato profissional de Milla Souza" />
          <div className="photo-badge"><strong>+20</strong><span>ANOS<br />EMPREENDENDO</span></div>
        </div>
        <div className="milla-story">
          <div className="section-label"><span>05</span> QUEM VAI TE GUIAR</div>
          <h2>Milla não ensina uma teoria.<br /><em>Ela viveu a virada.</em></h2>
          <p>Começou a empreender aos 11 anos. Aos 15, abriu a primeira loja e transformou aquele começo simples em três lojas, com mais de 10 funcionários.</p>
          <p>Quando decidiu migrar para o digital, entrou na mesma sequência que talvez você conheça: curso, criativo, campanha, mais teste e mais dinheiro saindo. Passou meses sem encontrar o retorno que precisava e chegou a pensar que o digital não era para ela.</p>
          <blockquote>“Quando comecei a trabalhar com os robôs, percebi que poderia vender com mais leveza — sem ver dinheiro saindo todos os dias.”</blockquote>
          <p>Hoje, depois de cerca de 3 anos aplicando a estratégia, Milla relata quase R$ 1 milhão faturado no digital e mais de 5 mil alunos utilizando seus robôs.</p>
        </div>
      </section>

      <section className="audience section">
        <div className="section-label light"><span>06</span> PARA QUEM É</div>
        <div className="audience-grid">
          <div><h2>Para quem ainda pensa:<br /><em>“uma hora vai dar certo para mim.”</em></h2><p>O sonho não morreu. O que acabou foi a disposição de continuar pagando caro para descobrir se, dessa vez, vai funcionar.</p></div>
          <div className="checks">
            <p><i>✓</i> Já tentou vender no digital</p>
            <p><i>✓</i> Investiu em tráfego e não encontrou frequência</p>
            <p><i>✓</i> Não quer aparecer nem criar conteúdo em massa</p>
            <p><i>✓</i> Quer usar IA, mas acha automação complicada</p>
            <p><i>✓</i> Precisa começar com mais controle e menos risco</p>
          </div>
        </div>
        <div className="not-for"><span>NÃO É PARA</span><p>Quem nunca ouviu falar do mercado de afiliados ou procura um botão mágico que garanta vendas sem oferta, direção e execução.</p></div>
      </section>

      <section className="offer section" id="oferta">
        <div className="offer-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="offer-copy">
          <div className="section-label"><span>07</span> OFERTA DE ATIVAÇÃO</div>
          <h2>Você já provou que consegue tentar.<br /><em>Não precisa provar que consegue perder mais dinheiro.</em></h2>
          <p>Ative uma nova rota, veja as ferramentas em ação e volte a olhar para o digital com clareza.</p>
          <div className="included"><span>Aula ao vivo</span><span>Robô de Leads B2B</span><span>IA Funcionária</span><span>Replay por 3 dias</span></div>
        </div>
        <div className="price-card">
          <p>LOTE DE ATIVAÇÃO</p>
          <small>INVESTIMENTO ÚNICO</small>
          <div className="price"><span>R$</span><strong>27</strong><sup>,00</sup></div>
          <div className="lot-progress"><i /><i /><i /></div>
          <div className="lots"><span><b>LOTE 01</b> R$ 27</span><span><b>LOTE 02</b> R$ 81</span><span><b>LOTE 03</b> R$ 162</span></div>
          <a className="primary-cta full" href="/obrigado"><span>ATIVAR O SISTEMA AGORA</span><Arrow /></a>
          <small className="secure">COMPRA SEGURA · 7 DIAS DE GARANTIA</small>
        </div>
      </section>

      <section className="guarantee section">
        <div className="guarantee-seal"><strong>7</strong><span>DIAS</span><i /></div>
        <div><div className="section-label"><span>08</span> RISCO REVERSO</div><h2>Teste a rota.<br /><em>A decisão continua sua.</em></h2><p>Você tem 7 dias de garantia. Se perceber que a Ativação SD não faz sentido para você, pode solicitar a devolução integral dentro desse prazo.</p></div>
      </section>

      <section className="faq section" id="duvidas">
        <div className="faq-title"><div className="section-label light"><span>09</span> DÚVIDAS FREQUENTES</div><h2>Antes de ativar,<br /><em>você precisa saber.</em></h2></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section">
        <div className="final-grid" aria-hidden="true" />
        <p className="eyebrow">A PRÓXIMA TENTATIVA PODE COMEÇAR DIFERENTE</p>
        <h2>Não abandone o sonho.<br /><em>Mude a estratégia.</em></h2>
        <p>Conheça a rota que combina Tráfego Livre, Robô de Leads e IA — sem transformar anúncios em condição para começar.</p>
        <a className="primary-cta" href="#oferta"><span>QUERO ATIVAR O SISTEMA</span><Arrow /></a>
      </section>

      <footer>
        <a className="wordmark" href="#top"><span className="brand-orbit">SD</span><span><strong>ATIVAÇÃO</strong><small>SISTEMA DESTRAVE</small></span></a>
        <p>© 2026 Ativação SD · Milla Souza. Todos os direitos reservados.</p>
        <p className="disclaimer">Resultados variam conforme público, oferta e execução. Esta página não promete renda ou vendas garantidas.</p>
      </footer>

      <a className="mobile-buy" href="#oferta"><span><small>LOTE ATUAL</small><b>R$ 27</b></span><strong>ATIVAR AGORA <Arrow /></strong></a>
    </main>
  );
}
