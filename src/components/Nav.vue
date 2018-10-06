<template>
  <div class="container nav-header">
    <fixed-header :fixed.sync="isFixed"  :threshold="10">
      <div class="navbar" :class="{ 'is-light': isFixed, 'is-primary': !isFixed }">
        <div class="logo-nav-container">
          <div class="logo">
            <router-link to="/"><img src="../assets/img/logo.png" alt=""></router-link>
          </div>
          <div class="nav">
            <ul class="nav-list stroke">
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
          <social-icons  :class="{ 'is-gone': isFixed, 'is-here': !isFixed }"></social-icons>
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
  body { margin: 0; }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

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

    .logo {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1000;
    }

    .nav-list {
      color: #fff;

      li a {
        transition: all 0.15s linear;
        color: #fff;
      }


    }
  }
  .nav-list li:hover a {
    color: #f0bed8;
  }
  .homepage-headline {
    margin: 250px 0;

    img {
      margin: 50 auto;
    }
  }

  .icons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar {
    position: fixed;
    width: 100%;
    transition: background 0.15s ease-out;
    background: transparent;
    z-index: 10000;
    top: 0px;
  }
  .navbar.is-primary {
    background: transparent;
  }
  .navbar.is-light {
    background: #7577b7;
  }

  .is-here {
    opacity: 1;
  }

  .is-gone {
    opacity: 0;
  }

  ul li a,
  ul li a:after,
  ul li a:before {
    transition: all .25s;
  }
  .nav-list.stroke li a {
    position: relative;
    padding: 0 0 4px 0;
  }
  .nav-list.stroke li a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #f0bed8;
    height: 2px;
  }
  .nav-list.stroke li a:hover:after {
    width: 100%;
  }
  /*.nav-list.stroke li a.this-page {
    color: #949696;
  }*/
  .nav-list.stroke li a.this-page:after {
   width: 100%;
  }
  
</style>