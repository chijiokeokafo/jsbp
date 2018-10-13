<template>
  <div class="testimonial-container">

    <nav-component></nav-component>

    <div class="testimonial-header">
      <div class="homepage-headline">
        <h1>A tireless ally who prides herself
        <br>in finding creative solutions.</h1>
      </div>
    </div>

    <div class="center">
      <img src="../assets/img/video.jpg" alt="">

      <div class="coaching-packages">
        <h1>Testimonials</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, secod do eiusmod tempor incididunt ut labore dolo rmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <juicer></juicer>
    <newsletter-signup></newsletter-signup>
    <site-map></site-map>
    <footer-component></footer-component>
  </div>
  
</template>

<script>
  
</script>

<style scoped lang="scss">
  * {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }

  .testimonial-header {
    width: 100%;
    height: 400px;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    background-image: url('../assets/img/testimonials-header.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 160px;

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

    h1 {
      font-size: 44px;
      text-align: center;
      color: #fff;
      font-family: 'Times New Roman', serif;
      font-weight: bold;
      position: relative;
      top: 30px;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto 160px;

    .left, .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      // align-items: center;
    }
    .left {
      text-align: left !important;

      .phone, .email {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;

        p {
          font-size: 26px;
          color: #2e3192;
          margin: 0;
        }
      }
    }

    .left h1 {
      font-size: 64px;
      font-family: 'Times New Roman', serif;
      font-style : italic;
      margin-top: 0;
      margin-bottom: 20px;
    }

    .icon-holder {
      background-color: #dcdded;
      width: 45px;
      height: 45px;
      border-radius: 100%; 
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;

      img {
        width: 25px;
        height: 25px;
      }
    }

    .form-container {
      display: flex;
      flex-direction: column;
      padding: 0 30px;

      input {
        border: 1px solid #ccc !important;
        margin-bottom: 15px;
        padding: 8px;
        border-radius: 3px;
        // max-width: 400px;
        margin: 0 auto 15px;
        width: 100%;
      }

      textarea {
        border: 1px solid #ccc !important;
        padding: 8px;
        border-radius: 3px;
        // max-width: 400px;
        margin: 0 auto;
        width: 100%;
      }

      .signup-button {
        border: none;
        background-color: #2e3192;
        color: #fff;
        font-size: 20px;
        padding: 17px 20px 17px 20px;
        border-radius: 5px;
        position: relative;
        transition: all 0.15s linear;
        width: 200px;
        height: 60px;
        margin-top: 15px;
      }
      .signup-button:hover {
        background-color: #5c5eb4;
      }

      .signup-button:focus {
        outline: none;
      }
    }
  }
  
</style>