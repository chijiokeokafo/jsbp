<template>
  <div class="home-container">
    <nav-component></nav-component>
    <header-home></header-home>
    <newsletter-signup></newsletter-signup>
    <happy></happy>
    <testimonials></testimonials>
    <packages></packages>
    <packages-signup></packages-signup>
    <blog-articles></blog-articles>
    <juicer></juicer>
    <booking-signup></booking-signup>
    <site-map></site-map>
    <footer-component></footer-component>
  </div>
</template>

<script>


export default {
}
</script>

<style>

body { margin: 0; }

  .home-container {
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

</style>
