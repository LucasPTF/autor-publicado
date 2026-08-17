export type ProfileKey = "conscienciosidade" | "neuroticismo" | "abertura";

export const profiles = {
  conscienciosidade: {
    headline: "Construí e vendi 13 empresas até entender um detalhe que muda tudo: ninguém compra produto. Compram oferta. Em 2 noites ao vivo, você monta a sua.",
    subheadline: "O Workshop Código que Vende trata venda do jeito que você aprende: sistema, processo e prática. Você sai da segunda noite com a sua oferta esboçada e um plano de 30 dias pra primeira venda. Com Matheus Gomes, programador que construiu e vendeu 13 empresas.",
    cta: "QUERO MONTAR MINHA OFERTA · R$ 47",
    guarantee: "Garantia de entrega verificável: o programa das 2 noites está publicado nesta página, bloco a bloco. Se o conteúdo entregue não corresponder, devolvemos em 7 dias. Sem letra miúda.",
    proof: "13 empresas construídas e vendidas. M&A concluído em 2023. Apps e sistemas vendidos ao longo de uma década. Tudo verificável, nada de print de tela.",
  },
  neuroticismo: {
    headline: "Você não precisa de audiência, não precisa virar influencer e não precisa largar o CLT. Precisa de uma oferta certa pro cliente certo. Em 2 noites, você monta a sua.",
    subheadline: "O Workshop Código que Vende é o caminho seguro pra primeira renda própria: método passo a passo, exercício guiado ao vivo e plano de 30 dias que roda em paralelo ao seu emprego. Com Matheus Gomes, que vendeu 13 empresas começando com zero seguidores.",
    cta: "COMEÇAR SEM SALTO NO ESCURO · R$ 47",
    guarantee: "Garantia tripla: 7 dias de reembolso incondicional, replay de 48h se perder alguma noite, e suporte no grupo até o fim do evento. O risco é nosso.",
    proof: "As primeiras empresas do Matheus foram vendidas sem audiência nenhuma: oferta certa, na mesa do cliente certo. É o mesmo caminho que o workshop ensina, sem exposição e sem palco.",
  },
  abertura: {
    headline: "Parece loucura, mas a pior coisa que você pode fazer pelo seu produto agora é melhorar o código. Em 2 noites eu te mostro o que construir no lugar.",
    subheadline: "Com IA construindo por todo mundo, código virou commodity. O Workshop Código que Vende ensina o diferencial que sobrou: a oferta. Método de quem vendeu 13 empresas, ensinado do jeito que dev aprende: por estrutura.",
    cta: "QUERO ENTENDER O QUE FALTA · R$ 47",
    guarantee: "Garantia de perspectiva nova: se depois das 2 noites você não enxergar seu produto de um jeito que nunca tinha visto, devolvemos o valor. Direto assim.",
    proof: "A própria comunidade dev já chegou na conclusão: ‘o marketing é 90%, produto é 10%, as pessoas compram pela embalagem’. O workshop pega essa intuição solta e transforma em sistema aplicável.",
  },
} as const;

export const transformations = [
  ["Sei construir qualquer coisa, mas não sei pra quem vender.", "Uma oferta com público, promessa e preço definidos."],
  ["Cobro por hora e o cliente acha caro.", "Saber empacotar valor em vez de vender tempo."],
  ["Lancei e ninguém comprou.", "Entender qual das 4 alavancas da oferta estava quebrada."],
  ["Vender é coisa de picareta.", "Tratar venda como engenharia: com sistema, sem teatro."],
] as const;

export const discoveries = [
  ["As 4 alavancas da oferta", "Promessa, público, preço e experiência. Quando uma está quebrada, nada vende. Você vai diagnosticar as suas ao vivo."],
  ["O mapa dos 3 modelos", "Serviço produtizado, micro-SaaS e app à venda. Qual serve pro seu momento, com prós, contras e exemplos."],
  ["Precificação sem travar", "Por que você chuta preço baixo, o que ancora valor e o roteiro pra falar o número sem pedir desculpa."],
  ["A experiência do botão", "Como desenhar o caminho do primeiro contato ao pagamento pra o cliente dizer sim sem atrito."],
  ["O plano de 30 dias", "Lista dos 10 primeiros alvos, mensagem de abertura, proposta e follow-up. Sem depender de audiência."],
] as const;

