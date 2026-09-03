import fs from 'node:fs';
import path from 'node:path';

const projectDir = path.resolve(import.meta.dirname, '..');
const sources = {
  a1: 'C:/Users/Lucas/Downloads/229) Angelo A1.json',
  a2: 'C:/Users/Lucas/Downloads/229) Angelo A2.json',
  a3: 'C:/Users/Lucas/Downloads/229) Angelo A3.json',
};

const localAssets = new Map([
  [
    'https://eltonitokazu.com/wp-content/uploads/2026/07/ChatGPT-Image-7_07_2026-16_37_02.png',
    '/assets/angelo-hero.png',
  ],
  [
    'https://eltonitokazu.com/wp-content/uploads/2026/07/Eufoto-03.png',
    '/assets/angelo-apresentacao.png',
  ],
]);

const localizeAsset = (url = '') => localAssets.get(url) || url;

const clone = (value) => JSON.parse(JSON.stringify(value));
const escapeAttr = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

function findNode(nodes, id) {
  for (const node of nodes || []) {
    if (node.id === id) return node;
    const nested = findNode(node.elements, id);
    if (nested) return nested;
  }
  return null;
}

function requireNode(page, id) {
  const node = findNode(page.content, id);
  if (!node) throw new Error(`Elemento ${id} não encontrado.`);
  return node;
}

function set(page, id, changes) {
  Object.assign(requireNode(page, id).settings, changes);
}

function appendCss(page, id, css) {
  const node = requireNode(page, id);
  node.settings._custom_css = `${node.settings._custom_css || ''}\n${css}`;
}

function makeThankYou(source) {
  const page = clone(source);
  page.title = 'PainRadarPro — Obrigado';

  const root = page.content[0];
  const main = requireNode(page, '6608367a');
  const footer = requireNode(page, '552494e2');
  const hero = requireNode(page, '1cecc57d');
  const nextSteps = requireNode(page, '70467176');
  const help = requireNode(page, '5d128ec1');
  const heroGrid = requireNode(page, 'b45dcca');
  const heroCopy = requireNode(page, '74661777');

  main.elements = [hero, nextSteps, help];
  root.elements = [main, footer];
  heroGrid.elements = [heroCopy];
  if (root.settings.padding_mobile) root.settings.padding_mobile.bottom = '0px';

  set(page, '1cecc57d', { _element_id: 'obrigado' });
  set(page, '558f0dd6', { title: 'COMPRA CONFIRMADA', align: 'center' });
  set(page, '7c40dd23', {
    title: 'Obrigado!<br><span class="wtxrw3dw">Seu acesso está confirmado.</span>',
    align: 'center',
  });
  set(page, 'd02dc25', {
    editor:
      '<p>Recebemos a confirmação da sua compra do PainRadarPro.</p><p>&nbsp;</p><p>Em alguns minutos, você receberá no e-mail usado no pagamento as instruções para acessar a ferramenta e começar seu primeiro radar.</p>',
    align: 'center',
  });
  set(page, '38da28b1', {
    text: 'VER PRÓXIMOS PASSOS',
    link: { url: '#proximos-passos', is_external: '' },
    align: 'center',
  });
  set(page, '27cbb577', {
    text_1: 'Pagamento aprovado',
    text_2: 'Acesso enviado por e-mail',
    text_3: 'Pronto para começar',
  });

  set(page, '70467176', { _element_id: 'proximos-passos' });
  set(page, '6b3f5de4', {
    text_1: 'COMECE POR AQUI',
    text_2: 'Seus próximos passos',
    text_3:
      'O acesso é simples. Siga esta sequência para configurar o PainRadarPro e transformar comentários reais em sinais de mercado.',
  });
  set(page, '5dc7a9dc', {
    text_1: 'Passo 01',
    text_2: 'Confira seu e-mail',
    text_3: 'Procure a mensagem com os dados de acesso no e-mail informado durante a compra.',
  });
  set(page, 'efe1d4b', {
    text_1: 'Passo 02',
    text_2: 'Entre na plataforma',
    text_3: 'Use as credenciais recebidas para abrir o PainRadarPro diretamente no navegador.',
  });
  set(page, 'd4e0f33', {
    text_1: 'Passo 03',
    text_2: 'Configure sua chave Gemini',
    text_3: 'Siga o tutorial incluído para criar sua chave gratuita e concluir a configuração inicial.',
  });
  set(page, '5e97dad9', {
    text_1: 'Passo 04',
    text_2: 'Faça seu primeiro radar',
    text_3: 'Cole a URL de um vídeo do seu nicho e comece a encontrar dores, desejos e ideias de produto.',
  });
  set(page, '67f58b1f', {
    text_1: 'E-mail',
    text_2: 'Configuração',
    text_3: 'Primeiro radar',
  });

  set(page, '5d128ec1', { _element_id: 'ajuda' });
  set(page, '1ddd1910', { text_1: 'PRECISA DE AJUDA?', text_2: 'Estamos com você' });
  set(page, '3f474a21', {
    text_1: 'Não encontrou o e-mail?',
    text_2: 'Confira o spam e a aba Promoções',
    text_3:
      'A entrega pode levar alguns minutos. Se o acesso ainda não aparecer, entre em contato pelo mesmo canal de suporte informado na compra.',
  });
  set(page, '552494e2', {
    text_1:
      'PainRadarPro. Ferramenta em português para pesquisa de mercado com comentários do YouTube e inteligência artificial.',
    text_2: '© 2026 PainRadarPro · Angelo',
  });

  appendCss(page, 'b45dcca', 'selector{display:block !important;max-width:100%;}');
  appendCss(
    page,
    '74661777',
    'selector{max-width:860px;margin-left:auto;margin-right:auto;text-align:center;}',
  );
  appendCss(
    page,
    'd02dc25',
    'selector{max-width:680px !important;margin-left:auto;margin-right:auto;text-align:center;}',
  );
  appendCss(page, '6578abe', 'selector{justify-content:center;}');
  appendCss(
    page,
    '27cbb577',
    'selector{margin-left:auto;margin-right:auto;text-align:center;}selector .pzkm4jhz{justify-content:center;}',
  );

  return page;
}

