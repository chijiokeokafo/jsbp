<template>
  <div class="container footer-container">
    <div class="footer-row">
      <div class="copy">
        <p>Privacy Policy | Terms of Use</p>
      </div>
      <div class="footer-form">
        <social-icons></social-icons>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .footer-container {
    background-color: #2c2c2c;
    /*padding: 0 60px;*/
    height: 100px;
    display: flex;
    justify-content: center;
  }
  .footer-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .footer-row p {
    color: #717171;
    padding: 10px 0px;
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
    margin: 0;
  }
  .copy, 
  .footer-form { width: 50%; }

  .footer-input {
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 17px 20px;
    font-size: 20px;
    width: 50%;
  }

  .footer-button {
    border: none;
    background-color: #2e3192;
    color: #fff;
    font-size: 20px;
    padding: 17px 30px 17px 30px;
    border-radius: 5px;
    left: -4px;
    position: relative;
  }

  .footer-button:focus {
    outline: none;
  }


</style>