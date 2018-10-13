<template>
  <div class="coaching-container">
    <nav-component></nav-component>

    <div class="coaching-header">
      <div class="homepage-headline">
        <h1>Insightful Headline for
        <br>Coaching Services</h1>
      </div>
    </div>

    <div class="center body-content">
      <div class="coaching-packages">
        <h1>Coaching Packages</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, secod do eiusmod tempor incididunt ut labore dolo rmagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adielit, secod do eiusmod tempor incididunt ut labore.</p>



        <div class="package-container">
          <img src="../assets/img/pkg1.png" alt="">

          <div class="package-copy">
            <!-- <h1>unconditioned</h1> -->
            <img src="../assets/img/pkg1-title.png" alt="">

            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ratione voluptatem sequi nesciunt. 
            <br>
            <br>
            •  Neque porro quisquam 
            <br>
            •  Qui dolorem ipsum quia dolor sit amet, 
            <br>
            •  Aliquam quaerat voluptatem.</p>

            <button class="signup-button">GET STARTED</button>
          </div>

          
        </div>

        <div class="package-container">
          <img src="../assets/img/pkg2.png" alt="">
          <div class="package-copy">
            <!-- <h1>unconditioned</h1> -->
            <img src="../assets/img/pkg3-title.png" alt="">

            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ratione voluptatem sequi nesciunt. 
            <br>
            <br>
            •  Neque porro quisquam 
            <br>
            •  Qui dolorem ipsum quia dolor sit amet, 
            <br>
            •  Aliquam quaerat voluptatem.</p>

            <button class="signup-button">GET STARTED</button>
          </div>
        </div>

        <div class="package-container">
          <img src="../assets/img/pkg3.png" alt="">
          <div class="package-copy">
            <!-- <h1>unconditioned</h1> -->
            <img src="../assets/img/pkg3-title.png" alt="">

            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ratione voluptatem sequi nesciunt. 
            <br>
            <br>
            •  Neque porro quisquam 
            <br>
            •  Qui dolorem ipsum quia dolor sit amet, 
            <br>
            •  Aliquam quaerat voluptatem.</p>

            <button class="signup-button">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>

    <booking-signup></booking-signup>
    <site-map></site-map>
    <footer-component></footer-component>
  </div>
  
</template>

<style scoped lang="scss">
  * {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }

  .coaching-header {
    width: 100%;
    height: 400px;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    background-image: url('../assets/img/coaching-header.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 200px;

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
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto 160px;

    h1 {
      font-size: 44px;
      color: #575757;
      font-family: 'Times New Roman', serif;
      font-style: italic;
    }

    p {
      font-size: 20px;
      margin-bottom: 100px;
    }
  }

  .package-container {
    border-top: 1px solid #c8c8c8;
    margin-bottom: 120px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;


    img {
      margin-right: 50px;
    }
  }

  .package-copy {
    padding-top: 50px; 
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
</style>