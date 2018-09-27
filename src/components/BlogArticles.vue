<template>
  <div class="container blog-articles">
    <h1>BLOG ARTICLE</h1>
    <div class="blog-headline">
      <img src="../assets/img/blog-placeholder.png" alt="">
    </div>
    <button>Learn More</button>

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">

  .blog-articles button {
    width: 200px;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: -160px;
    border: none;
    border-radius: 5px;
    padding: 20px 15px;
    font-size: 18px;
  }
  .blog-articles {
    width: 100%;
    height: auto;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #2e3192;
    margin-bottom: 60px;

    h1 {
      color: #fff;
      text-decoration: underline;
      // border-bottom: 1px solid #fff;
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
  .blog-headline {
    // margin: 250px 0;

    img {
      margin: 50 auto;
    }
  }
  
</style>