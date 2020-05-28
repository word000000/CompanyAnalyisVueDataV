<template>
  <div id="ScrollRankBoard">
    <div class="ranking-board-title" style="margin-top: 20px;font-size: 20pt; width: 100%; color: #ccc; LINE-HEIGHT: 100%; font-family: 华文楷体">企业评分排行</div>
    <dv-scroll-ranking-board style="height:500px;width:95%;margin: 20px" :config="config" />
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
              name: 'aaaa1',
              value: 100
            },
            {
              name: 'aaaa2',
              value: 99
            },
            {
              name: 'aaaa3',
              value: 78
            },
            {
              name: 'aaaa4',
              value: 66
            },
            {
              name: 'aaaa5',
              value: 80
            },
            {
              name: 'aaaa6',
              value: 45
            },
            {
              name: 'aaaa7',
              value: 29
            },
            {
              name: 'aaaa8',
              value: 44
            },
            {
              name: 'aaaa9',
              value: 66
            },
            {
              name: 'aaaa10',
              value: 26
            },
            {
              name: 'aaaa11',
              value: 50
            },
            {
              name: 'aaaa12',
              value: 29
            }
          ],
          rowNum: 4
        }
      }
    }
  }
</script>

<style>
</style>
