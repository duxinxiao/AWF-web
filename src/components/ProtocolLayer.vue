<template>
  <div class="container">
    <el-col :span="12">
      <el-form ref="form" :model="form" label-width="160px">
        <el-form-item label="测试类型">
          <el-radio-group v-model="form.type">
            <el-radio label="offline">离线测试</el-radio>
            <el-radio label="online">在线测试</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="模型文件">
          <el-select v-model="form.modelFile" placeholder="请选择模型文件">
            <el-option label="Active 1" value="1"></el-option>
            <el-option label="Active 2" value="2"></el-option>
            <el-option label="Active 3" value="3"></el-option>
            <el-option label="Active 4" value="4"></el-option>
            <el-option label="Active 5" value="5"></el-option>
            <el-option label="Active 6" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="测试数据选择" v-show="form.type==='offline'">
          <el-select v-model="form.testFile" placeholder="请选择测试数据">
            <el-option label="All" value="0"></el-option>
            <el-option label="百度" value="1"></el-option>
            <el-option label="163" value="2"></el-option>
            <el-option label="Google" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="测试站点选择" v-show="form.type==='online'">
          <el-select v-model="form.testFile" placeholder="请选择测试数据">
            <el-option label="百度" value="1"></el-option>
            <el-option label="163" value="2"></el-option>
            <el-option label="Google" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即开始</el-button>
          <el-button>Reset</el-button>
        </el-form-item>
      </el-form>
      <div class="result" v-show="processing">
        <div class="section">
          <div class="title">
            识别进度:
          </div>
          <div class="progress">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="(completed/total)*100"></el-progress>
          </div>
        </div>
        <div class="section">
          <div class="title">
            识别结果:
          </div>
          <div class="detail" v-for="i in completedArr">
            提取站点{{i}}指纹...<br>
            识别站点{{i}}指纹...<br>
            待测站点{{i}}分类结果{{i}}正确<br>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script lang="babel">
  import axios from 'axios';

  export default {
    data() {
      return {
        form: {
          type: 'offline',
          modelFile: null,
          testFile: null,
        },
        processing: false,
        total: 5,
        completed: 0,
      };
    },
    computed: {
      completedArr() {
        const arr = [];
        for (let i = 1; i <= this.completed; i += 1) {
          arr.push(i);
        }
        return arr;
      },
    },
    methods: {
      onSubmit() {
        this.completed = 0;
        if (!this.form.modelFile || !this.form.testFile) {
          this.$message.error('请选择模型和测试数据');
        } else {
          axios.post('/jobs/submit', {
            type: this.form.type,
            modelType: this.form.modelFile,
            testType: this.form.testFile,
          }).then((response) => {
            const data = response.data;
            if (data.code === 'Success') {
              this.processing = true;
              this.$message.success('开始处理模型数据');
              setTimeout(() => {
                this.getProgress();
              }, 1000);
            } else {
              this.$message.error(data.message);
            }
          }).catch((err) => {
            this.$message.error(err.message);
          });
        }
      },
      getProgress() {
        axios.get('/jobs/result')
          .then((response) => {
            const data = response.data;
            if (data.code === 'Success') {
              this.completed = data.data;
              if (data.data !== this.total) {
                setTimeout(() => {
                  this.getProgress();
                }, 1000);
              }
            } else {
              this.$message.error(data.message);
            }
          }).catch((err) => {
            this.$message.error(err.message);
          });
      },
    },
    filters: {
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    margin-left: 3rem;
  }
  .result {
    margin-top: 3rem;
    margin-left: 3rem;
    .section {
      margin-bottom: 2rem;
    }
    .title {
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .detail {
      // background-color: #333;
    }
    .progress {
      // width: 400px;
    }
  }
</style>

<style lang="scss">
  .el-select {
    width: 400px;
  }
</style>
