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

const thanks = fs.readFileSync(path.join(root, 'obrigado', 'index.html'), 'utf8');
if (!thanks.includes('Seu acesso está confirmado.')) failures.push('/obrigado/: confirmação ausente');
if (thanks.includes('elementor-element-4de6ada6') || thanks.includes('elementor-element-3024fa50')) {
  failures.push('/obrigado/: imagem lateral ainda presente');
}
if (!thanks.includes('#proximos-passos')) failures.push('/obrigado/: âncora de próximos passos ausente');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Validação estrutural concluída para 5 rotas.');
