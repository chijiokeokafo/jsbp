<template>
  <div class="container booking-container">
    <div class="booking-row">
      <div class="copy">
        <p>INTRO TO BOOKING PAGE</p>
      </div>
      <div class="booking-form">
        <button class="booking-button">BOOK NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .booking-container {
    background-color: #ebebeb;
    /*padding: 0 60px;*/
    height: 100px;
    display: flex;
    justify-content: center;
  }
  .booking-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
    text-align: center;
  }

  .booking-row p {
    color: #333333;
    padding: 10px 0px;
    font-size: 24px;
    margin: 0;
  }
  .copy, 
  .booking-form { width: 50%; }

  .booking-input {
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 17px 20px;
    font-size: 20px;
    width: 50%;
  }

  .booking-button {
    border: none;
    background-color: #2e3192;
    color: #fff;
    font-size: 20px;
    padding: 17px 30px 17px 30px;
    border-radius: 5px;
    left: -4px;
    position: relative;
    transition: all 0.15s linear;
  }
  .booking-button:hover {
    background-color: #5c5eb4;
  }

  .booking-button:focus {
    outline: none;
  }


</style>