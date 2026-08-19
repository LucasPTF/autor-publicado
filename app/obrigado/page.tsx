export default function ThankYouPage() {
  return (
    <main className="thankyou">
      <div className="thankyou-grid" aria-hidden="true" />
      <header>
        <a className="wordmark" href="/a1"><span className="brand-orbit">SD</span><span><strong>ATIVAÇÃO</strong><small>SISTEMA DESTRAVE</small></span></a>
        <span>INSCRIÇÃO CONFIRMADA</span>
      </header>
      <section className="thankyou-hero">
        <div className="success-ring"><i>✓</i></div>
        <p className="kicker"><i /> SISTEMA ATIVADO</p>
        <h1>Parabéns.<br /><em>Sua nova rota começa agora.</em></h1>
        <p>O pagamento foi confirmado. Para não perder nenhum aviso, siga os três passos abaixo e entre agora no grupo oficial da Ativação SD.</p>
      </section>
      <section className="next-steps">
        <article><span>01</span><div><small>VERIFIQUE SEU E-MAIL</small><h2>Acesse a área de membros</h2><p>A Kiwify enviará os dados de acesso para o e-mail usado na compra. Confira também as pastas de spam e promoções.</p></div></article>
        <article className="featured"><span>02</span><div><small>PASSO MAIS IMPORTANTE</small><h2>Entre no grupo oficial</h2><p>É no WhatsApp que você receberá data, horário, link da aula, lembretes e orientações importantes.</p><a href="https://chat.whatsapp.com/EvJR8r7KGOr6nTXjVmK9sT" target="_blank" rel="noreferrer">ENTRAR NO GRUPO AGORA <span aria-hidden="true">↗</span></a></div></article>
        <article><span>03</span><div><small>PREPARE-SE</small><h2>Salve o contato e acompanhe os avisos</h2><p>Confie apenas nas mensagens enviadas pelos administradores e reserve até 2 horas para viver a experiência ao vivo.</p></div></article>
      </section>
      <div className="thankyou-note"><span>IMPORTANTE</span><p>Se o e-mail não chegar em alguns minutos, acesse sua conta da Kiwify com o mesmo endereço usado na compra.</p></div>
      <footer><p>© 2026 Ativação SD · Milla Souza.</p><a href="/a1">Voltar para a página</a></footer>
    </main>
  );
}
