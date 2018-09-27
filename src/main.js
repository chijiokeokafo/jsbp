import Vue from 'vue'
import App from './App.vue'
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

new Vue({
  el: '#app',
  render: h => h(App)
})

