<template>
  <div class="audio-player">
    <div class="audio-body">
      <div class="vision"
           :class="{active: status}">
        <Icon type="md-musical-note"
              size="17" />
      </div>
      <div class="control">
        <Icon @click="toggleStatus"
              :type="status ? 'md-pause' : 'md-play'" />
        <Icon @click="downloadSrc"
              type="md-download" />
      </div>
      <div class="progress">
        <Progress :percent="percent"
                  :stroke-width="5"
                  status="active"
                  ref="progress"
                  hide-info
                  @click.native="clickProgress" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AudioPlayer',
  props: ['src'],
  data() {
    return {
      audio: null,
      status: false,
      duration: 0,
      progressDuration: 0,
      percent: 0,
      progressTimer: null
    }
  },
  watch: {
    status(n) {
      if (n) {
        let playPromise = this.audio.play()
        if (playPromise) {
          playPromise
            .then(() => {})
            .catch(error => {
              this.toggleStatus()
              this.$Message.error('音频资源加载失败')
            })
        }
      } else {
        this.audio.pause()
      }
    }
  },
  created() {
    this.init(this.src)
  },
  mounted() {
    this.progressDuration = this.$refs[
      'progress'
    ].$el.children[0].children[0].clientWidth
  },
  methods: {
    init(src) {
      this.audio = new Audio(src)
      this.audio.preload = 'none'
      // 媒体加载完成
      this.audio.onloadedmetadata = () => {
        this.duration = this.audio.duration
      }
      // 监听播放结束
      this.audio.onended = () => {
        this.percent=100;
        this.status = false
        clearInterval(this.progressTimer)
      }
    },
    toggleStatus() {
      if (this.status) {
        this.pause()
      } else {
        this.start()
      }
    },
    start() {
      this.status = true
      if (this.percent === 100) this.percent = 0
      this.onProgress(currentTime => {
        this.percent = (currentTime / this.duration) * 100
      })
    },
    pause() {
      this.status = false
      clearInterval(this.progressTimer)
    },
    onProgress(cb) {
      this.progressTimer = setInterval(() => {
        cb(this.audio.currentTime)
      },100)
    },
    clickProgress(e) {
      if (
        e.target.classList.contains('ivu-progress-inner') ||
        e.target.classList.contains('ivu-progress-bg')
      ) {
        if (this.status) {
          let percent = (e.offsetX / this.progressDuration) * 100
          this.audio.currentTime = (percent / 100) * this.duration
          this.percent = percent
        }
      }
    },
    downloadSrc() {
      let a = document.createElement('a')
      a.href = this.src
      a.download = true
      a.click()
    }
  },
  beforeDestroy() {
    this.pause()
    this.audio = null
  }
}
</script>
<style lang="scss">
@keyframes rotate{
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg)
  }
}
 .audio-player{
   padding: 10px 0;
   .audio-body{
     display: flex;
     align-items: center;
     border: 1px solid #eee;
     height: 40px;
     border-radius: 20px;
     background: #fff;
     .ivu-icon{
       font-size: 15px;
       cursor: pointer;
     }
     .vision{
       display: flex;
       justify-content: center;
       align-items: center;
       height: 30px;
       flex: 0 0 30px;
       margin-left:5px;
       background: #eee;
       border-radius: 50%;
     }
     .active{
       animation: rotate infinite 5s linear;
     }
     .control{
       flex:0 0 50px;
       text-align: center;
     }
     .progress{
       flex: 1 1 auto;
       margin-right: 10px;
     }
   }
 }
    
</style>
