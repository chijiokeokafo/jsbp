import Vue from 'vue'
import App from './App.vue'
import SocialIcons from './components/SocialIcons.vue'
import Hamburger from './components/Hamburger.vue'
import NewsletterSignup from './components/NewsletterSignup.vue'
import Testimonials from './components/Testimonials.vue'
// import Carousel from 'v-owl-carousel'
import Packages from './components/Packages.vue'


Vue.component('social-icons', SocialIcons);
Vue.component('hamburger', Hamburger);
Vue.component('newsletter-signup', NewsletterSignup);
Vue.component('testimonials', Testimonials);
Vue.component('packages', Packages);

new Vue({
  el: '#app',
  render: h => h(App)
})

