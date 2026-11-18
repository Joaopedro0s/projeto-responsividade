<script setup lang="ts">
defineProps<{ titulo: string; pergunta: string }>()
</script>

<template>
  <article>
    <h1>{{ titulo }}</h1>
    <!-- 1. Explicação curta para quem está no primeiro semestre. -->
    <!-- 2. Exemplo de código comentado. -->
    <h2>Pergunta-guia</h2>
    <p>{{ pergunta }}</p>
    <!-- 3. Resposta visível à pergunta desta seção. -->
    <!-- 4. Fontes consultadas, ao final da seção. -->
  </article>
</template>
