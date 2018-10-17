<template>
  <div class="container-hamburger-nav">
    <div id="nav-icon3"
      @click="toggleOpen()"
      v-bind:class="{ open: isActive }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="takeover-nav">
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
  </div>
  
</template>

<script>

  export default {
    data: function () {
      return {
        isActive: false
      }
    },
    methods: {
      toggleOpen () {
        this.isActive = !this.isActive;

        if (this.isActive == false) {
          $('.takeover-nav').css('opacity', 0);
          setTimeout (function() {
            $('.takeover-nav').css('display', 'none');
          }, 200)
          
        } else {
          
          $('.takeover-nav').css('display', 'flex');
          setTimeout (function() {
            $('.takeover-nav').css('opacity', 1);
          }, 180)
        }
        
      }
    }
  }
</script>

<style scoped>
  .container-hamburger-nav {
    display: flex;
    align-items: center;
  }

  #nav-icon3 {
    width: 25px;
    height: 38px;
    position: relative;
    /*margin: 5px auto;*/
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    z-index: 1000;
  }

  #nav-icon3 span{
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    
  }

  #nav-icon3:hover span { background: #afb0d6;}

  #nav-icon3 span:nth-child(1) {
    top: 8px;
  }

  #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
    top: 18px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 28px;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .takeover-nav {
    background-color: #7577b7;
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 0.125s linear;
  }

  .takeover-nav a {
    color: #fff;
    text-decoration: none;
    padding: 20px 0;
    font-size: 33px;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  .nav-list.stroke li { margin: 10px 0; }
  .nav-list.stroke li a:hover { color: #f0bed8; }
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
</style>