import { createRouter, createWebHistory } from 'vue-router'
import { secoes } from '../secoes'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/responsividade' },
    ...secoes.map(secao => ({
      path: '/' + secao.caminho,
      component: () => import('../views/SecaoView.vue'),
      props: { titulo: secao.titulo, pergunta: secao.pergunta },
    })),
    { path: '/desafio', component: () => import('../views/DesafioView.vue') },
  ],
})
