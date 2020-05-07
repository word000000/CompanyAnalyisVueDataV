<template>
  <div id="manyCompany">
    <dv-full-screen-container>
      <top-header/>
      <div class="main-content">
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
    import TopHeader from "./topHeader";
    export default {
      name: 'ManyCompany',
      components: {TopHeader},
      props: {

        },
    };
</script>

<style>
  #manyCompany {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;
  }
  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
