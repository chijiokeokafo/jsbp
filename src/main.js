import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';

import Nav from './components/Nav.vue'
import NavHeader from './components/NavHeader.vue'
import Happy from './components/Happy.vue'
import SocialIcons from './components/SocialIcons.vue'
import Hamburger from './components/Hamburger.vue'
import NewsletterSignup from './components/NewsletterSignup.vue'
import Testimonials from './components/Testimonials.vue'
import Packages from './components/Packages.vue'
import PackagesSignup from './components/PackagesSignup.vue'
import BlogArticles from './components/BlogArticles.vue'
import Juicer from './components/Juicer.vue'
import BookingSignup from './components/BookingSignup.vue'
import SiteMap from './components/SiteMap.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'


// **PAGES**
import Home from './components/Home.vue'
import AboutPage from './components/AboutPage.vue'
import TestimonialsPage from './components/TestimonialsPage.vue';
import CoachingPage from './components/CoachingPage.vue';
import BlogPage from './components/BlogPage.vue';
import ContactPage from './components/ContactPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.component('nav-component', Nav);
Vue.component('home', Home);
Vue.component('nav-header', NavHeader);
Vue.component('happy', Happy);
Vue.component('social-icons', SocialIcons);
Vue.component('hamburger', Hamburger);
Vue.component('newsletter-signup', NewsletterSignup);
Vue.component('testimonials', Testimonials);
Vue.component('packages', Packages);
Vue.component('packages-signup', PackagesSignup);
Vue.component('blog-articles', BlogArticles);
Vue.component('juicer', Juicer);
Vue.component('booking-signup', BookingSignup);
Vue.component('site-map', SiteMap);
Vue.component('footer-component', Footer);
Vue.component('modal', Modal);

Vue.component('about-page', AboutPage);
Vue.component('testinomials-page', TestimonialsPage);
Vue.component('coaching-page', CoachingPage);
Vue.component('blog-page', BlogPage);
Vue.component('contact-page', ContactPage);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

