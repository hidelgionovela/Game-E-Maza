
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/IndexPage.vue') },
      { path: '/estatistica', component: () => import('src/pages/EstatisticasPage.vue') },
      { path: '/pontos', component: () => import('src/pages/PontosPage.vue') },
      { path: '/ranking', component: () => import('src/pages/RankingPage.vue') },
      { path: 'user', component: () => import('src/pages//UserPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
