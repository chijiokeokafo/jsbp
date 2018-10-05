<template>
  <div class="container about-header">
    <div class="homepage-headline">
      <!-- <h1>Elegant Homepage Headline</h1> -->
      <img src="../assets/img/dedicated.png" alt="">
    </div>

    

  </div>
</template>

<script>
</script>

<style scoped lang="scss">

  .container.about-header {
    width: 100%;
    height: 400px;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    background-image: url('../assets/img/about-header.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    a {
      color: #fff;
      text-decoration: none;

      :active, :focus {
        outline: none !important;
      }
    }
  }
  
  .homepage-headline {
    // margin: 200px 0;

    img {
      // margin: 50px auto;
    }
  }
  
</style>