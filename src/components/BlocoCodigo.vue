<script setup lang="ts">
defineProps<{ codigo: string; linguagem?: string }>()
</script>

<template>
  <figure class="codigo">
    <figcaption v-if="linguagem">{{ linguagem }}</figcaption>
    <pre><code>{{ codigo }}</code></pre>
  </figure>
</template>

<style scoped>
.codigo { margin: var(--espaco) 0; border: 2px solid var(--tinta); background: #fff; }
figcaption { background: var(--tinta); color: var(--papel); font-family: var(--fonte-mono); font-size: 0.75rem; padding: 0.125rem var(--espaco-curto); text-transform: uppercase; }
/* A rolagem fica só dentro do bloco: a página nunca ganha rolagem horizontal. */
pre { margin: 0; padding: var(--espaco-curto) var(--espaco); overflow-x: auto; font-family: var(--fonte-mono); font-size: 0.8125rem; line-height: 1.6; }
</style>
