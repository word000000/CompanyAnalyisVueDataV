<template>
  <div id="corporate-portrait">
    <dv-border-box-7>
      <h2 align="center" style="margin: 5px">
        <FONT style="FONT-SIZE: 40pt; width: 100%;height: 2%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">
          <B>企业画像</B>
        </FONT>
      </h2>
      <div id="main" style="width: 100%; height:98%;margin-top: 10px"></div>
    </dv-border-box-7>

  </div>
</template>

<script>
  export default {
    name:'corporatePortrait',
    data() {
      return {}
    },
    props: {
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            left: 'center',
            data: ['某公司'],
            textStyle:{//图例文字的样式
              color:'#ccc',
              fontSize:14
            }
          },
          radar: [
            {
              indicator: [
                {text: '风险评分', max: 100},
                {text: '经营评分', max: 100},
                {text: '企业基本信息评分', max: 100},
                {text: '知识产权评分', max: 100}
              ],
              center: ['48%', '50%'],
              radius: 80
            }
          ],
          series: [
            {
              type: 'radar',
              tooltip: {
                trigger: 'item'
              },
              areaStyle: {},
              data: [
                {
                  value: [60, 73, 85, 40],
                  name: '某公司'
                }
              ]
            }
          ]
        })
      }
    }
  };
</script>

<style>
  #corporate-portrait {
    width: 90%;
    box-shadow: 0 0 3px blue;
    display: flex;
    margin-top: 10px;
    margin-left: 30px;
    flex-direction: column;

    .corporate-portrait-title {
      font-weight: bold;
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 20px;
    }

    .dv-scroll-corporate-portrait {
      flex: 1;
    }
  }
</style>
