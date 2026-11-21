<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useViewportStore } from '../../stores/viewport'

// Laboratório: converte uma medida CSS para px e mostra a conta.
type Unidade = 'rem' | 'em' | '%' | 'vw' | 'vh'

const viewport = useViewportStore()
const valor = ref(1.5)
const unidade = ref<Unidade>('rem')
const fonteRaiz = ref(16) // px de 1rem
const fontePai = ref(16) // px de 1em (depende do elemento)
const baseRef = ref(400) // px do elemento de referência para %

onMounted(() => {
  viewport.medir()
  fonteRaiz.value = viewport.raizPx
})

const resultado = computed(() => {
  const v = valor.value || 0
  switch (unidade.value) {
    case 'rem': return { px: v * fonteRaiz.value, conta: `${v} × ${fonteRaiz.value}px (fonte da raiz)` }
    case 'em': return { px: v * fontePai.value, conta: `${v} × ${fontePai.value}px (fonte do elemento)` }
    case '%': return { px: (v / 100) * baseRef.value, conta: `${v}% × ${baseRef.value}px (referência)` }
    case 'vw': return { px: (v / 100) * viewport.largura, conta: `${v}% × ${viewport.largura}px (largura da janela)` }
    case 'vh': return { px: (v / 100) * viewport.altura, conta: `${v}% × ${viewport.altura}px (altura da janela)` }
  }
})
</script>

<template>
  <form class="lab" @submit.prevent>
    <div class="linha">
      <label>Valor <input v-model.number="valor" type="number" step="0.1" /></label>
      <label>Unidade
        <select v-model="unidade">
          <option>rem</option><option>em</option><option>%</option><option>vw</option><option>vh</option>
        </select>
      </label>
    </div>

    <div class="linha">
      <label>1rem = (px) <input v-model.number="fonteRaiz" type="number" min="1" /></label>
      <label>1em = (px) <input v-model.number="fontePai" type="number" min="1" /></label>
      <label>Referência do % (px) <input v-model.number="baseRef" type="number" min="1" /></label>
    </div>

    <p class="saida"><span>{{ valor }}{{ unidade }}</span> = <strong>{{ Math.round(resultado.px * 100) / 100 }}px</strong></p>
    <p class="conta">{{ resultado.conta }}</p>
  </form>
</template>

<style scoped>
.lab { border: 2px dashed var(--tinta); padding: var(--espaco); background: #fff; }
.linha { display: flex; flex-wrap: wrap; gap: var(--espaco); margin-bottom: var(--espaco); }
label { display: grid; gap: 0.25rem; font-size: 0.875rem; flex: 1 1 8rem; }
input, select { font: inherit; padding: 0.25rem 0.5rem; border: 2px solid var(--tinta); background: var(--papel); min-width: 0; }
.saida { font-family: var(--fonte-mono); font-size: 1.5rem; margin: 0; }
.saida strong { color: var(--destaque-escuro); }
.conta { margin: 0; font-family: var(--fonte-mono); font-size: 0.8125rem; }
</style>
