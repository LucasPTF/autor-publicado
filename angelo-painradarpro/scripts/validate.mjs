import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const routes = ['', 'a1', 'a2', 'a3', 'obrigado'];
const failures = [];

for (const route of routes) {
  const file = path.join(root, route, 'index.html');
  if (!fs.existsSync(file)) {
    failures.push(`${route || '/'}: arquivo ausente`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const label = route ? `/${route}/` : '/';
  if (!html.startsWith('<!doctype html>')) failures.push(`${label}: doctype ausente`);
  if (!html.includes('<html lang="pt-BR">')) failures.push(`${label}: idioma ausente`);
  if (!html.includes('<meta name="viewport"')) failures.push(`${label}: viewport ausente`);
  if (!html.includes('</body>\n</html>')) failures.push(`${label}: documento incompleto`);
  if (html.includes('{{') || html.includes('{%')) failures.push(`${label}: token de template não processado`);
}

for (const asset of ['assets/angelo-hero.png', 'assets/angelo-apresentacao.png']) {
  const file = path.join(root, asset);
  if (!fs.existsSync(file) || fs.statSync(file).size < 100_000) failures.push(`${asset}: imagem ausente ou inválida`);
}

for (const route of ['a1', 'a2', 'a3']) {
  const html = fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
  if (!html.includes('/assets/angelo-hero.png')) failures.push(`/${route}/: foto do hero ausente`);
  if (!html.includes('/assets/angelo-apresentacao.png')) failures.push(`/${route}/: foto da apresentação ausente`);
  if (!html.includes('painradar-wordmark')) failures.push(`/${route}/: marca do rodapé ausente`);
  if (html.includes('<img src="https://eltonitokazu.com/wp-content/uploads/2026/06/placeholder-1.png"')) {
    failures.push(`/${route}/: placeholder de imagem ainda presente`);
  }
  if (!html.includes('background-color:#00000000')) failures.push(`/${route}/: fundo transparente do FAQ ausente`);
  if (!html.includes('https://pay.hotmart.com/Y106158547L')) failures.push(`/${route}/: checkout da Hotmart ausente`);
  if (!html.includes("fbq('track', 'PageView')")) failures.push(`/${route}/: PageView do Meta Pixel ausente`);
}

const thanks = fs.readFileSync(path.join(root, 'obrigado', 'index.html'), 'utf8');
if (!thanks.includes('Seu acesso está confirmado.')) failures.push('/obrigado/: confirmação ausente');
if (thanks.includes('elementor-element-4de6ada6') || thanks.includes('elementor-element-3024fa50')) {
  failures.push('/obrigado/: imagem lateral ainda presente');
}
if (!thanks.includes('#proximos-passos')) failures.push('/obrigado/: âncora de próximos passos ausente');
if (!thanks.includes("fbq('track', 'Purchase'")) failures.push('/obrigado/: evento Purchase ausente');
if (!thanks.includes("currency: 'BRL', value: 97.00")) failures.push('/obrigado/: valor da compra incorreto');
if (/grupo/i.test(thanks)) failures.push('/obrigado/: referência a grupo ainda presente');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Validação estrutural concluída para 5 rotas.');
