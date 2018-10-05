<template>
  <div class="container nav-header">
    <fixed-header :fixed.sync="isFixed"  :threshold="10">
      <div class="navbar" :class="{ 'is-light': isFixed, 'is-primary': !isFixed }">
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
    }

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
    display: block;
  }

  .is-gone {
    display: none;
  }
  
</style>