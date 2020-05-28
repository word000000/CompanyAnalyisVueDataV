<template>
    <div class="radar-map">
      <dv-border-box9 >
        <br/>
        <div style="display: flex;margin:10px;flex-direction: column;font-size: 20pt; width: 100%; font-family: 华文楷体">雷达图</div>
        <div id="main" style="width: 100%; height:280px;margin-left: 20px"></div>
      </dv-border-box9>
    </div>
</template>

<script>

    export default {
      name:'RadarMap',
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
          myChart.setOption(
            {
              title: {
              },
              tooltip: {},
              legend: {
                orient: 'vertical',
                x: 'left',
                y: 'top',
                textStyle: { //图例文字的样式
                  color: '#fff',
                  fontSize: 16
                },
              },
              radar: {
                // shape: 'circle',
                name: {
                  textStyle: {
                    color: '#fff',
                    borderRadius: 3,
                    padding: [3, 5]
                  }
                },
                indicator: [
                  { name: '风险评分', max: 100},
                  { name: '经营评分', max: 100},
                  { name: '知识产权评分', max: 100},
                  { name: '基本信息评分', max: 100},
                ]
              },
              series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                areaStyle: {normal: {}},
                data: [

                  {
                    value: [100, 60, 80, 70],
                    name: '公司:aaaa1'
                  },
                  {
                    value: [51, 60, 80, 71],
                    name: '公司:aaaa2'
                  },
                  {
                    value: [55, 80, 80, 72],
                    name: '公司:aaaa3'
                  },
                  {
                    value: [55, 60, 80, 74],
                    name: '公司:aaaa4'
                  },
                  {
                    value: [34, 60, 70, 75],
                    name: '公司:aaaa5'
                  },
                  {
                    value: [54, 60, 80, 80],
                    name: '公司:aaaa6'
                  },
                  {
                    value: [60, 65, 80, 87],
                    name: '公司:aaaa7'
                  },
                  {
                    value: [59, 66, 83, 70],
                    name: '公司:aaaa8'
                  },
                  {
                    value: [56, 100, 83, 70],
                    name: '公司:aaaa9'
                  },
                  {
                    value: [35, 80, 100, 70],
                    name: '公司:aaaa10'
                  },
                  {
                    value: [30, 60, 44, 70],
                    name: '公司:aaaa11'
                  },
                  {
                    value: [50, 44, 80, 100],
                    name: '公司:aaaa12'
                  },
                ]
              }]
            }
          )
        }
      }
    };
</script>

<style>
</style>
