<script setup lang="ts">
import SecaoLayout from '../../components/SecaoLayout.vue'
import BlocoCodigo from '../../components/BlocoCodigo.vue'

defineProps<{ titulo: string; pergunta: string }>()

const exemplo = `<!-- index.html -->
<head>
  <!-- Sem esta linha, o celular finge ter uma tela de ~980px de largura -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

/* style.css, mobile-first: o código sem media query é o do celular */
.cards { display: grid; gap: 1rem; }

/* a partir de 48rem (768px) a tela é maior, então ajustamos */
@media (min-width: 48rem) {
  .cards { grid-template-columns: 1fr 1fr; }
}`
</script>

<template>
  <SecaoLayout :titulo="titulo" :pergunta="pergunta">
    <p>
      Responsividade é fazer a mesma página ficar boa em qualquer tela: celular, tablet, notebook.
      Em vez de criar um site para cada aparelho, escrevemos um CSS que se adapta à largura disponível.
    </p>
    <p>
      As ferramentas principais são as <strong>media queries</strong> (regras que só valem a partir de certa largura),
      as <strong>unidades relativas</strong> e layouts flexíveis como Flexbox e Grid. Neste guia usamos
      <strong>mobile-first</strong>: o CSS base é o do celular, e as media queries com <code>min-width</code> vão
      melhorando para telas maiores.
    </p>
    <p>
      Tudo isso depende de uma linha no HTML: a <strong>meta viewport</strong>. Sem ela, as media queries nem
      chegam a enxergar a tela real do celular.
    </p>

    <template #exemplo>
      <BlocoCodigo linguagem="html + css" :codigo="exemplo" />
      <p>
        Dica: o indicador no canto inferior direito desta página mostra a largura da janela e o breakpoint ativo.
        Redimensione a janela (ou gire o celular) e veja ele mudar em <code>48rem</code> e <code>64rem</code>.
      </p>
    </template>

    <template #resposta>
      <p>
        Os navegadores de celular nasceram numa época em que quase todo site era feito só para computador.
        Para não quebrar esses sites, sem instrução nenhuma o celular cria uma tela virtual (o
        <em>layout viewport</em>) com cerca de <strong>980px</strong> de largura, renderiza a página nessa largura e
        depois diminui tudo para caber na tela física. Como as media queries medem esse 980px, e não a largura real
        do aparelho (~390px), as regras “de celular” nunca disparam: o resultado é o site de computador, minúsculo.
      </p>
      <p>
        A meta <code>width=device-width, initial-scale=1</code> muda isso: diz ao navegador para usar a largura real do
        aparelho (em pixels CSS) como largura do layout, sem reduzir a escala. Com isso, <code>min-width: 48rem</code>
        passa a significar “tela de tablet ou maior” de verdade, e o layout de celular aparece no celular.
      </p>
    </template>

    <template #fontes>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">MDN: Viewport meta tag</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">MDN: Using media queries</a></li>
    </template>
  </SecaoLayout>
</template>
