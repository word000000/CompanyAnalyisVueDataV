<template>
  <div id="company-lab">
    <dv-border-box-7>
    <br/>
    <br/>
    <h2 align="center" style="margin: 0px">
      <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
        <B>企业标签</B>
      </FONT>
    </h2>
      <div class="block-top-bottom-content" align="center">
        <br/>
        <br/>
        <dv-decoration-11 style="width:200px;height:60px;">知识密集型</dv-decoration-11>
        <br/>
        <br/>
        <dv-decoration-11 style="width:200px;height:60px;">信用等级低</dv-decoration-11>
        <br/>
        <br/>
        <dv-decoration-11 style="width:200px;height:60px;">知识产权差</dv-decoration-11>
        <br/>
        <br/>
        <dv-decoration-11 style="width:200px;height:60px;">无基本信息</dv-decoration-11>

      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
  export default {
    name:'companyLab'
  }
</script>

<style>
  #company-lab {
    width: 26%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px 10px;

    .company-lab-title {
      font-weight: bold;
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 20px;
    }

    .dv-scroll-company-lab {
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

    .block-top-content {
      height: 50%;
      width:  800px;
      display: flex;
      flex-grow: 0;
      box-sizing: border-box;
      padding-bottom: 20px;
    }

    .wrapper {
      /* 转化元素类型 */
      display: grid;
      /* 设置网格的间隙 */
      grid-gap: 20px;
      /* 设置每列的尺寸 */
      grid-template-columns: repeat(2, 1fr);
    }

    .wrappernew {
      /* 转化元素类型 */
      display: grid;
      /* 设置网格的间隙 */
      grid-gap: 20px;
      /* 设置每列的尺寸 */
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