export const truths = [
  ["Produto bom não se vende sozinho. Nunca vendeu.", "Você já viu produto pior que o seu faturando mais. Isso não é injustiça, é informação: quem vende é a oferta e a experiência. O produto sustenta a promessa depois que ela foi comprada."],
  ["Vendas não é dom. É engenharia.", "Tem sistema, processo e caso de teste. Você aprendeu coisas muito mais difíceis. A diferença é que ninguém apresentou venda como estrutura, só como teatro de coach. Aqui não tem teatro."],
  ["Você não precisa de audiência nem virar influencer.", "Precisa de uma oferta certa pra 10 pessoas certas. Matheus vendeu as primeiras empresas com zero seguidores. Audiência amplifica o que já vende; não conserta o que não vende."],
  ["Baixar o preço não conserta oferta errada.", "Só te empobrece mais rápido. Quando a oferta está certa, o preço vira consequência. Você vai ver isso acontecer ao vivo na segunda noite."],
] as const;

export const program = [
  {
    night: "NOITE 1",
    title: "O diagnóstico e a virada",
    blocks: [
      ["30 min", "Por que produto não vende", "As 4 alavancas e o erro de quem volta pro código. Casos reais das empresas do Matheus."],
      ["35 min", "Os 3 modelos de monetização", "Serviço produtizado, micro-SaaS e app à venda. O que serve pra CLT, freelancer e builder."],
      ["35 min", "Anatomia da oferta", "Promessa, público, preço e experiência. Duas ofertas reais desmontadas ao vivo."],
      ["20 min", "Perguntas ao vivo", "Perguntas e exercício de casa de 20 minutos pra Noite 2."],
    ],
  },
  {
    night: "NOITE 2",
    title: "A construção",
    blocks: [
      ["40 min", "Montando a sua oferta", "Exercício guiado: defina público, promessa e formato e saia com a oferta esboçada."],
      ["30 min", "Precificação por valor", "Roteiro pra definir e falar preço — e o que fazer quando pedem desconto."],
      ["30 min", "O plano de 30 dias", "10 alvos, mensagem, proposta e follow-up. O caminho até a primeira venda."],
      ["20 min", "Encerramento", "Próximos passos para colocar a oferta no mercado."],
    ],
  },
] as const;

export const audience = [
  "Dev CLT que quer criar uma renda própria sem largar o emprego no escuro.",
  "Freelancer que vende horas e quer empacotar valor.",
  "Builder com app ou SaaS pronto que ainda não encontrou compradores.",
  "Profissional de TI, dados, infra, QA ou produto que quer monetizar conhecimento.",
  "Quem constrói com IA e percebeu que executar ficou fácil — vender, não.",
] as const;

export const faqs = [
  ["Não tenho produto pronto. Serve pra mim?", "Serve. Um dos três caminhos é o serviço produtizado: você pode começar empacotando algo que já sabe fazer, sem construir software antes."],
  ["Sou CLT. Preciso largar o emprego?", "Não. O plano de 30 dias roda por lista e mensagem direta, em paralelo ao trabalho. A proposta é validar antes de qualquer salto."],
  ["Isso é curso de marketing digital?", "Não. É processo comercial para quem é técnico: público, promessa, preço, experiência, proposta e follow-up — sem palco e sem personagem."],
  ["Vai ter gravação?", "Sim. O replay fica disponível por 48 horas para você rever ou recuperar alguma parte."],
  ["Vou conseguir aplicar sozinho?", "Você não sai só com teoria. Na segunda noite, monta a sua oferta durante um exercício guiado e termina com ela esboçada."],
  ["Por que está tão barato?", "Porque o Lote 1 recompensa quem decide rápido. Depois, o ingresso sobe para R$ 67 e, nas últimas 48 horas, para R$ 97."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia. Manda uma mensagem e devolvemos o valor sem interrogatório."],
] as const;
