<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { secoes } from '../secoes'

const aberto = ref(false)
</script>

<template>
  <header>
    <strong>Guia de responsividade</strong>
    <button type="button" aria-controls="navegacao" :aria-expanded="aberto" @click="aberto = !aberto">Menu</button>
    <nav id="navegacao" aria-label="Seções do guia" :class="{ aberto }">
      <RouterLink v-for="secao in secoes" :key="secao.caminho" :to="'/' + secao.caminho" @click="aberto = false">
        {{ secao.titulo }}
      </RouterLink>
      <RouterLink to="/desafio" @click="aberto = false">Desafio</RouterLink>
    </nav>
  </header>
</template>
