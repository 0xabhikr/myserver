import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';
import MobileBlocked from '../pages/MobileBlocked.vue'; // ✅ import the page

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/mobile-blocked', component: MobileBlocked }, // ✅ add route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
  if (isMobile && to.path !== '/mobile-blocked') {
    next('/mobile-blocked');
  } else {
    next();
  }
});

export default router;
