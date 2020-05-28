<template>
    <div id="logo">
        <div style="display: flex;flex-direction: column">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <el-row :gutter="21">
            <el-col :span="12" :offset="8">
              <div class="grid-content bg-purple">
                <el-card shadow="hover" style="height:100%;width: 630px;background-color: antiquewhite">
                  <h1>企业画像</h1>
                  <br/>
                  <el-row :gutter="20">
                    <el-col :span="17">
                      <div class="grid-content bg-purple">
                        <el-autocomplete
                          v-model="name"
                          :fetch-suggestions="querySearchAsync"
                          placeholder="请输入企业名"
                          class="searchinput"
                          @select="handleSelect"
                          clearable
                        ></el-autocomplete>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        <el-button type="success" icon="el-icon-search"  @click="search(name)" plain circle></el-button>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <div class="grid-content bg-purple">
                        <el-button type="primary"  @click="drawer = true" plain round>对比列表</el-button>
                      </div>
                    </el-col>
                  </el-row>
                  <br/>
                </el-card>


                <el-col :span="12" :offset="2"style="margin-top: 20px;margin-bottom: 20px">
                  <el-button v-if="this.data.length>=2" type="warning" @click="data=[]" round>清除记录</el-button>
                  <br/>
                </el-col>
                <br/>
                <el-card v-for="(data,index) in data" :key="index" shadow="hover" style="width: 630px;background-color: aliceblue;margin-bottom: 20px;margin-top: 20px">
                  <div slot="header">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业:{{data[0]}}</span>
                    <el-button style="float: right; padding: 3px 0" @click="deletedata(index)" type="text">删除</el-button>
                  </div>
                  <el-collapse v-model="activeNames" @change="handleChange" style="opacity:0.6;">
                    <el-collapse-item title="企业基本信息" name="1" style="text-align: left">
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;注册资本：{{data[1]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;成立日期：{{data[2]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;从业人数：{{data[3]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;企业状态：{{data[4]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;企业(机构)类型：{{data[5]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;企业类别：{{data[6]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;行业门类：{{data[7]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;注册资本(金)币种：{{data[8]}}</div>
                    </el-collapse-item>
                    <el-collapse-item title="企业风险信息" name="2" style="text-align: left">
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;开庭公告数：{{data[9]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;裁判文书：{{data[10]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;行政处罚数：{{data[11]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;是否列为异常：{{data[12]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;是否工商部失信企业：{{data[13]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;是否列为黑名单：{{data[14]}}</div>
                    </el-collapse-item>
                    <el-collapse-item title="企业经营信息" name="3" style="text-align: left">
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;年社保金额：{{data[15]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;年对外投资次数：{{data[16]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;年出资累计应缴额：{{data[17]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;线上招聘记录条数：{{data[18]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;被抽查的产品的合格率：{{data[19]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;中标次数：{{data[20]}}</div>
                    </el-collapse-item>
                    <el-collapse-item title="企业创新能力" name="4" style="text-align: left">
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;商标申请次数：{{data[21]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;专利申请次数：{{data[22]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;域名申请次数：{{data[23]}}</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;软件著作权登记次数：{{data[24]}}</div>
                    </el-collapse-item>
                  </el-collapse>
                  <br/>
                  <el-button type="success" icon="el-icon-help" @click="openFullScreen1" plain round>企业画像</el-button>
                  <el-button v-if="!find(data[0])" type="primary" icon="el-icon-circle-plus-outline" @click="addCompare(data[0])" plain round>加入对比</el-button>
                  <el-button v-else type="warning" icon="el-icon-remove-outline" @click="deleteCompare(data[0])" plain round>移出对比</el-button>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-drawer
          title="对比列表"
          :visible.sync="drawer"
          :direction="direction">
          <el-table
            :data="tableData"
            style="margin: 10px"
            max-height="750">
            <el-table-column
              fixed
              prop="index"
              label="序号"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="企业名"
              width="200">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <br/>
          <br/>
          <el-button v-if="this.tableData.length!==0" type="success" @click="openFullScreen2" round plain>开始企业对比</el-button>
        </el-drawer>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
        restaurants: [],
        name: '',
        timeout:  null,
        tableData:[
          {index: 1 ,name:'aaaa2'},
          {index: 2 ,name:'aaaa3'},
          {index: 3 , name:'aaaa4'},
          {index: 4 , name:'aaaa5'},
          {index: 5 , name:'aaaa6'},
          {index: 6 , name:'aaaa7'},
          {index: 7 , name:'aaaa8'},
          {index: 8 , name:'aaaa9'},
          {index: 9 , name:'aaaa10'},
          {index: 10 ,name:'aaaa11'},
          {index: 11 ,name:'aaaa12'},
        ],
        basedata:[
            ['aaaa1', '500,0000', '2015-07-02','100','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',2,3,5,'是','否','否','20万','30','1000万',1000,'80%',5,2,3,5,10],
            ['aaaa2', '100,0000', '2015-07-02','50','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',4,3,4,'是','否','否','20万','30','100万',100,'30%',5,2,3,5,10],
            ['aaaa3', '20,0000', '2015-07-02','60','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',2,1,5,'是','否','否','20万','30','1000万',1000,'30%',5,2,3,11,10],
            ['aaaa4', '30,0000', '2015-07-02','160','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',4,3,4,'是','否','否','20万','30','1000万',2000,'30%',5,2,3,5,10],
            ['aaaa5', '40,0000', '2015-07-02','150','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',2,1,5,'是','否','否','20万','30','1000万',1000,'30%',5,2,3,11,10],
            ['aaaa6', '10,0000', '2015-07-02','200','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',4,3,4,'是','否','否','20万','30','1030万',100,'30%',5,2,3,5,10],
            ['aaaa7', '30,0000', '2015-07-02','140','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',2,1,5,'是','否','否','20万','30','1500万',1010,'30%',5,2,3,11,10],
            ['aaaa8', '510,0000', '2015-07-02','140','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',2,3,5,'是','否','否','20万','30','1000万',1000,'80%',5,2,3,5,10],
            ['aaaa9', '510,0000', '2015-07-02','122','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',4,3,4,'是','否','否','20万','30','1500万',1000,'30%',5,2,3,5,10],
            ['aaaa10', '5,0000', '2015-07-02','147','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',2,1,5,'是','否','否','20万','30','1000万',1000,'30%',5,2,3,11,10],
            ['aaaa11', '5,0000', '2015-07-02','136','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',2,3,5,'是','否','否','20万','30','1500万',1000,'80%',5,2,3,5,10],
            ['aaaa12', '5,0000', '2015-07-02','155','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',4,3,4,'是','否','否','20万','30','20万',1000,'30%',5,2,3,5,10],
          ],
        data:[
            ['aaaa1', '500,0000', '2015-07-02','100','在营（开业）企业','有限责任公司分公司(自然人投资或控股)','私营企业','批发和零售业','人民币',2,3,5,'是','否','否','20万','30','1000万',1000,'80%',5,2,3,5,10],
          ]
        };
    },
    methods: {
      find(name){
        for(let data of this.tableData){
          if(name == data.name){
            return true
          }
        }
        return false
      },

      openFullScreen1() {
        let that = this
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {

          loading.close()
          that.$router.push('/company')
        }, 1500);

      },

      openFullScreen2() {
        let that = this
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          that.$router.push('/contest')
        }, 1500);

      },

      addCompare(name) {
        this.$confirm('是否将企业加入对比列表?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let that= this
          that.tableData.push({index:that.tableData.length+1,name: name})
          this.$notify.success({
            title: '成功',
            message: '已将企业'+name+'加入对比'
          });
        }).catch(() => {
          this.$notify({
            title: '取消',
            message: '已取消操作',
          });
        });
      },

      deleteCompare(name) {
        this.$confirm('是否将企业移出对比列表?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let that= this
          for(let data of that.tableData){
            if(data.name === name){
              that.tableData.splice(data.index-1,1)
            }
          }
          this.$notify.success({
            title: '成功',
            message: '已将企业'+name+'加入对比'
          });
        }).catch(() => {
          this.$notify({
            title: '取消',
            message: '已取消操作',
          });
        });
      },

      search(name){
        var index = 0;
        var has = false;
        for(let data of this.data){
          if(name === data[0]) {
            this.data.splice(index,1)
          }
          index=index+1
        }
        for(let data of this.basedata){
          if(name === data[0]) {
            this.data.unshift(data)
            has = true
          }
        }
        if(!has&&name!==''){
          this.$notify.error({
            title: '错误',
            message: '未找到企业：'+name
          });
        }
      },

      deleteRow(index, rows) {
        this.$confirm('是否将此企业移出对比列表？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$notify.success({
            title: '成功',
            message: '已将企业移出对比'
          });
          rows.splice(index, 1);
        }).catch(() => {
          this.$notify({
            title: '取消',
            message: '已取消操作',
          });
        });

      },

      deletedata(index){
        this.data.splice(index,1)
        this.$notify({
          title: '成功',
          message: '成功删除查找记录',
          type: 'success'
        });
      },

      loadAll() {
        return [
          { "value": "aaaa1" },
          { "value": "aaaa2" },
          { "value": "aaaa3" },
          { "value": "aaaa4" },
          { "value": "aaaa5" },
          { "value": "aaaa6" },
          { "value": "aaaa7" },
          { "value": "aaaa8" },
          { "value": "aaaa9" },
          { "value": "aaaa10" },
          { "value": "aaaa11" },
          { "value": "aaaa12" },
          { "value": "bbbb1" },
          { "value": "bbbb2" },
          { "value": "cccc1" },
          { "value": "cccc2" },

        ];
      },

      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },

      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },

      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>

<style>
  .logo{
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url('../img/bg.png');
    background-size: 100% 100%;
  }
  .searchinput{
    border: 1px solid #c5c5c5;
    border-radius: 20px;
    background: #f4f4f4;
    width: 410px;
  }
  .searchinput .el-input-group__prepend {
    border: none;
    background-color: transparent;
    padding: 0 10px 0 30px;
  }
  .searchinput .el-input-group__append {
    border: none;
    background-color: transparent;
  }
  .searchinput .el-input__inner {
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: transparent;
  }
  .searchinput .el-icon-search{
    font-size: 16px;
  }
  .searchinput .centerClass {
    height: 100%;
    line-height: 100%;
    display: inline-block;
    vertical-align: middle;
    text-align: right;
  }
  .searchinput .line {
    width: 1px;
    height: 26px;
    background-color: #c5c5c5;
    margin-left: 14px;
  }
  .searchinput:hover{
    border: 1px solid #D5E3E8;
    background: #fff;
  }
  .searchinput:hover .line {
    background-color: #D5E3E8;
  }
  .searchinput:hover .el-icon-search{
    color: #409eff;
    font-size: 16px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