function cssUnit(value) {
  if (value == null || typeof value !== 'object' || value.size == null) return '';
  if (value.size === 'auto') return 'auto';
  const unit = value.unit === 'custom' ? '' : value.unit || 'px';
  return `${value.size}${unit}`;
}

function boxValue(value) {
  if (!value || typeof value !== 'object') return '';
  const sides = ['top', 'right', 'bottom', 'left'].map((side) => value[side]);
  return sides.every((side) => side !== undefined && side !== '') ? sides.join(' ') : '';
}

function typography(settings, prefix, selector, suffix = '') {
  const rules = [];
  const get = (key) => settings[`${prefix}${key}${suffix}`];
  const size = cssUnit(get('font_size'));
  const lineHeight = cssUnit(get('line_height'));
  const letterSpacing = cssUnit(get('letter_spacing'));
  if (get('font_family')) rules.push(`font-family:${get('font_family')}`);
  if (get('font_weight')) rules.push(`font-weight:${get('font_weight')}`);
  if (size) rules.push(`font-size:${size}`);
  if (lineHeight) rules.push(`line-height:${lineHeight}`);
  if (letterSpacing) rules.push(`letter-spacing:${letterSpacing}`);
  if (get('text_transform')) rules.push(`text-transform:${get('text_transform')}`);
  if (get('font_style')) rules.push(`font-style:${get('font_style')}`);
  return rules.length ? `${selector}{${rules.join(';')}}` : '';
}

