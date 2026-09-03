# PainRadarPro — páginas HTML

Conversão das três variações da página do PainRadarPro exportadas pelo Elementor.

- `/` e `/a1/`: versão A1
- `/a2/`: versão A2
- `/a3/`: versão A3
- `/obrigado/`: confirmação de compra e próximos passos

As páginas são HTML estático e preservam os estilos e componentes encontrados nos arquivos JSON originais.

Os botões de compra direcionam para a Hotmart. O Meta Pixel registra visualizações em todas as rotas e a página `/obrigado/` registra a compra de R$ 97,00 no navegador e pela API de Conversões. O token da API deve ser configurado na Vercel como `META_CONVERSION_API_TOKEN`; ele não faz parte do repositório.
