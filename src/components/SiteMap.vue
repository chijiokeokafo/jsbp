<template>
  <div class="container sitemap-container">
    <div class="logo-container">
      <img src="../assets/img/logo-icon.png" alt="">
    </div>
    <div class="three-col">
      <div class="col">
        <p>About</p>
        <p>Testimonials</p>
        <p>Coaching</p>
        <p>Consulting</p>
      </div>
      <div class="col">
        <p>Contact</p>
        <p>Booking</p>
        <p>Newsletter</p>
        <p>Blog</p>
      </div>
      <div class="col">
        <p>Webinars</p>
        <p>Events</p>
        <p>Press & Media</p>
        <p>Shop</p>
      </div>
    </div>
  </div>
  
</template>

<style>
  .sitemap-container {
    background-color: #3e3e3e;
    padding: 90px 0 130px 0;
    font-family: 'Helvetica', sans-serif
  }
  .logo-container { 
    margin: 0 auto 20px; 
    text-align: center;
  }

  .three-col {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
  .col {
    width: 28%;
    color: #afb0d6;
  }

  .col p {
    font-size: 16px;
    cursor: pointer;
  }
</style>