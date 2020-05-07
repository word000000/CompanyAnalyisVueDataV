<template>
  <div id="scroll-board">
    <dv-border-box-4 :reverse="true">
      <dv-scroll-board  style="height: 95%" :config="config" />
    </dv-border-box-4>
  </div>
</template>

<script>
  export default {
    name: 'ScrollBoard',
    data () {
      return {
        config: {
          header: ['时间', '病害信息', '数量', '标段'],
          data: [
            ['2019-07-01 19:25:00', '路面危害-松散', '5', 'xxxxxxx'],
            ['2019-07-02 17:25:00', '路面危害-路面油污清理', '13', 'xxxxxxx'],
            ['2019-07-03 16:25:00', '交安设施-交通标志牌结构', '6', 'xxxxxxx'],
            ['2019-07-04 15:25:00', '路基危害-防尘网', '2', 'xxxxxxx'],
            ['2019-07-05 14:25:00', '交安设施-交通标志牌结构', '1', 'xxxxxxx'],
            ['2019-07-06 13:25:00', '路面危害-松散', '3', 'xxxxxxx'],
            ['2019-07-07 12:25:00', '路基危害-防尘网', '4', 'xxxxxxx'],
            ['2019-07-08 11:25:00', '路面危害-路面油污清理', '2', 'xxxxxxx'],
            ['2019-07-09 10:25:00', '交安设施-交通标志牌结构', '5', 'xxxxxxx'],
            ['2019-07-10 09:25:00', '路基危害-防尘网', '3', 'xxxxxxx']
          ],
          index: true,
          columnWidth: [150, 150, 200,50,100],
          align: ['center'],
          rowNum: 9,
          headerBGC: '#fffff',
          headerHeight: 100,
          oddRowBGC: '#fffff',
          evenRowBGC: '#fffff'
        }
      }
    }
  }
</script>

<style>
  #scroll-board {
    width: 95%;
    height: 100%;
    margin-top: 10px;
    margin-right: 5px;
    overflow: hidden;
  }
</style>
