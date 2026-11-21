<script setup lang="ts">
import SecaoLayout from '../../components/SecaoLayout.vue'
import BlocoCodigo from '../../components/BlocoCodigo.vue'
import LabGrid from '../../components/labs/LabGrid.vue'

defineProps<{ titulo: string; pergunta: string }>()

const exemplo = `/* FLEXBOX: uma dimensão (linha OU coluna) */
.barra {
  display: flex;
  justify-content: space-between; /* distribui no eixo principal (horizontal) */
  align-items: center;            /* alinha no eixo cruzado (vertical) */
  flex-wrap: wrap;                /* quebra para a linha de baixo em vez de vazar */
  gap: 1rem;                      /* espaço entre os itens */
}

/* GRID: duas dimensões (linhas E colunas) */
.cartoes {
  display: grid;
  /* Cria quantas colunas de pelo menos 14rem couberem; cada uma cresce 1fr */
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
}`
</script>

<template>
  <SecaoLayout :titulo="titulo" :pergunta="pergunta">
    <p>
      <strong>Flexbox</strong> organiza itens em <em>uma</em> dimensão: uma linha ou uma coluna. É ótimo para barras
      de menu, botões lado a lado e centralizar coisas. <code>justify-content</code> alinha no eixo principal,
      <code>align-items</code> no eixo cruzado, <code>flex-wrap</code> deixa os itens quebrarem de linha e
      <code>gap</code> define o espaço entre eles.
    </p>
    <p>
      <strong>Grid</strong> organiza em <em>duas</em> dimensões ao mesmo tempo. É a escolha para o layout da página
      e para galerias de cards. Com <code>repeat(auto-fit, minmax(…))</code> o navegador decide sozinho quantas colunas
      cabem, sem precisar de media query.
    </p>
    <p><strong>Regra prática:</strong> alinhando itens numa linha? Flexbox. Montando uma grade de verdade? Grid.</p>

    <template #exemplo>
      <BlocoCodigo linguagem="css" :codigo="exemplo" />
    </template>

    <template #lab>
      <p>Arraste o controle e observe em que largura o Grid passa de 1 para 2 colunas (e depois 3).</p>
      <LabGrid />
    </template>

    <template #resposta>
      <p>A segunda coluna aparece quando duas colunas mínimas mais o espaço entre elas cabem no contêiner:</p>
      <BlocoCodigo :codigo="`2 colunas × 14rem + 1 gap × 1rem = 28rem + 1rem = 29rem\n29rem × 16px = 464px`" />
      <p>
        Abaixo de <strong>464px</strong> só cabe uma coluna de 14rem (224px), e o <code>1fr</code> a estica até
        ocupar a largura toda. Em 464px ou mais, entram duas. (Para três: 3 × 14rem + 2 × 1rem = 44rem = 704px.)
      </p>
    </template>

    <template #fontes>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/repeat">MDN: repeat()</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/minmax">MDN: minmax()</a></li>
    </template>
  </SecaoLayout>
</template>
