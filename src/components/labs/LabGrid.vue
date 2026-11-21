<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Laboratório: arraste o controle e veja quantas colunas o Grid auto-fit cria.
const largura = ref(520)
const larguraReal = ref(0)
const colunas = ref(1)
const grade = ref<HTMLElement | null>(null)
let observador: ResizeObserver | null = null

function medir() {
  if (!grade.value) return
  larguraReal.value = Math.round(grade.value.clientWidth)
  // O navegador devolve as colunas já calculadas, ex.: "224px 224px".
  colunas.value = getComputedStyle(grade.value).gridTemplateColumns.split(' ').length
}

onMounted(() => {
  observador = new ResizeObserver(medir)
  if (grade.value) observador.observe(grade.value)
  medir()
})
onBeforeUnmount(() => observador?.disconnect())
</script>

<template>
  <div class="lab">
    <label for="larg">Largura do contêiner: <strong>{{ larguraReal }}px</strong></label>
    <input id="larg" v-model.number="largura" type="range" min="200" max="900" step="2" />

    <!-- max-width: 100% impede o contêiner de vazar em telas pequenas -->
    <div class="palco">
      <div ref="grade" class="grade" :style="{ width: largura + 'px' }">
        <div v-for="n in 6" :key="n" class="cartao">{{ n }}</div>
      </div>
    </div>

    <p class="leitura">Colunas agora: <strong>{{ colunas }}</strong> · A segunda coluna aparece em <strong>464px</strong>.</p>
  </div>
</template>

<style scoped>
.lab { border: 2px dashed var(--tinta); padding: var(--espaco); background: #fff; }
input { width: 100%; }
.palco { margin: var(--espaco) 0; overflow: hidden; }
.grade {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
  outline: 2px solid var(--destaque);
  outline-offset: 0.25rem;
}
.cartao { background: var(--tinta); color: var(--papel); padding: 1rem; text-align: center; font-family: var(--fonte-mono); }
.leitura { margin: 0; font-family: var(--fonte-mono); font-size: 0.875rem; }
</style>
