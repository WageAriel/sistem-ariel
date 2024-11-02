import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import CategoryView from '../views/CategoryView.vue'
import AuthorView from '../views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blogPost',
      name: 'blogPost',
      component: BlogPostView,
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUsView,
    },
    {
      path: '/business',
      name: 'business',
      component: CategoryView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
  ],
})

export default router
