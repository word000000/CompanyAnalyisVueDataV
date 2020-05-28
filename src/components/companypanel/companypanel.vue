<template>
  <div id="data-view">
    <dv-full-screen-container>
      <top-header style="height:50px"/>
      <dv-border-box1>
        <div class="main-content" style=" display:flex;flex-direction: row;height: 98%;width: 98%">
          <div class="block-left-right-content" style = "display: flex;flex-direction:column;flex: 45 ">
            <company-basicInformation style="flex: 55"/>
            <corporate-portrait style="flex: 45" />
          </div>
          <div class="block-top-bottom-content" style="display: flex;flex-direction: column;flex: 55 ">
            <div style="width: 100%;height:100%;display: flex;flex-direction: row">
              <riskinformation style="flex: 34"></riskinformation>
              <management-information style="flex: 34"></management-information>
              <property-information style="flex: 33"></property-information>
            </div>
            <div class="block-left-right-content"  style="display: flex;flex-direction: row;magin:5px">
              <company-grade style="flex: 45;margin: 5px" />
              <company-lab style="flex: 55;margin: 5px"/>
            </div>
          </div>
        </div>
      </dv-border-box1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from './topHeader'
import companyBasicInformation from './companyBasicInformation'
import corporatePortrait from './corporatePortrait'
import companyGrade from './companyGrade'
import companyLab from "./companyLab";
import Riskinformation from "./riskInformation";
import ManagementInformation from "./managementInformation";
import PropertyInformation from "./propertyInformation";
export default {
  name: 'DataView',
  components: {
    topHeader,
    companyBasicInformation,
    corporatePortrait,
    companyGrade,
    companyLab,
    Riskinformation,
    ManagementInformation,
    PropertyInformation
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
#data-view {
  width: 100%;
  height: 100%;
  color: #fff;
}
#dv-full-screen-container {
  background-image: url('../img/bg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}
</style>
