<template>
  <div id="ScrollRankBoard">
    <div class="ranking-board-title" style="margin-top: 20px">巡查上报记录数量</div>
    <dv-scroll-ranking-board style="height:300px;width:95%;margin: 20px" :config="config" />
  </div>
</template>

<script>
  export default {
    name: 'ScrollRankBoard',
    data () {
      return {
        config: {
          data: [
            {
              name: '日常养护',
              value: 55
            },
            {
              name: '交通事故',
              value: 120
            },
            {
              name: '路面',
              value: 78
            },
            {
              name: '桥通',
              value: 66
            },
            {
              name: '计日工',
              value: 80
            },
            {
              name: '路基',
              value: 45
            },
            {
              name: '交安设施',
              value: 29
            },
            {
              name: '除雪',
              value: 29
            },
            {
              name: '绿化',
              value: 29
            }
          ],
          rowNum: 5
        }
      }
    }
  }
</script>

<style>
</style>