function layoutRules(node, suffix = '') {
  const s = node.settings || {};
  const base = `.elementor-element-${node.id}`;
  const rules = [];
  const get = (key) => s[`${key}${suffix}`];
  const padding = boxValue(get(node.widgetType ? '_padding' : 'padding'));
  const margin = boxValue(get(node.widgetType ? '_margin' : 'margin'));
  const width = cssUnit(get(node.widgetType ? '_element_custom_width' : 'width'));
  const minHeight = cssUnit(get('min_height'));
  const radius = boxValue(get('border_radius'));
  const borderWidth = boxValue(get('border_width'));
  const gap = get('flex_gap');

  if (!suffix && node.elType === 'container') rules.push('display:flex');
  if (padding) rules.push(`padding:${padding}`);
  if (margin) rules.push(`margin:${margin}`);
  if (width) rules.push(`width:${width}`);
  if (minHeight) rules.push(`min-height:${minHeight}`);
  if (get('background_color')) rules.push(`background-color:${get('background_color')}`);
  if (get('background_image')?.url) rules.push(`background-image:url("${escapeAttr(get('background_image').url)}")`);
  if (get('flex_direction')) rules.push(`flex-direction:${get('flex_direction')}`);
  if (get('flex_justify_content')) rules.push(`justify-content:${get('flex_justify_content')}`);
  if (get('flex_align_items')) rules.push(`align-items:${get('flex_align_items')}`);
  if (get('flex_wrap') && get('flex_wrap') !== 'initial') rules.push(`flex-wrap:${get('flex_wrap')}`);
  if (gap?.row) rules.push(`row-gap:${gap.row}${gap.unit || 'px'}`);
  if (gap?.column) rules.push(`column-gap:${gap.column}${gap.unit || 'px'}`);
  if (get('z_index') !== undefined) rules.push(`z-index:${get('z_index')}`);
  if (get('border_border')) rules.push(`border-style:${get('border_border')}`);
  if (get('border_color')) rules.push(`border-color:${get('border_color')}`);
  if (borderWidth) rules.push(`border-width:${borderWidth}`);
  if (radius) rules.push(`border-radius:${radius}`);
  if (get('align')) rules.push(`text-align:${get('align')}`);

  const blocks = [];
  if (rules.length) blocks.push(`${base}{${rules.join(';')}}`);

  if (node.widgetType === 'heading') {
    const titleRules = [];
    if (get('title_color')) titleRules.push(`color:${get('title_color')}`);
    if (get('align')) titleRules.push(`text-align:${get('align')}`);
    const titleSelector = `${base} .elementor-heading-title`;
    if (titleRules.length) blocks.push(`${titleSelector}{${titleRules.join(';')}}`);
    blocks.push(typography(s, 'typography_', titleSelector, suffix));
  }

  if (node.widgetType === 'text-editor') {
    const textRules = [];
    if (get('text_color')) textRules.push(`color:${get('text_color')}`);
    if (get('align')) textRules.push(`text-align:${get('align')}`);
    const textSelector = `${base} .elementor-widget-container`;
    if (textRules.length) blocks.push(`${textSelector}{${textRules.join(';')}}`);
    blocks.push(typography(s, 'typography_', textSelector, suffix));
  }

  if (node.widgetType === 'button') {
    const buttonRules = [];
    const buttonPadding = boxValue(get('text_padding'));
    if (get('background_color')) buttonRules.push(`background-color:${get('background_color')}`);
    if (get('softlite_background_image_custom')) buttonRules.push(`background-image:${get('softlite_background_image_custom')}`);
    if (get('button_text_color')) buttonRules.push(`color:${get('button_text_color')}`);
    if (buttonPadding) buttonRules.push(`padding:${buttonPadding}`);
    if (radius) buttonRules.push(`border-radius:${radius}`);
    const buttonSelector = `${base} .elementor-button`;
    if (buttonRules.length) blocks.push(`${buttonSelector}{${buttonRules.join(';')}}`);
    blocks.push(typography(s, 'typography_', buttonSelector, suffix));
  }

  if (node.widgetType === 'softlite_dynamic_card_box') {
    for (let index = 1; index <= 6; index += 1) {
      const textSelector = `${base} .softlite-dynamic-card-box-text-${index}`;
      const color = get(`text_${index}_color`);
      if (color) blocks.push(`${textSelector}{color:${color}}`);
      blocks.push(typography(s, `text_${index}_typography_`, textSelector, suffix));
      const bg = get(`background_color_${index}`);
      if (bg) blocks.push(`${base} .softlite-dynamic-card-box-background-color-${index}{background-color:${bg}}`);
    }
    const buttonSelector = `${base} .softlite-dynamic-card-box-button`;
    if (get('button_text_color')) blocks.push(`${buttonSelector}{color:${get('button_text_color')}}`);
    blocks.push(typography(s, 'button_text_typography_', buttonSelector, suffix));
  }

  return blocks.filter(Boolean).join('\n');
}

function renderDynamic(node) {
  const s = node.settings;
  const link = s.link?.url || '#';
  const target = s.link?.is_external ? '_blank' : '';
  let icon = '';
  if (s.selected_icon_enable) {
    if (s.selected_icon_source === 'svg') icon = s.selected_icon_svg || '';
    else {
      const src = localizeAsset(s.selected_icon_image?.url || s.selected_icon_image_external_url || '');
      if (src) icon = `<img src="${escapeAttr(src)}" alt="" class="${escapeAttr(s.selected_icon_image_class || 'softlite-dynamic-icon')}" loading="lazy">`;
    }
  }

  let html = s.dynamic_template || '';
  html = html.replace(
    /data-softlite-card-box-link-\{%\s*if settings\.link\s*%\}href="\{\{\s*settings\.link\.url\s*\}\}"\{%\s*endif\s*%\}/g,
    link === '#' ? '' : `data-softlite-card-box-link-href="${escapeAttr(link)}"`,
  );
  html = html.replace(
    /\{\{\s*settings\.link_click\s*==\s*'box'\s*\?\s*settings\.link\.url\s*:\s*''\s*\}\}/g,
    s.link_click === 'box' ? escapeAttr(link) : '',
  );
  html = html.replace(/\{\{\s*settings\.link\.url\s*\}\}/g, escapeAttr(link));
  html = html.replace(/\{\{\s*settings\.link\.is_external\s*\?\s*'_blank'\s*:\s*''\s*\}\}/g, target);
  html = html.replace(/\{\{\s*iconDynamicHTML\|raw\s*\}\}/g, icon);
  html = html.replace(/\{\{\s*settings\.(text_[1-6]|button_text)\|raw\s*\}\}/g, (_, key) => s[key] || '');
  html = html.replace(/\{%[^%]*%\}/g, '');
  html = html.replace(/<!--\s*TODO:[\s\S]*?-->/g, '');
  return html;
}

