<template>
  <div id="circlegrade">
    <div style="display: flex;flex-direction: column;">
      <div id="temp" style="width: 350px; height:300px;margin-top: 30px"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'circle',
    data () {
      return {
        charts: '',
        opinion: ['风险信息', '经营信息', '企业基本信息', '知识产权'],
        opinionData: [
          {value: 62, name: '风险信息'},
          {value: 65, name: '经营信息'},
          {value: 63, name: '企业基本信息'},
          {value: 70, name: '知识产权'}
        ]
      }
    },
    methods: {
      drawPie (id) {
        this.charts = this.$echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },

          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['风险信息', '经营信息', '企业基本信息', '知识产权'],
            textStyle:{//图例文字的样式
              color:'#ccc',
              fontSize:14
            }
          },

          series: [
            {
              name: '信息来源',
              type: 'pie',
              radius: ['30%', '50%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  testStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.opinionData
            }
          ],
          color: [ '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f']
        })
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawPie('temp')
      })
    }
  }
</script>

<style  scoped>
  #circlegrade {
    width: 400px;
    height: 300px;

  }
</style>



