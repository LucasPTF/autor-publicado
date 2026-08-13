"use client";

import { useEffect, useState } from "react";
import {
  bonuses,
  discoveries,
  faqs,
  methodSteps,
  offerItems,
  transformations,
  whatsappUrl,
} from "./content";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " light" : ""}`}><span aria-hidden="true">✦</span>{children}</p>;
}

function Cta({ children, compact = false }: { children: React.ReactNode; compact?: boolean }) {
  return (
    <a className={`cta${compact ? " compact" : ""}`} href={whatsappUrl} target="_blank" rel="noreferrer">
      <span>{children}</span><b aria-hidden="true">↗</b>
    </a>
  );
}

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowMobileCta(window.scrollY > window.innerHeight * 0.8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Autor Publicado em 1 Dia — início">
          <span className="brand-monogram">AP</span>
          <span>Autor Publicado<small>em 1 dia</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#metodo">O método</a>
          <a href="#alessandro">Quem conduz</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <Cta compact>Quero tirar meu livro do papel</Cta>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Workshop ao vivo • pelo Zoom</p>
            <h1>Seu livro não precisa continuar <em>preso na sua cabeça.</em></h1>
            <p className="hero-subtitle">Existe um caminho para tirá-lo do papel.</p>
            <p className="hero-description">Você já pesquisou, tentou começar e talvez até tenha escrito algumas páginas. O que faltou não foi talento — foi uma ordem clara para avançar até sentir que finalmente sabe o que fazer.</p>
            <Cta>Quero tirar meu livro do papel</Cta>
            <div className="hero-trust">
              <span><b>1 dia</b> de imersão prática</span>
              <span><b>Ao vivo</b> com orientação</span>
              <span><b>7 dias</b> de garantia</span>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
              <img src="/alessandro-hero.jpg" alt="Alessandro Moreira, professor e escritor" />
              <div className="hero-photo-label"><strong>Alessandro Moreira</strong><span>Professor • escritor • mentor</span></div>
            </div>
            <div className="book-card">
              <span>Método</span><strong>Livro<br />Pronto</strong><small>em 1 dia</small>
            </div>
            <p className="margin-note">Conhecimento<br />transformado<br />em legado.</p>
          </div>
        </div>
      </section>

      <section className="authority-strip" aria-label="Autoridade de Alessandro Moreira">
        <div className="shell">
          <p><strong>16+</strong><span>anos desenvolvendo pessoas e negócios</span></p>
          <i />
          <p><strong>10 mil+</strong><span>alunos impactados ao longo da carreira</span></p>
          <i />
          <p><strong>1 método</strong><span>para aprender enquanto executa</span></p>
        </div>
      </section>

      <section className="section transformation">
        <div className="shell">
          <Eyebrow>A transformação</Eyebrow>
          <div className="section-heading split-heading">
            <h2>Do projeto adiado<br />ao livro que <em>finalmente avança.</em></h2>
            <p>Você não precisa de mais uma lista de dicas. Precisa enxergar a sequência e executar cada etapa.</p>
          </div>
          <div className="transformation-list">
            {transformations.map(([beforeLabel, before, afterLabel, after], index) => (
              <article key={before}>
                <span className="transformation-index">0{index + 1}</span>
                <div><small>{beforeLabel}</small><p>{before}</p></div>
                <b aria-hidden="true">→</b>
                <div className="after"><small>{afterLabel}</small><p>{after}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section discoveries" id="metodo">
        <div className="shell">
          <Eyebrow>O que você vai descobrir</Eyebrow>
          <div className="section-heading"><h2>Clareza para transformar conhecimento em <em>um livro de verdade.</em></h2></div>
          <div className="discovery-grid">
            {discoveries.map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing" id="inscricao">
        <div className="shell pricing-layout">
          <div className="pricing-copy">
            <Eyebrow light>Lote atual</Eyebrow>
            <h2>O melhor momento para começar é <em>antes do próximo lote.</em></h2>
            <p>As vagas são limitadas porque a condução acontece ao vivo pelo Zoom. O valor muda conforme os lotes avançam.</p>
            <div className="lot-list">
              <span className="active"><small>Lote atual</small><b>R$ 97</b></span>
              <span><small>Lote 2</small><b>R$ 291</b></span>
              <span><small>Lote 3</small><b>R$ 582</b></span>
            </div>
          </div>
          <article className="enrollment-card">
            <span className="availability"><i /> Inscrições no lote atual</span>
            <h3>Workshop Autor<br />Publicado em 1 Dia</h3>
            <p className="price-label">Investimento</p>
            <div className="price"><small>R$</small><strong>97</strong><span>,00</span></div>
            <p className="payment-note">Pagamento único • acesso à imersão e aos bônus</p>
            <Cta>Quero garantir minha vaga</Cta>
            <small className="card-footnote">Você será direcionado ao WhatsApp da equipe para concluir sua inscrição.</small>
          </article>
        </div>
      </section>

      <section className="section mentor" id="alessandro">
        <div className="shell mentor-grid">
          <div className="mentor-photo">
            <img src="/alessandro-apresentacao.jpg" alt="Alessandro Moreira, professor, escritor e empresário" />
            <span className="photo-caption">São Paulo • Brasil</span>
          </div>
          <div className="mentor-copy">
            <Eyebrow>Quem conduz</Eyebrow>
            <h2>Apresentamos<br /><em>Alessandro Moreira.</em></h2>
            <p>Alessandro nasceu e cresceu na periferia de São Paulo e começou a trabalhar ainda criança.</p>
            <p>Com estudo, disciplina e prática, construiu uma trajetória como professor, escritor, empresário, consultor e palestrante. São mais de 16 anos atuando com desenvolvimento de pessoas e negócios, incluindo sua atuação como professor do Centro Paula Souza.</p>
            <p>Ao longo da carreira, impactou mais de 10 mil alunos e ajudou profissionais a transformarem conhecimento em crescimento, posicionamento e autoridade.</p>
            <p>Hoje, ensina pessoas que sempre sonharam em escrever um livro a seguirem um processo claro até a publicação da própria obra.</p>
            <a className="instagram" href="https://www.instagram.com/ale.moreiraoficial" target="_blank" rel="noreferrer">@ale.moreiraoficial <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="section belief-break">
        <div className="shell belief-grid">
          <div>
            <Eyebrow light>Antes de continuar</Eyebrow>
            <h2>As primeiras coisas que você precisa <em>entender.</em></h2>
          </div>
          <div className="belief-list">
            <p><span>01</span>Você não precisa esperar o momento perfeito para começar.</p>
            <p><span>02</span>Você não precisa ser escritor profissional para publicar o primeiro livro.</p>
            <p><span>03</span>Você não precisa descobrir tudo sozinho.</p>
            <blockquote>O que trava a maioria das pessoas não é falta de conhecimento. <strong>É falta de processo.</strong></blockquote>
          </div>
        </div>
      </section>

      <section className="section immersion">
        <div className="shell immersion-heading">
          <Eyebrow>O que é</Eyebrow>
          <h2>Uma imersão para transformar intenção em <em>execução.</em></h2>
          <p>O Workshop Autor Publicado em 1 Dia é uma imersão ao vivo pelo Zoom para criar, organizar, revisar, diagramar e publicar ou encaminhar seu primeiro livro digital com orientação prática.</p>
        </div>
        <div className="shell phase-grid">
          <article><span>Fase 01</span><h3>Tirar a ideia da cabeça</h3><p>Transforme seu conhecimento em estrutura, capítulos e uma direção clara para escrever.</p></article>
          <article><span>Fase 02</span><h3>Preparar para publicação</h3><p>Revise, crie a capa, faça a diagramação e avance no processo de publicação digital.</p></article>
        </div>
        <div className="shell method-track">
          {methodSteps.map(([number, title]) => <span key={number}><small>{number}</small>{title}</span>)}
        </div>
      </section>

      <section className="section bonuses">
        <div className="shell">
          <Eyebrow>Presentes exclusivos</Eyebrow>
          <div className="section-heading split-heading"><h2>Você não começa<br /><em>de uma página em branco.</em></h2><p>Três ferramentas práticas para acompanhar a imersão e continuar avançando depois dela.</p></div>
          <div className="bonus-grid">
            {bonuses.map(([label, title, text]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{text}</p><b>Incluso</b></article>)}
          </div>
        </div>
      </section>

      <section className="section urgency-copy">
        <div className="shell urgency-grid">
          <div className="giant-letter" aria-hidden="true">A</div>
          <div>
            <Eyebrow light>Por que isso é essencial</Eyebrow>
            <h2>Cada mês sem publicar mantém seu <em>conhecimento invisível.</em></h2>
            <p>Enquanto você espera estar pronto, outras pessoas ocupam o espaço de autoridade que poderia ser seu.</p>
            <p>Um livro não é só um arquivo. É uma forma de mostrar ao mercado que você tem algo a dizer.</p>
            <strong>E o primeiro passo não precisa ser perfeito. Precisa ser claro.</strong>
          </div>
        </div>
      </section>

      <section className="section audience">
        <div className="shell">
          <Eyebrow>Para quem é</Eyebrow>
          <div className="audience-layout">
            <div><h2>Para quem tem algo a dizer — e quer finalmente <em>colocar no mundo.</em></h2></div>
            <div className="audience-cards">
              <article className="for-you"><h3>Este workshop é para você se...</h3><ul><li>É especialista e quer transformar conhecimento em livro.</li><li>É profissional liberal e deseja fortalecer autoridade.</li><li>É professor, consultor, mentor ou empresário e quer publicar a primeira obra.</li><li>Sempre sonhou em escrever, mas nunca soube por onde começar.</li></ul></article>
              <article><h3>Não é para quem...</h3><ul><li>Procura uma fórmula mágica sem executar.</li><li>Não quer colocar a mão na massa durante a imersão.</li><li>Espera perfeição antes de dar o primeiro passo.</li></ul></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section difference">
        <div className="shell difference-grid">
          <div><Eyebrow light>O diferencial</Eyebrow><h2>Você aprende<br /><em>executando.</em></h2></div>
          <div>
            <p>O método Livro Pronto em 1 Dia não entrega só teoria. Ele conduz você por uma sequência prática:</p>
            <div className="difference-flow">{["Ideia", "Estrutura", "Conteúdo", "Revisão", "Capa", "Diagramação", "Publicação"].map((item, index) => <span key={item}><small>0{index + 1}</small>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section envisioned-result">
        <div className="shell result-card">
          <p className="quote-mark" aria-hidden="true">“</p>
          <div>
            <Eyebrow>A transformação em prática</Eyebrow>
            <h2>Imagine terminar a imersão com os capítulos organizados e o caminho da publicação finalmente claro.</h2>
            <p>É essa virada — sair da ideia sem direção para um projeto concreto — que o workshop foi desenhado para conduzir.</p>
          </div>
        </div>
      </section>

      <section className="section offer" id="oferta">
        <div className="shell offer-grid">
          <div className="offer-copy">
            <Eyebrow light>Oferta especial</Eyebrow>
            <h2>Tudo o que você precisa para dar o <em>primeiro passo.</em></h2>
            <div className="offer-items">{offerItems.map((item) => <span key={item}><i>✓</i>{item}</span>)}</div>
          </div>
          <article className="offer-card">
            <p>Lote atual</p>
            <h3>Autor Publicado<br />em 1 Dia</h3>
            <div className="price"><small>R$</small><strong>97</strong><span>,00</span></div>
            <p className="offer-urgency">Vagas limitadas pela condução ao vivo no Zoom.</p>
            <Cta>Quero publicar meu primeiro livro</Cta>
            <div className="secure-note"><span>◇</span><p><strong>Compra protegida</strong><small>7 dias de garantia incondicional</small></p></div>
          </article>
        </div>
      </section>

      <section className="section guarantee">
        <div className="shell guarantee-card">
          <div className="guarantee-seal"><strong>7</strong><span>dias</span></div>
          <div><Eyebrow>Sua decisão protegida</Eyebrow><h2>Você entra com <em>garantia incondicional.</em></h2><p>Se perceber que o workshop não é para você, pode solicitar a devolução dentro de 7 dias. Simples assim.</p></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="shell faq-layout">
          <div><Eyebrow>Perguntas frequentes</Eyebrow><h2>O que você precisa saber <em>antes de entrar.</em></h2><p>Se sua dúvida não estiver aqui, fale com a equipe pelo botão de inscrição.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return <article key={question} className={isOpen ? "open" : ""}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{question}</span><b aria-hidden="true">+</b></button><div className="faq-answer"><p>{answer}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-lines" aria-hidden="true" />
        <div className="shell">
          <Eyebrow light>Seu próximo capítulo começa aqui</Eyebrow>
          <h2>O seu livro não precisa continuar parado por <em>mais um ano.</em></h2>
          <p>Se você tem conhecimento, história ou experiência para compartilhar, o próximo passo é seguir um processo claro.</p>
          <Cta>Quero publicar meu primeiro livro</Cta>
          <small>Workshop ao vivo • bônus inclusos • garantia de 7 dias</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand" href="#inicio"><span className="brand-monogram">AP</span><span>Autor Publicado<small>em 1 dia</small></span></a>
          <p>Workshop educacional ao vivo com Alessandro Moreira. O avanço até a publicação depende da participação, do estágio do projeto e das etapas de aprovação da plataforma.</p>
          <span>© 2026 Alessandro Moreira</span>
        </div>
      </footer>

      <div className={`mobile-sticky${showMobileCta ? " visible" : ""}`}>
        <span>Lote atual <strong>R$ 97</strong></span><Cta compact>Garantir minha vaga</Cta>
      </div>
    </main>
  );
}
