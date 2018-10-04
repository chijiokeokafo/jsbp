<template>
  <div class="container nav-header">
    <fixed-header :fixed.sync="isFixed">
      <div :class="{ 'is-fixed': isFixed }">
        <div class="logo-nav-container">
          <div class="logo">
            <router-link to="/"><img src="../assets/img/logo.png" alt=""></router-link>
          </div>
          <div class="nav">
            <ul class="nav-list">
              <li>
                <router-link to="/about">ABOUT</router-link>
              </li>
              <li>
                <router-link to="/testimonials">TESTIMONIALS</router-link>
              </li>
              <li>
                <router-link to="/coaching">COACHING</router-link>
              </li>
              <li>
                <router-link to="/blog">BLOG</router-link>
              </li>
              <li>
                <router-link to="/contact">CONTACT</router-link>
              </li>
            </ul>
          </div>
          <social-icons></social-icons>
          <hamburger></hamburger>
        </div>
      </div>
    </fixed-header>
  </div>
</template>

<script>
  import FixedHeader from 'vue-fixed-header'

  export default {
    components: {
      FixedHeader
    }, 
    data () {
      return {
        isFixed: false
      }
    }
  }
</script>

<style scoped lang="scss">

  .container.nav-header {
    width: 100%;
    height: auto;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    background-color: #2e3192;

    a {
      color: #fff;
      text-decoration: none;

      :active, :focus {
        outline: none !important;
      }
    }
  }

  .logo-nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: 30px auto;

    .nav-list {
      color: #fff;
    }
  }
  .homepage-headline {
    margin: 250px 0;

    img {
      margin: 50 auto;
    }
  }
  
</style>