export type HeroKey = "a1" | "a2" | "a3" | "a4" | "a5";

export const heroes: Record<HeroKey, { headline: readonly string[]; subheadline: string; cta: string }> = {
  a1: {
    headline: ["O seu crescimento não travou", "por falta. Travou", "por excesso."],
    subheadline:
      "Mais vendedor, mais tráfego, mais técnica. Sem uma base comercial, cada ‘mais’ só empilha caos. Nesta aula ao vivo, Walter Cincinatto mostra os 3 Passos que vêm antes da venda, e por onde o seu caixa volta a crescer.",
    cta: "QUERO MINHA VAGA NA AULA",
  },
  a2: {
    headline: ["Quer crescer?", "Para de fazer", "mais."],
    subheadline:
      "Mais vendedor, mais tráfego, mais técnica, mais desconto. Cada ‘mais’ que você adiciona está travando o seu caixa. Nesta aula ao vivo, Walter te explica o porquê e mostra o que fazer no lugar.",
    cta: "QUERO ENTENDER ISSO",
  },
  a3: {
    headline: ["Você trabalha o dobro.", "E a empresa tem", "o mesmo tamanho."],
    subheadline:
      "Esforço nunca foi plano de crescimento. Nesta aula ao vivo, Walter Cincinatto mostra o que realmente move o caixa de um negócio, e por onde começar pra sair da esteira.",
    cta: "QUERO DESTRAVAR ISSO",
  },
  a4: {
    headline: ["Você contratou vendedor,", "investiu em tráfego. E o caixa", "continua imprevisível."],
    subheadline:
      "O problema não é quem vende, é a base que vem antes da venda. Nesta aula ao vivo, Walter mostra os 3 Passos que fazem qualquer vendedor e qualquer lead finalmente renderem.",
    cta: "QUERO VER OS 3 PASSOS",
  },
  a5: {
    headline: ["A venda do seu negócio", "se decide em 3 passos. E nenhum", "deles é o primeiro contato."],
    subheadline:
      "É por isso que contratar mais gente não resolveu. Nesta aula ao vivo, Walter Cincinatto mostra quais são os 3 Passos e em qual deles a sua venda está vazando.",
    cta: "QUERO VER OS 3 PASSOS",
  },
};

export const transformations = [
  ["Hoje você adiciona coisa e cresce o mesmo.", "Depois, a empresa cresce sem você empilhar mais peso."],
  ["Hoje cada venda é uma tentativa nova.", "Depois, você segue uma ordem que se repete."],
  ["Hoje a venda mora na sua cabeça.", "Depois, ela vira da empresa e não trava quando você sai."],
  ["Hoje você fatura e não sobra.", "Depois, você vende construindo valor, não cortando preço."],
] as const;

export const discoveries = [
  "Por que ‘fazer mais’ parou de fazer a sua empresa crescer.",
  "Os 3 Passos que decidem a venda antes mesmo do primeiro contato com o cliente.",
  "Por que contratar vendedor e investir em tráfego não resolveu, e o que faltava embaixo.",
  "Como o cliente decide comprar muito antes de você tentar vender.",
  "O primeiro movimento pra tirar a venda das suas costas.",
] as const;

export const foundations = [
  ["01", "Base", "Crescer não é fazer mais. É instalar a base que faz o ‘mais’ finalmente funcionar."],
  ["02", "Ordem", "A sua venda trava antes da técnica, não nela."],
  ["03", "Decisão", "O cliente decide se compra antes de você abrir a boca pra vender."],
  ["04", "Direção", "Esforço não é plano de crescimento. Mais horas nunca foi estratégia."],
] as const;

export const classBlocks = [
  ["Bloco 1", "Cliente", "Quem realmente compra de você e por quê. É aqui que a maioria das vendas se ganha ou se perde, antes de qualquer contato com o cliente. Você sai sabendo o que estava enxergando errado."],
  ["Bloco 2", "Valor", "Como fazer o cliente perceber valor antes de você falar de preço. É o que tira a sua empresa da guerra de desconto."],
  ["Bloco 3", "Processo", "Como organizar a venda numa lógica que se repete, que não dependa de você nem da inspiração da equipe naquele dia."],
  ["Bloco 4", "A ordem na prática", "Por que a técnica só funciona depois dos 3 Passos, e qual o primeiro movimento pra aplicar já na próxima venda."],
] as const;

export const gifts = [
  ["Playbook de Vendas para Serviços", "Um roteiro simples pra saber o que fazer no dia a dia e gerar venda sem depender só de indicação."],
  ["Playbook de Vendas para Varejo", "Um guia pra organizar atendimento, contato e encantamento do cliente."],
  ["Exercício de Diagnóstico Comercial", "Pra identificar onde a sua venda está vazando e qual passo precisa vir primeiro."],
  ["Grupo de WhatsApp", "Pra acompanhar e tirar dúvida no calor da aula."],
] as const;

export const essentials = [
  "Porque mais um ano fazendo a mesma coisa é mais um ano no mesmo tamanho.",
  "Porque caixa que depende de sorte tira a sua paz.",
  "Porque o seu esforço merece virar crescimento, não só sobrevivência.",
  "E porque a sua empresa não pode depender de você estar com a corda toda todo santo dia.",
] as const;

export const audience = [
  "Pro empresário que trabalha muito e não vê a empresa crescer.",
  "Pra quem contratou vendedor ou investiu em tráfego e a venda continua dependendo dele.",
  "Pro dono que fatura bem e não vê sobrar no fim do mês.",
  "Pra quem vive de indicação e quer previsibilidade.",
  "Pra quem sabe que precisa de base e processo, mas não sabe por onde começar.",
] as const;

export const faqs = [
  ["Serve pra qualquer tipo de empresa?", "Serve. A lógica dos 3 Passos vale pra quem vende serviço, produto, atendimento ou solução, sozinho ou com equipe."],
  ["Eu já invisto em tráfego e tenho vendedor. Ainda faz sentido?", "Faz, e é justamente pra você. A aula mostra por que isso não destravou o crescimento e o que faltava na base pra esse investimento render."],
  ["É só mais uma aula de técnica de vendas?", "Não. O foco é o que vem ANTES da técnica. Sem base, técnica nenhuma sustenta o caixa, e você já sentiu isso na prática."],
  ["Preciso ter equipe de vendas?", "Não. Funciona pra quem vende sozinho e pra quem quer instalar a base antes de contratar mais alguém."],
  ["Vou conseguir aplicar com a rotina corrida?", "Sim. A aula foi pensada pra dono ocupado. É clareza simples e um primeiro passo prático, não mais complicação."],
  ["E se eu entrar e sentir que não é pra mim?", "Você tem 7 dias de garantia. Se não fizer sentido, pede o reembolso dentro do prazo, sem burocracia."],
] as const;
