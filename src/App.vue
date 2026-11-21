<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuGuia from './components/MenuGuia.vue'
import IndicadorViewport from './components/IndicadorViewport.vue'
import './assets/base.css'
</script>

<template>
  <MenuGuia />
  <main><RouterView /></main>
  <IndicadorViewport />
</template>
