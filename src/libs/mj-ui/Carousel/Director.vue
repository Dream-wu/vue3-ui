<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a href="javascript:;" @click="dirClick('next')"></a>
  </div>
  <div class="director dir-pre" v-else-if="dir === 'pre'">
    <a href="javascript:;" @click="dirClick('pre')"></a>
  </div>
</template>
<script>
export default {
  name: 'Director',
  props: {
    dir: {
      type: String
    }
  },
  setup(props, ctx) {
    const dirClick = dir => {
      ctx.emit('dir-click', dir)
    }

    return {
      dirClick
    }
  }
}
</script>
<style lang="css" scoped>
.director {
    position:absolute;
    /* width: 30px; */
    height: 22px;
    z-index: 999;
    padding: 0 8px;
    top: 50%;
    margin-top: -11px;
    background-color: rgba(0,0,0,.5)
}
a {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 1px solid #fff;
}
.dir-next {
    right: 12px;
    padding-right: 10px;
}
.dir-next a {
    border-right: 1px solid #fff;
    transform: rotate(45deg)
}
.dir-pre {
    left: 12px;
    padding-left: 10px;
}
.dir-pre a {
    border-left: 1px solid #fff;
    transform: rotate(-45deg)
}
</style>
