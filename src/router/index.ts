import { createRouter, createWebHistory } from 'vue-router'
import { secoes } from '../secoes'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', redirect: '/responsividade' },
    ...secoes.map(secao => ({
      path: '/' + secao.caminho,
      // Carregamento de rota sob demanda (lazy loading): cada seção vira um arquivo separado.
      component: secao.view ?? (() => import('../views/SecaoView.vue')),
      props: { titulo: secao.titulo, pergunta: secao.pergunta },
    })),
    { path: '/desafio', component: () => import('../views/DesafioView.vue') },
  ],
})
