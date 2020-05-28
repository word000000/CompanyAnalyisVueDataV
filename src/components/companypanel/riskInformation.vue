<template>
  <div id="RiskInformation">
    <dv-border-box-7>
      <h2  style="margin: 0px;align:center">
        <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
          <B>风险信息</B>
        </FONT>
      </h2>
      <table style="height: 90%;width: 90%;margin-bottom: 10px"  cellspacing="0" cellpadding="0">
        <tr>
          <th width="70%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>开庭公告数</B>
            </FONT>
          </th>
          <th width="30%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>2</B>
            </FONT>
          </th>
        </tr>
        <tr>
          <th width="70%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>裁判文书</B>
            </FONT>
          </th>
          <th width="30%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>3</B>
            </FONT>
          </th>
        </tr>
        <tr>
          <th width="70%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>行政处罚数</B>
            </FONT>
          </th>
          <th width="30%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>5</B>
            </FONT>
          </th>
        </tr>
        <tr>
          <th width="70%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>是否列为异常</B>
            </FONT>
          </th>
          <th width="30%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>是</B>
            </FONT>
          </th>
        </tr>
        <tr>
          <th width="70%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>是否工商部失信企业</B>
            </FONT>
          </th>
          <th width="30%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>否</B>
            </FONT>
          </th>
        </tr>
        <tr>
          <th width="70%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>是否列为黑名单</B>
            </FONT>
          </th>
          <th width="30%">
            <FONT style="FONT-SIZE: 40pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
              <B>否</B>
            </FONT>
          </th>
        </tr>
      </table>
    </dv-border-box-7>
  </div>
</template>

<script>
  export default {
    name:"riskinformation",
    data(){
      return {
      }
    },
    created() {
    },
    methods:{

    },
  };
</script>

<style>
  #RiskInformation {
    width: 90%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    padding: 0px 5px;
  }
</style>
