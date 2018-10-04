<template>
  <div class="container testimonials">
    <!-- <carousel :autoplay="true">
    </carousel> -->
    <div class="placeholder-img">
      <!-- <img src="../assets/img/testimonial-holder.png" alt=""> -->
    </div>

    <div class="carousel-container">
      
    </div>


    <div class="learn-more-btn">
      <button>Learn More</button>
    </div>
  </div>
</template>

<script>
  

  export default {

  }
</script>

<style>
  .testimonials {
    margin-top: 40px;
    padding: 120px 0;
    background-color: #a2a2a2;
  }

  .testimonials .carousel-container {
    background-image: url('../assets/img/testimonial-frame.png');
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 400px;
    margin: 60px 0 !important;
  }

  .testimonials button {
    border: none;
    padding: 15px 35px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #fff;
    color: #4d4d4d;
  }
</style>