import { useAppStore } from '@/stores/app'
import AboutView from '@/views/AboutView.vue'
import ConnectionsVIew from '@/views/ConnectionsVIew.vue'
import HomeView from '@/views/HomeView.vue'
import InternalServerErrorView from '@/views/InternalServerErrorView.vue'
import LegalPolicyView from '@/views/LegalPolicyView.vue'
import AuthenticationView from '@/views/AuthenticationView.vue'
import NewsView from '@/views/NewsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SupportView from '@/views/SupportView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/components/authentication/LoginForm.vue'
import SingUpForm from '@/components/authentication/SingUpForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'connections',
          name: 'connections',
          component: ConnectionsVIew,
        },

        {
          path: 'news',
          name: 'news',
          component: NewsView,
        },

        {
          path: 'profile',
          name: 'profile',
          component: ProfileView,
          beforeEnter: () => {
            const app = useAppStore()
            if (!app.loggedIn) {
              router.push({ name: 'login' })
            }
          },
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
    },

    {
      path: '/authentication',
      name: 'authentication',
      component: AuthenticationView,
      children: [
        {
          path: 'log-in',
          name: 'login',
          component: LoginForm,
        },
        {
          path: 'sing-up',
          name: 'singup',
          component: SingUpForm,
        },
      ],
    },
    {
      path: '/legal-policy',
      name: 'legalPolicy',
      component: LegalPolicyView,
    },
    {
      path: '/internal-server-error',
      name: 'internalServerError',
      component: InternalServerErrorView,
    },
  ],
})

export default router