function renderNode(node) {
  const s = node.settings || {};
  const id = s._element_id ? ` id="${escapeAttr(s._element_id)}"` : '';
  const classes = [
    'elementor-element',
    `elementor-element-${node.id}`,
    node.elType === 'container' ? 'e-con' : 'elementor-widget',
    node.widgetType ? `elementor-widget-${node.widgetType}` : '',
    s.css_classes || '',
  ]
    .filter(Boolean)
    .join(' ');

  if (node.elType === 'container') {
    return `<div${id} class="${classes}">${(node.elements || []).map(renderNode).join('')}</div>`;
  }

  let content = '';
  switch (node.widgetType) {
    case 'heading': {
      const tag = /^h[1-6]$/.test(s.header_size || '') ? s.header_size : 'h2';
      content = `<${tag} class="elementor-heading-title">${s.title || ''}</${tag}>`;
      break;
    }
    case 'text-editor':
      content = s.editor || '';
      break;
    case 'button': {
      const href = escapeAttr(s.link?.url || '#');
      const target = s.link?.is_external ? ' target="_blank" rel="noopener"' : '';
      content = `<a class="elementor-button" href="${href}"${target}><span class="elementor-button-content-wrapper"><span class="elementor-button-text">${s.text || ''}</span></span></a>`;
      break;
    }
    case 'softlite_dynamic_card_box':
      content = renderDynamic(node);
      break;
    case 'softlite_image': {
      const src = localizeAsset(s.image?.url || s.image_external_url || '');
      content = `<img src="${escapeAttr(src)}" alt="" class="softlite-image" loading="eager">`;
      break;
    }
    case 'html':
      content = s.html || '';
      break;
    default:
      content = (node.elements || []).map(renderNode).join('');
  }
  return `<div${id} class="${classes}"><div class="elementor-widget-container">${content}</div></div>`;
}

function collectNodes(nodes, output = []) {
  for (const node of nodes || []) {
    output.push(node);
    collectNodes(node.elements, output);
  }
  return output;
}

function renderCss(page) {
  const nodes = collectNodes(page.content);
  const base = `
*{box-sizing:border-box}
html{scroll-behavior:smooth;background:#050816}
body{margin:0;min-width:320px;background:#050816;color:#f8fafc}
img,svg{max-width:100%;height:auto}
a{color:inherit;text-decoration:none}
button,a{font:inherit}
h1,h2,h3,h4,h5,h6,p{margin-top:0}
.elementor-element{min-width:0}
.elementor-heading-title{margin:0;color:inherit;font:inherit}
.elementor-widget-container{min-width:0}
.elementor-button{display:inline-flex;align-items:center;justify-content:center;border:0}
.elementor-button-content-wrapper{display:flex;align-items:center;justify-content:center}
.softlite-dynamic-card-box{box-sizing:border-box}
`;
  const generated = nodes.map((node) => layoutRules(node)).join('\n');
  const custom = nodes
    .map((node) => (node.settings?._custom_css || '').replace(/\bselector\b/g, `.elementor-element-${node.id}`))
    .join('\n');
  const tablet = nodes.map((node) => layoutRules(node, '_tablet')).filter(Boolean).join('\n');
  const mobile = nodes.map((node) => layoutRules(node, '_mobile')).filter(Boolean).join('\n');
  return `${base}\n${generated}\n${custom}\n@media(max-width:1024px){${tablet}}\n@media(max-width:767px){${mobile}}`;
}

function renderPage(page, description) {
  const title = page.title || 'PainRadarPro';
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeAttr(title)}</title>
  <meta name="description" content="${escapeAttr(description)}">
  <style>${renderCss(page)}</style>
</head>
<body>
  <main>${page.content.map(renderNode).join('')}</main>
</body>
</html>\n`;
}

function writePage(route, page, description) {
  const dir = path.join(projectDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), renderPage(page, description), 'utf8');
}

const pages = Object.fromEntries(
  Object.entries(sources).map(([key, file]) => [key, JSON.parse(fs.readFileSync(file, 'utf8'))]),
);

writePage('a1', pages.a1, 'PainRadarPro — descubra o que vender com sinais reais do mercado.');
writePage('a2', pages.a2, 'PainRadarPro — encontre dores que o mercado já está revelando.');
writePage('a3', pages.a3, 'PainRadarPro — transforme comentários em produto, ticket e copy inicial.');
writePage('obrigado', makeThankYou(pages.a1), 'Compra confirmada. Veja os próximos passos para acessar o PainRadarPro.');
fs.copyFileSync(path.join(projectDir, 'a1', 'index.html'), path.join(projectDir, 'index.html'));

console.log('Páginas HTML geradas: /, /a1/, /a2/, /a3/ e /obrigado/.');
