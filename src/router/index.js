import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/navbar',
      name: 'navbar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Navbar.vue')
    },
    {
      path: '/artist',
      name: 'artist',
      component: () => import('../views/ArtistView.vue')
    },
    {
      path: '/album',
      name: 'almbum',
      component: () => import('../views/AlbumView.vue')
    },
    {
      path: '/track',
      name: 'track',
      component: () => import('../views/TrackView.vue')
    },
    {
      path: '/genre',
      name: 'genre',
      component: () => import('../views/GenreView.vue')
    }
  ]
})

export default router
