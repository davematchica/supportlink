import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

// Dashboard
import HomeView from '@/views/HomeView.vue' 
import DashboardView from '@/views/DashboardView.vue' 
import ClientsView from '@/views/ClientsView.vue' 
import ResourcesView from '@/views/ResourcesView.vue' 
import RequestsView from '@/views/RequestsView.vue' 
import FeedbackView from '@/views/FeedbackView.vue'

const routes = [ 
  { path: '/home', name: 'home', component: HomeView }, 
  { path: '/dashboard', name: 'dashboard', component: DashboardView }, 
  { path: '/clients', name: 'clients', component: ClientsView }, 
  { path: '/resources', name: 'resources', component: ResourcesView }, 
  { path: '/requests', name: 'requests', component: RequestsView }, 
  { path: '/feedback', name: 'feedback', component: FeedbackView }, 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
  ],
});

export default router;
