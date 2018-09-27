<template>
  <div class="container signup-container">
    <div class="signup-row">
      <div class="copy">
        <p>Coaching packages offer when you sign up!</p>
      </div>
      <div class="signup-form">
        <button class="signup-button">GET STARTED</button>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .signup-container {
    background-color: #faf2f7;
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
    width: 70%;
  }

  .signup-row p {
    color: #333333;
    padding: 10px 0px;
    font-size: 24px;
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
    border-radius: 5px;
    left: -4px;
    position: relative;
  }

  .signup-button:focus {
    outline: none;
  }


</style>