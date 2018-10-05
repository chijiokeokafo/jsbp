<template>
  <div id="nav-icon3"
    @click="toggleOpen()"
    v-bind:class="{ open: isActive }">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        isActive: false
      }
    },
    methods: {
      toggleOpen () {
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<style scoped lang="scss">

  #nav-icon3 {
    width: 25px;
    height: 18px;
    position: relative;
    // margin: 5px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon3 span{
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  #nav-icon3 span:nth-child(1) {
    top: 8px;
  }

  #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
    top: 9px;
  }

  // #nav-icon3 span:nth-child(4) {
  //   top: 28px;
  // }

  #nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
</style>