<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useViewportStore } from '../stores/viewport'

const viewport = useViewportStore()

onMounted(() => {
  viewport.medir()
  window.addEventListener('resize', viewport.medir)
})
onBeforeUnmount(() => window.removeEventListener('resize', viewport.medir))
</script>

<template>
  <!-- Laboratório 1: indicador fixo com a largura da janela e o breakpoint ativo. -->
  <aside class="indicador" aria-live="off">
    <span class="valor">{{ viewport.largura }}px</span>
    <span class="bp">{{ viewport.breakpoint.nome }}</span>
  </aside>
</template>

<style scoped>
.indicador {
  position: fixed;
  right: var(--espaco-curto);
  bottom: var(--espaco-curto);
  z-index: 10;
  display: flex;
  gap: var(--espaco-curto);
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: var(--tinta);
  color: var(--papel);
  font-family: var(--fonte-mono);
  font-size: 0.8125rem;
  border-radius: 0.25rem;
}
.bp { background: var(--destaque); color: var(--tinta); padding: 0 0.5rem; font-weight: bold; }
</style>
