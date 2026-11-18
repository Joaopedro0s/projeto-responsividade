# Guia de responsividade

Projeto em dupla iniciado com `npm create vue@latest`, Vue 3, Vite, TypeScript, Vue Router e Pinia. Para executar, abra um terminal nesta pasta e use `npm install` e `npm run dev`. Use `npm run build` para verificar os tipos e compilar.

## Estrutura

Os temas e perguntas ficam em `src/secoes.ts`. Cada tema tem uma rota em `src/router/index.ts` e usa o molde de página `src/views/SecaoView.vue`. O Desafio tem sua própria página. O menu e os estilos ficam em `src/components/MenuGuia.vue` e `src/assets/base.css`.

O PDF anuncia seis seções de conteúdo, enumera cinco e pede ainda o Desafio. A estrutura cobre os cinco temas identificados e a página final. Confirmar com o professor se há outro tema.

## Roteiro para a dupla

1. Pesquisar uma seção por vez. Em cada tela, escrever uma explicação para iniciantes, incluir um exemplo comentado, responder à pergunta-guia e listar as fontes ao final.
   - Responsividade e meta viewport.
   - Unidades absolutas e relativas e quando usar rem, em, %, fr, vw, vh, dvh e ch.
   - Flexbox e Grid em uma ou duas dimensões, justify-content, align-items, flex-wrap, gap e repeat(auto-fit, minmax()).
   - Imagens com max-width de 100%, height auto, width e height no HTML, loading lazy e suas exceções, aspect-ratio, object-fit e srcset.
   - Estrutura e nomes de componentes Vue, props tipadas, eventos, :key no v-for, variáveis CSS, LCP, INP, CLS e carregamento de rotas sob demanda.
2. Construir pelo menos três laboratórios interativos. O enunciado sugere experimentar a largura de um contêiner, converter unidades ou observar imagens carregando. Planejar o uso de Pinia e de uma API, tópicos de revisão mencionados na apresentação.
3. Criar a pergunta do Desafio usando o guia produzido pela dupla.
4. Desenvolver a identidade visual e testar no navegador e no celular. Conferir o menu, as medidas em rem, as variáveis de cor e espaçamento, as consultas com min-width e a ausência de conteúdo vazando e de rolagem horizontal.
5. Preparar a apresentação de 01/12/2026 e a possibilidade de explicar o laboratório de outra equipe.
6. Publicar o site e manter o repositório no GitHub com README. Até 22/12/2026 às 23h59, cada integrante entrega os links do site e do repositório e uma captura de tela do site no celular da dupla.
# projeto-responsividade
