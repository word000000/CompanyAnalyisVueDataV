<template>

    <dv-border-box-11 title="单个公司">
      <dv-loading >Loading...</dv-loading>
      <div  class="body">
        <div class="item">
          <dv-active-ring-chart :config="config1" style="width:200px;height:200px" />
        </div>
      </div>
    </dv-border-box-11>
</template>

<script>
    export default {
      name: "OneCompany",
      title: {
        text: '剩余油量表',
        style: {
          fill: '#fff'
        }
      },
      series: [
        {
          type: 'gauge',
          data: [ { name: 'itemA', value: 55 } ],
          center: ['50%', '55%'],
          axisLabel: {
            formatter: '{value}%',
            style: {
              fill: '#fff'
            }
          },
          axisTick: {
            style: {
              stroke: '#fff'
            }
          },
          animationCurve: 'easeInOutBack'
        }
      ]
    }
</script>

<style scoped>

</style>
