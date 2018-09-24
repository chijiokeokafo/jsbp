<template>
  <div class="container signup-container">
    <div class="signup-row">
      <div class="copy">
        <p>NEWSLETTER SIGN UP: Enter your email</p>
      </div>
      <div class="signup-form">
        <input type="text" class="signup-input" placeholder="testomg">
        <button class="signup-button">SIGN UP</button>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .signup-container {
    background-color: #8587c5;
    /*padding: 0 60px;*/
    height: 100px;
    display: flex;
    justify-content: center;
  }
  .signup-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  .signup-row p {
    color: #fff;
    padding: 10px 20px;
    font-size: 26px;
    margin: 0;
  }
  .copy, 
  .signup-form { width: 50%; }

  .signup-input {
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 17px 20px;
    font-size: 20px;
    width: 50%;
  }

  .signup-button {
    border: none;
    background-color: #2e3192;
    color: #fff;
    font-size: 20px;
    padding: 17px 20px 17px 20px;
    border-radius: 0 5px 5px 0;
    left: -4px;
    position: relative;
  }

  .signup-button:focus {
    outline: none;
  }


</style>