<script setup lang="ts">
// Molde das seções: as quatro partes pedidas no PDF + espaço para o laboratório.
defineProps<{ titulo: string; pergunta: string }>()
</script>

<template>
  <article class="secao">
    <h1>{{ titulo }}</h1>

    <section>
      <h2><span class="num">1</span> Explicação</h2>
      <slot />
    </section>

    <section>
      <h2><span class="num">2</span> Exemplo comentado</h2>
      <slot name="exemplo" />
    </section>

    <section v-if="$slots.lab">
      <h2><span class="num">★</span> Laboratório</h2>
      <slot name="lab" />
    </section>

    <section class="pergunta">
      <h2><span class="num">3</span> Pergunta-guia</h2>
      <p class="enunciado">{{ pergunta }}</p>
      <h3>Resposta</h3>
      <slot name="resposta" />
    </section>

    <footer>
      <h2><span class="num">4</span> Fontes consultadas</h2>
      <ul><slot name="fontes" /></ul>
    </footer>
  </article>
</template>
