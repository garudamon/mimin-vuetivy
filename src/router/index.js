import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/Error/404.vue'),
    meta: {
      breadcrumbs: [
        {
          text: "Error",
          disabled: true,
          to: "/"
        },
        {
          text: "404",
          disabled: true,
          to: "/"
        },
      ]
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
    meta: {
      breadcrumbs: [
        {
          text: "Home",
          disabled: true,
          to: "/"
        },
      ]
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard'),
    meta: {
      selfPanel: true,
      breadcrumbs: [
        {
          text: "Dashboard",
          disabled: true,
          to: "/dashboard"
        },
      ]
    }
  },
  {
    path: '/organization-structure',
    name: 'organization-structure',
    component: () => import(/* webpackChunkName: "organization-structure" */ '@/views/Structure'),
    meta: {
      breadcrumbs: [
        {
          text: "Organization",
          disabled: true,
          to: "/dashboard"
        },
        {
          text: "Structure",
          disabled: true,
          to: "/organization-structure"
        },
      ]
    }
  },
  {
    path: '/company',
    name: 'company-list',
    component: () => import(/* webpackChunkName: "company-list" */ '@/views/Company/List.vue'),
    meta: {
      breadcrumbs: [
        {
          text: "Company",
          disabled: true,
          to: "/company"
        },
        {
          text: "List",
          disabled: true,
          to: "/company"
        },
      ]
    }
  },
  {
    path: '/company/new',
    name: 'company-new',
    component: () => import(/* webpackChunkName: "company-new" */ '@/views/Company/Form.vue'),
    meta: {
      selfPanel: true,
      breadcrumbs: [
        {
          text: "Company",
          disabled: false,
          to: "/company"
        },
        {
          text: "New",
          disabled: true,
          to: "/company/new"
        },
      ]
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'login' },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
