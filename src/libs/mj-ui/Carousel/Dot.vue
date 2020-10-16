<template>
  <div class="dot-wrapper" v-if="hasDot">
    <div v-for="item in itemLen" :key="item" class="dot-item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{
          backgroundColor: item - 1 === currentIndex ? dotBgColor : '#fff'
        }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'carDot',
  props: {
    itemLen: Number,
    currentIndex: Number,
    hasDot: {
      type: Boolean,
      default: true
    },
    dotBgColor: {
      type: String,
      default: '#ff5000'
    }
  },
  setup(props, ctx) {
    const dotClick = index => {
      ctx.emit('dot-click', index)
    }

    return {
      dotClick
    }
  }
}
</script>
<style scoped>
.dot-wrapper {
  position: absolute;
  width: 100%;
  bottom: 12px;
  z-index: 999;
  text-align: center;
}
.dot-item {
  display: inline-block;
  margin-right: 4px;
}
.dot-lk {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
