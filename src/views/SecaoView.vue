<script setup lang="ts">
import SecaoLayout from '../components/SecaoLayout.vue'
defineProps<{ titulo: string; pergunta: string }>()
</script>

<!-- Molde provisório das seções ainda não escritas. Para concluir uma seção: crie uma view em
     src/views/secoes/ (veja ResponsividadeView.vue) e aponte `view` em src/secoes.ts. -->
<template>
  <SecaoLayout :titulo="titulo" :pergunta="pergunta">
    <p class="aviso">Seção em construção.</p>
    <template #exemplo><p class="aviso">Exemplo de código a escrever.</p></template>
    <template #resposta><p class="aviso">Resposta a escrever.</p></template>
    <template #fontes><li>A listar.</li></template>
  </SecaoLayout>
</template>
