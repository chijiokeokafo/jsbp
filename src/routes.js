import Home from './components/Home.vue';
import AboutPage from './components/AboutPage.vue';
import TestimonialsPage from './components/TestimonialsPage.vue';
import CoachingPage from './components/CoachingPage.vue';
import BlogPage from './components/BlogPage.vue';
import ContactPage from './components/ContactPage.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/about', component: AboutPage },
  { path: '/testimonials', component: TestimonialsPage },
  { path: '/coaching', component: CoachingPage },
  { path: '/blog', component: BlogPage },
  { path: '/contact', component: ContactPage },



];