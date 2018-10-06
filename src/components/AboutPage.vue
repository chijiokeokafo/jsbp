<template>
  <div class="about-container">
    <nav-component></nav-component>
    <about-page-header></about-page-header>

    <div class="about-body">
      <div class="top">
        <h2>H2 About Jackie Serviss</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, secod do eiusmod tempor incididunt ut labore dolo rmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, secod do eiusmod tempor incid labore.</p>
      </div>
      <div class="center">
        <div class="left">
          <img src="../assets/img/about-left.png" alt="">
        </div>
        <div class="right">
          <h3>H3 Lorem Ipsum Dolor</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna.BUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
          <div class="quote">
            <h3>Quote from Jackie:
            <br>Lorem ipsum dolor sit amet,
            <br>consectetur adisciping, lorem 
            <br>ipsum dolor sit.</h3>
          </div>
        </div>
      </div>

      <div class="bottom">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. sequi nesciunt.</p>
      </div>
    </div>
    
    <div class="breathe-container">
      <!-- <img src="../assets/img/breathe.jpg" alt=""> -->
    </div>

    <booking-signup></booking-signup>
    <site-map></site-map>
    <footer-component></footer-component>
  </div>
</template>

<style scoped>
  .about-container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .about-body {
    width: 75%;
    margin: 30px auto;
    padding: 120px 60px;
    text-align: left;
  }
  .top { margin-bottom: 70px; }
  .center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .center .right {
    padding-left: 30px;
  }

  .top h2 { 
    font-size: 44px; 
    font-style: italic;
    font-family: 'Times New Roman', serif;
  }
  .about-container p { 
    font-size: 20px; 
    font-style: italic;
    font-family: 'Times New Roman', serif;
  }
  .center h3 {
    font-size: 30px;
    font-style: italic;
    font-family: 'Times New Roman', serif;
    margin-top: 0;
  }

  .center .quote::before {
    content:url('../assets/img/quote-top.png');
  }
  .center .quote {
    margin: 50px 0;
  }
  .center .quote::after {
    content:url('../assets/img/quote-bottom.png');
  }
  .center .quote h3 {
    color: #2e3192;
    font-size: 40px;
    margin-bottom: 20px
  }

  .breathe-container {
    background: url(../assets/img/breathe.jpg) center center/contain no-repeat fixed;
    height: 400px;
  }
</style>