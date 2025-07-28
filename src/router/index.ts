import AboutView from '@/views/AboutView.vue'
import ConnectionsVIew from '@/views/ConnectionsVIew.vue'
import LegalPolicyView from '@/views/LegalPolicyView.vue'
import NewsView from '@/views/NewsView.vue'
import SupportView from '@/views/SupportView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/connections',
      name: 'connections',
      component: ConnectionsVIew,
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/legalPolicy',
      name: 'legalPolicy',
      component: LegalPolicyView,
    },
  ],
})

export default router
