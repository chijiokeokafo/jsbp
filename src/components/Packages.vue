<template>
  <div class="container packages">
    <div class="parallax-holder">
      <img src="../assets/img/packages-parrallax.png" alt="">
    </div>

    <div class="copy-container top">
      <h1>Coaching Packages</h1>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>

    <div class="carousel-container">
      <img src="../assets/img/carousel-placeholder-2.png" alt="">
    </div>

    <div class="copy-container bottom">
      <div class="img-left">
        
      </div>
      <div class="copy-right-side">
        <h1>Sample Subhead
        <br>
        Lorem Ipsum Dolor</h1>

        <br>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tenetur, esse! Laudantium quaerat praesentium nobis. Ex molestias neque reiciendis, accusamus laudantium sapiente perferendis, vero ipsam doloremque quaerat laboriosam, atque iste!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus odio possimus dignissimos repellendus dolorum beatae provident consequatur! Nam aspernatur quas in. Quaerat minus vitae impedit amet ullam cupiditate eum expedita.</p>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style>
  .packages {
    background-color: #fff;
    margin-top: 150px;
    width: 75%;
    margin: 0 auto;
  }
  .packages img { margin: 0 auto; }

  /*.copy-container {
    width: 75%;
    margin: 0 auto;
  }*/

  .carousel-container {
    margin-top: 60px;
  }

  .copy-container.bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .img-left {
    width: 400px;
    height: 525px;
    background-color: #efefef;
  }
  .copy-right-side {
    width: 50%;
    text-align: left;
    margin-left: 40px;
  }
</style>