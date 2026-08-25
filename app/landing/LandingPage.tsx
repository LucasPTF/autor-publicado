import {
  audience,
  classBlocks,
  discoveries,
  essentials,
  faqs,
  foundations,
  gifts,
  heroes,
  transformations,
  type HeroKey,
} from "./content";

const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#inscricao";

function Cta({ children, source, light = false }: { children: React.ReactNode; source: string; light?: boolean }) {
  return (
    <a className={`cta${light ? " cta-light" : ""}`} href={checkoutUrl} data-source={source}>
      <span>{children}</span>
      <b aria-hidden="true">↗</b>
    </a>
  );
}

function Label({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}

export function LandingPage({ hero }: { hero: HeroKey }) {
  const heroCopy = heroes[hero];
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: "Vendedor Memorável — Aula ao vivo",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    description: "Aula ao vivo com Walter Cincinatto sobre os 3 Passos Antes da Venda.",
    performer: { "@type": "Person", name: "Walter Cincinatto" },
    offers: { "@type": "Offer", price: "29.90", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
  };

  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Vendedor Memorável — início">
          <span className="brand-mark">V</span>
          <span><strong>VENDEDOR</strong><small>MEMORÁVEL</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#metodo">O método</a>
          <a href="#programa">A aula</a>
          <a href="#walter">Walter</a>
        </nav>
        <Cta source={`header-${hero}`}>GARANTIR VAGA</Cta>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-monogram" aria-hidden="true"><span>W</span><span>C</span></div>
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="live"><i /> AULA 100% AO VIVO <span>VAGAS LIMITADAS</span></p>
            <h1>{heroCopy.headline}</h1>
            <p className="hero-sub">{heroCopy.subheadline}</p>
            <Cta source={`hero-${hero}`}>{heroCopy.cta}</Cta>
            <p className="support-line">Aula ao vivo com Walter Cincinatto. Vagas limitadas.</p>
          </div>
          <aside className="hero-card" aria-label="Os 3 Passos Antes da Venda">
            <p>OS 3 PASSOS<br />ANTES DA VENDA</p>
            <ol><li><span>01</span> Cliente</li><li><span>02</span> Valor</li><li><span>03</span> Processo</li></ol>
            <small>MÉTODO VENCER</small>
          </aside>
        </div>
        <div className="shell hero-seals">
          <span>Começou vendendo na rua</span>
          <span>Aula 100% ao vivo</span>
          <span>Garantia de 7 dias</span>
          <span>Playbooks inclusos</span>
        </div>
      </section>

      <section className="manifesto section-dark">
        <div className="shell manifesto-grid">
          <Label number="01">A TRANSFORMAÇÃO</Label>
          <div>
            <p className="manifesto-lead">Você não precisa carregar mais peso.<br /><em>Precisa de uma base que sustente o crescimento.</em></p>
            <div className="transformation-list">
              {transformations.map(([before, after], index) => (
                <article key={before}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{before}</p><b aria-hidden="true">→</b><p>{after}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="discover section-paper">
        <div className="shell">
          <Label number="02">O QUE VOCÊ VAI DESCOBRIR</Label>
          <div className="section-heading">
            <h2>O que decide a venda acontece <em>antes</em> da técnica.</h2>
            <p>Você vai enxergar por que o que já tentou não sustentou o caixa e qual é a ordem que vem antes de vender.</p>
          </div>
          <div className="discover-grid">
            {discoveries.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}
          </div>
        </div>
      </section>

      <section className="lots-strip" id="lotes">
        <div className="shell lots-grid">
          <div><p>1º LOTE <span>ATUAL</span></p><strong>R$ 29,90</strong><small>Aula ao vivo · Playbooks + Diagnóstico · Grupo de WhatsApp</small></div>
          <div><p>2º LOTE</p><strong>R$ 97,00</strong><small>Entrada após o 1º lote</small></div>
          <div><p>3º LOTE</p><strong>R$ 197,00</strong><small>Últimas vagas · Lote final</small></div>
          <Cta source="lotes" light>GARANTIR MINHA VAGA NO 1º LOTE</Cta>
        </div>
      </section>

      <section className="expert section-ink" id="walter">
        <div className="expert-type" aria-hidden="true">WALTER</div>
        <div className="shell expert-grid">
          <div className="expert-signature"><span>WC</span><small>VENDAS<br />NO CORPO.<br />NA PRÁTICA.</small></div>
          <div>
            <Label number="03">APRESENTAMOS: WALTER CINCINATTO</Label>
            <h2>Autoridade de chão.<br /><em>Não de palco.</em></h2>
            <p>Walter começou vendendo na rua. Aprendeu vendas no corpo, no dia a dia, no olho no olho.</p>
            <p>Depois empreendeu. Cresceu. E quase quebrou por depender de poucos clientes grandes.</p>
            <p>Foi ali que veio a virada. Ele saiu da dependência, foi pro varejo e passou a entender como as pessoas realmente compram. Não no discurso bonito, na prática.</p>
            <p>Daí nasceu o que sustenta o Método VENCER: o que faz uma empresa crescer não é fazer mais. É a base que vem antes da venda.</p>
            <Cta source="walter">QUERO APRENDER COM O WALTER</Cta>
          </div>
        </div>
      </section>

      <section className="expanded section-paper">
        <div className="shell narrow-copy">
          <Label number="04">A TRANSFORMAÇÃO</Label>
          <h2>Você se mata.<br /><em>Mas esforço não é plano de crescimento.</em></h2>
          <div className="editorial-copy">
            <p>Você trabalha mais a cada ano. Chega cedo, sai tarde, resolve tudo.</p>
            <p>E quando olha pra trás, a empresa tem quase o mesmo tamanho de antes.</p>
            <p>Não é falta de esforço. Você se mata. O problema é que esforço não é plano de crescimento. Dá pra remar a vida inteira e continuar parado, se o barco está furado.</p>
            <p>E o furo quase sempre está no mesmo lugar. Na venda.</p>
            <p>O que faz a empresa crescer de verdade é a venda parar de depender da sorte. Sem isso, todo o resto do seu trabalho não chega no caixa.</p>
          </div>
          <blockquote>Em vez de adicionar mais, o Método VENCER instala a base. Primeiro você entende o cliente. Depois constrói valor. Depois organiza o processo. Aí, e só aí, a técnica funciona.</blockquote>
        </div>
      </section>

      <section className="foundations section-accent" id="metodo">
        <div className="shell">
          <Label number="05">O QUE VOCÊ PRECISA ENTENDER PRIMEIRO</Label>
          <div className="section-heading light-heading"><h2>Quatro verdades que desmontam o jeito antigo de crescer.</h2><p>Quando a base entra, o esforço para de se perder antes de chegar ao caixa.</p></div>
          <div className="foundation-grid">{foundations.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="class-intro section-paper">
        <div className="shell class-intro-grid">
          <div><Label number="06">A AULA VENDEDOR MEMORÁVEL</Label><h2>Não é uma lista de técnicas soltas.</h2></div>
          <div><p>É uma aula ao vivo pro dono de negócio que cansou de empilhar coisa e ver a empresa parada no mesmo lugar.</p><p>Em poucas horas, você entende por que o seu esforço não está virando crescimento e aprende os 3 Passos que vêm antes da venda. A base que faz tudo que você já tem finalmente funcionar.</p><p>É ao vivo, com espaço pra tirar dúvida. Não é aula gravada.</p></div>
        </div>
      </section>

      <section className="program section-dark" id="programa">
        <div className="shell">
          <Label number="07">DURANTE A AULA AO VIVO</Label>
          <div className="section-heading light-heading"><h2>Da origem do vazamento ao primeiro movimento prático.</h2><p>Quatro blocos, uma sequência e clareza para aplicar já na próxima venda.</p></div>
          <div className="program-list">{classBlocks.map(([block, title, text], index) => <article key={block}><span>{block}</span><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="gifts section-paper">
        <div className="shell gifts-grid">
          <div className="gifts-copy"><Label number="08">PRESENTES EXCLUSIVOS</Label><h2>A aula termina.<br /><em>O material fica.</em></h2><p>Ferramentas simples para continuar organizando a venda depois do encontro ao vivo.</p></div>
          <div className="gift-list">{gifts.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><b>INCLUSO</b></article>)}</div>
        </div>
      </section>

      <section className="essential section-ink">
        <div className="shell essential-grid">
          <div><Label number="09">POR QUE ISSO É ESSENCIAL</Label><h2>O custo de continuar igual não aparece numa linha da planilha.</h2></div>
          <div className="essential-list">{essentials.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div>
        </div>
        <div className="shell essential-cta"><Cta source="essencial">QUERO PARAR DE EMPILHAR E COMEÇAR A CRESCER</Cta></div>
      </section>

      <section className="audience section-paper">
        <div className="shell audience-grid">
          <div><Label number="10">PARA QUEM FAZ SENTIDO</Label><h2>Pra quem cansou de ser o motor e o freio da própria empresa.</h2><p className="not-for"><strong>Não é pra quem</strong> quer fórmula mágica. Nem pra quem quer assistir e não aplicar nada.</p></div>
          <div className="check-list">{audience.map((item) => <p key={item}><span aria-hidden="true">✓</span>{item}</p>)}</div>
        </div>
      </section>

      <section className="difference section-accent">
        <div className="shell difference-grid">
          <div><Label number="11">UM DIFERENCIAL ÚNICO</Label><h2>A fundação vem antes do telhado.</h2></div>
          <div><p>O Método VENCER não começa pelo script, nem manda você fazer mais.</p><p>Começa pela base. São os 3 Passos Antes da Venda: primeiro o cliente, depois o valor, depois o processo. A técnica é a quarta coisa, e é por isso que ela sozinha nunca resolveu o seu caixa.</p><div className="method-order"><span>CLIENTE</span><i>→</i><span>VALOR</span><i>→</i><span>PROCESSO</span><i>→</i><span>TÉCNICA</span></div></div>
        </div>
      </section>

      <section className="faq section-paper" id="faq">
        <div className="shell faq-grid">
          <div><Label number="12">DÚVIDAS FREQUENTES</Label><h2>Antes de garantir a sua vaga.</h2><div className="guarantee-seal"><strong>7</strong><span>DIAS DE<br />GARANTIA</span></div></div>
          <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="closing" id="inscricao">
        <div className="closing-grid" aria-hidden="true" />
        <div className="shell closing-layout">
          <div><p className="live"><i /> 1º LOTE ABERTO</p><h2>Chega de empilhar.<br /><em>Comece pela base.</em></h2><p>Você entra, assiste e sente se faz sentido pra você. Se não fizer, pede o reembolso dentro de 7 dias, sem burocracia.</p></div>
          <div className="price-card"><small>Vendedor Memorável · Aula ao vivo</small><p>1º LOTE</p><div className="price"><span>R$</span><strong>29</strong><sup>,90</sup></div><ul><li>Aula 100% ao vivo</li><li>Playbooks de Vendas</li><li>Diagnóstico Comercial</li><li>Grupo de WhatsApp</li><li>Garantia de 7 dias</li></ul><Cta source={`final-${hero}`} light>QUERO MINHA VAGA NA AULA</Cta></div>
        </div>
      </section>

      <footer><div className="shell"><a className="brand" href="#top"><span className="brand-mark">V</span><span><strong>VENDEDOR</strong><small>MEMORÁVEL</small></span></a><p>Aula online com Walter Cincinatto · © 2026</p><p>Resultados dependem da aplicação individual do conteúdo.</p></div></footer>
    </main>
  );
}
