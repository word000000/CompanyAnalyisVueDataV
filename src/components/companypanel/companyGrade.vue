<template>
  <div id="company-grade">
    <dv-border-box-7>
    <div class="block-top-bottom-content" style="display: flex;flex-direction: column;align-items: center;">
      <h2 align="center" style="margin-left: 100px;margin-top:0px;margin-bottom: 0px">
        <circle-box> </circle-box>
      </h2>

      <h2 align="center" style="margin: 0px">
        <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
          <B>企业综合评分:75</B>
        </FONT>
      </h2>
      <br>
      <h2 align="center" style="margin: 0px">
        <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
          <B>信息披露评分:70</B>
        </FONT>
      </h2>
      <br/>
      <div>
      <dv-decoration-7 style="width:150px;height:40px;margin: 3px">生成报告</dv-decoration-7>
      </div>
      <div  @click="$router.push('/')">
        <dv-decoration-7 style="width:150px;height:40px">返回首页</dv-decoration-7>
      </div>

    </div>
    </dv-border-box-7>
  </div>
</template>

<script>
  import circle from "./circle";

  export default {
    name: "companyGrade",
    components: {
      "circle-box":circle
    }
  }
</script>

<style>
  #company-grade {
    width: 55%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px 10px;

    .company-grade-title {
      font-weight: bold;
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 20px;
    }

    .dv-scroll-company-grade {
      flex: 1;
    }

    .block-left-right-content {
      flex: 1;
      display: flex;
      margin-top: 20px;
    }

    .block-top-bottom-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-left: 20px;
    }

  }
</style>
