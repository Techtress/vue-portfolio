import { createRouter, createWebHistory } from 'vue-router'
import { RouteHelper } from './methods'
import jsonPages from './pages.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

for (var i = 0; i < jsonPages.length; i++) {
  const page = jsonPages[i]
  router.addRoute( {
    path: RouteHelper.toPath(i, page.name),
    name: RouteHelper.toDisplay(page.name),
    component: () => import(`../views/${page.name}View.vue`)
  })
}

export default router