import { createRouter, createMemoryHistory } from 'vue-router'

import HomePage from '../../pages/homePage'

const routes = [
  { path: '/', component: HomePage },
]

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
})

export default router