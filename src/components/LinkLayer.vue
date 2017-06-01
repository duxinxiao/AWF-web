<template>
  <div class="container">
    <el-col :span="12">
      <el-form ref="form" :model="form" label-width="160px">
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
        <el-form-item label="目标用户IP">
          <el-input v-model="form.srcIP"></el-input>
        </el-form-item>
        <el-form-item label="入口节点IP">
          <el-input v-model="form.dstIP"></el-input>
        </el-form-item>
        <el-form-item label="入口节点端口">
          <el-input v-model="form.dstPort"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">开始</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <div class="result" v-show="processing">
        <div class="section">
          <div class="title">
            识别进度:
          </div>
          <div class="progress">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="(step/5)*100"></el-progress>
          </div>
        </div>
        <div class="section">
          <div class="title">
            识别结果:
          </div>
          <div class="detail">
            <p v-if="step >= 1">
              调制用户 {{ form.srcIP }} 的流量...
            </p>
            <p v-if="step >= 2">
              记录用户 {{ form.srcIP}} 的流量...
            </p>
            <p v-if="step >= 3">
              数据预处理...
            </p>
            <p v-if="step >= 4">
              提取特征...
            </p>
            <p v-if="step >= 5">
              识别站点...
            </p>
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
          modelFile: null,
          srcIP: null,
          dstIP: null,
          dstPort: null,
        },
        processing: false,
        step: 0,
      };
    },
    computed: {
    },
    methods: {
      onSubmit() {
        if (!this.form.modelFile || !this.form.srcIP || !this.form.dstIP || !this.form.dstPort) {
          this.$message.error('请填写参数');
        } else {
          this.processing = true;
          this.step = 0;
          axios.post('/jobs/link-submit', {
            model: this.form.modelFile,
            srcIP: this.form.srcIP,
            dstIP: this.form.dstIP,
            dstPort: this.form.dstPort,
          }).then((res) => {
            if (res.data.code === 'Success') {
              this.getProgress();
            } else {
              this.$message.error(res.data.message);
            }
          }).catch((error) => {
            this.$message.error(error.message);
          });
        }
      },
      getProgress() {
        setTimeout(() => {
          axios.get('/jobs/link-progress')
            .then((res) => {
              if (res.data.code === 'Pending') {
                this.step = res.data.data.step;
                this.getProgress();
              } else if (res.data.code === 'Success') {
                this.$alert(`识别出用户 ${this.form.srcIP} 正在访问 facebook.com`, '', {
                  confirmButtonText: '确定',
                });
              } else {
                this.$message.error(res.data.message);
              }
            }).catch((error) => {
              this.$message.error(error.message);
            });
        }, 5000);
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
