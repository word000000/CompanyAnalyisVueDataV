<template>
  <div id="manyCompany">
    <dv-full-screen-container >
      <top-header style="height: 50px"/>
      <dv-border-box-1 class="main-container">
        <div class="main-content">
          <scroll-board style="flex: 45"/>
          <div style="margin-right:20px;margin-top:20px;height: 100%;weight:100%;display: flex;flex-direction: column ;flex: 55">
            <RadarMap style="height: 100%;width: 100%"/>
            <ScrollRankBoard style="height: 100%;width: 100%;margin-bottom: 20px"/>
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
    import TopHeader from "./topHeader";
    import ScrollBoard from "./ScrollBoard";
    import RadarMap from "./RadarMap";
    import ScrollRankBoard from "./ScrollRankBoard";


    export default {
      name: 'ManyCompany',
      components: {ScrollRankBoard, RadarMap, ScrollBoard, TopHeader},
      data(){
        return {

        }
      }
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
    background-size: 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .main-container {
    height: 100%;
  }
  #scroll-board {
    width: 45%;
    height: 98%;
    box-sizing: border-box;
    padding: 10px;
  }
  .right-main-container {
    width:20%;
    height: 98%;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px;

  }
  .rmc-top-container {
    height: 100%;
    display: flex;
  }

</style>
