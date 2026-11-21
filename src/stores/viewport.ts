import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Breakpoints em rem, os mesmos usados nas media queries min-width do CSS.
export const breakpoints = [
  { nome: 'celular', minimoRem: 0 },
  { nome: 'tablet', minimoRem: 48 },
  { nome: 'desktop', minimoRem: 64 },
]

export const useViewportStore = defineStore('viewport', () => {
  const largura = ref(0)
  const altura = ref(0)
  const raizPx = ref(16) // tamanho da fonte raiz (1rem em px)

  function medir() {
    largura.value = window.innerWidth
    altura.value = window.innerHeight
    raizPx.value = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
  }

  // O breakpoint ativo é o maior cujo mínimo (em px) cabe na janela.
  const breakpoint = computed(() => {
    let ativo = breakpoints[0]!
    for (const b of breakpoints) {
      if (largura.value >= b.minimoRem * raizPx.value) ativo = b
    }
    return ativo
  })

  return { largura, altura, raizPx, breakpoint, medir }
})
