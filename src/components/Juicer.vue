<template>
  <div class="juicer-container">
    <h1>INSTAGRAM FEED</h1>

    <div class="box-row">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="box-row">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<style>
  .juicer-container {
    padding: 10px 0 80px;
  }

  h1 { margin-bottom: 60px; }
  .box-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
  }

  .box-row .box {
    background-color: #ebebeb;
    width: 24%;
    height: 280px;
    margin-bottom: 20px;

  }
</style>