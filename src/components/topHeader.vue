<template>
  <div id="top-header">
    <dv-decoration-8 style="width:350px;height:45px;" />
    <div id="top-Name">
      <div style="font-size: 25px;">多公司对比</div>
      <dv-decoration-5 style="width:550px;height:20px;"></dv-decoration-5>
    </div>
    <dv-decoration-8 style="width:350px;height:45px;" :reverse="true"/>
  </div>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style>
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  #top-Name{
    display: flex;
    flex-direction: column;
  }
}
</style>
